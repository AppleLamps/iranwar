const data = window.ConflictData;

const state = {
  category: "all",
  source: "all",
  search: "",
  date: "all",
  expanded: false
};

const els = {
  stats: document.querySelector("#stats-grid"),
  categoryFilters: document.querySelector("#category-filters"),
  sourceFilters: document.querySelector("#source-filters"),
  recordToggle: document.querySelector("#record-toggle"),
  clearDate: document.querySelector("#clear-date"),
  coverageCount: document.querySelector("#coverage-count"),
  coverageStrip: document.querySelector("#coverage-strip"),
  search: document.querySelector("#timeline-search"),
  count: document.querySelector("#result-count"),
  timeline: document.querySelector("#timeline-rail"),
  phases: document.querySelector("#phase-grid"),
  compare: document.querySelector("#compare-grid"),
  maritime: document.querySelector("#maritime-board"),
  nuclear: document.querySelector("#nuclear-grid"),
  sources: document.querySelector("#source-ledger")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function dateLabel(date) {
  return data.coverage.find((item) => item.date === date)?.label || date;
}

function eventCountForDate(date) {
  return data.events.filter((event) => event.date === date).length;
}

function matchesSearch(event) {
  if (!state.search) return true;
  const haystack = [
    event.title,
    event.phase,
    event.summary,
    event.excerpt,
    event.sourceLabel,
    event.categories.join(" ")
  ].join(" ").toLowerCase();
  return haystack.includes(state.search.toLowerCase());
}

function getFilteredEvents() {
  return data.events.filter((event) => {
    const categoryMatch = state.category === "all" || event.categories.includes(state.category);
    const sourceMatch = state.source === "all" || event.sourceType === state.source;
    const dateMatch = state.date === "all" || event.date === state.date;
    const densityMatch = state.expanded || event.major;
    return categoryMatch && sourceMatch && dateMatch && densityMatch && matchesSearch(event);
  });
}

function buttonTemplate(item, active, type) {
  return `
    <button class="filter-chip ${active ? "is-active" : ""}" type="button" data-${type}="${escapeHtml(item.id)}" aria-pressed="${active}">
      ${escapeHtml(item.label)}
    </button>
  `;
}

function renderStats() {
  els.stats.innerHTML = data.stats.map((stat) => `
    <article class="stat-card">
      <strong>${escapeHtml(stat.value)}</strong>
      <span>${escapeHtml(stat.label)}</span>
      <p>${escapeHtml(stat.note)}</p>
    </article>
  `).join("");
}

function renderFilters() {
  els.categoryFilters.innerHTML = data.categories
    .map((category) => buttonTemplate(category, category.id === state.category, "category"))
    .join("");

  els.sourceFilters.innerHTML = data.sourceTypes
    .map((source) => buttonTemplate(source, source.id === state.source, "source"))
    .join("");

  els.recordToggle.innerHTML = `
    <button class="filter-chip ${!state.expanded ? "is-active" : ""}" type="button" data-density="major" aria-pressed="${!state.expanded}">
      Major events
    </button>
    <button class="filter-chip ${state.expanded ? "is-active" : ""}" type="button" data-density="expanded" aria-pressed="${state.expanded}">
      Expanded record
    </button>
  `;

  els.clearDate.hidden = state.date === "all";
  els.clearDate.textContent = state.date === "all" ? "Clear date" : `Clear ${dateLabel(state.date)}`;
}

function renderCoverage() {
  const eventDates = new Set(data.events.map((event) => event.date));
  els.coverageCount.textContent = `${data.coverage.length} ISW/CTP report days`;
  els.coverageStrip.innerHTML = data.coverage.map((item) => {
    const hasEvent = eventDates.has(item.date);
    const isActive = state.date === item.date;
    return `
      <button class="coverage-day ${hasEvent ? "has-event" : ""} ${isActive ? "is-active" : ""}" type="button" data-date="${item.date}" aria-pressed="${isActive}" title="${escapeHtml(item.label)} source report, ${eventCountForDate(item.date)} curated event${eventCountForDate(item.date) === 1 ? "" : "s"}">
        <span>${escapeHtml(item.label)}</span>
      </button>
    `;
  }).join("");
}

function renderTimeline() {
  const events = getFilteredEvents();
  const densityLabel = state.expanded ? "expanded" : "major";
  const dateText = state.date === "all" ? "" : ` for ${dateLabel(state.date)}`;
  els.count.textContent = `${events.length} ${densityLabel} event${events.length === 1 ? "" : "s"} shown${dateText}`;

  if (!events.length) {
    els.timeline.innerHTML = `
      <div class="empty-state">
        <strong>No matching events.</strong>
        <span>Clear the date, search, or filters.</span>
      </div>
    `;
    return;
  }

  els.timeline.innerHTML = events.map((event) => `
    <article class="event-card ${event.major ? "is-major" : "is-expanded"}" data-source="${event.sourceType}">
      <div class="event-pin" aria-hidden="true"></div>
      <div class="event-topline">
        <span class="event-date">${escapeHtml(event.label)}</span>
        <span class="event-source ${event.sourceType}">${event.sourceType === "truth" ? "Trump" : "ISW/CTP"}</span>
      </div>
      <h3>${escapeHtml(event.title)}</h3>
      <p>${escapeHtml(event.summary)}</p>
      <div class="event-tags">
        ${event.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join("")}
      </div>
      <details>
        <summary>Source excerpt</summary>
        <blockquote>${escapeHtml(event.excerpt)}</blockquote>
        <cite>${escapeHtml(event.sourceLabel)}</cite>
      </details>
    </article>
  `).join("");
}

function renderPhases() {
  els.phases.innerHTML = data.phases.map((phase, index) => `
    <article class="phase-card">
      <span class="phase-number">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <p class="phase-range">${escapeHtml(phase.range)}</p>
        <h3>${escapeHtml(phase.title)}</h3>
        <p>${escapeHtml(phase.text)}</p>
      </div>
    </article>
  `).join("");
}

function renderComparisons() {
  els.compare.innerHTML = data.comparisons.map((item) => `
    <article class="compare-card">
      <h3>${escapeHtml(item.title)}</h3>
      <div class="compare-columns">
        <div>
          <span>Trump frame</span>
          <p>${escapeHtml(item.trump)}</p>
        </div>
        <div>
          <span>ISW/CTP frame</span>
          <p>${escapeHtml(item.isw)}</p>
        </div>
      </div>
      <strong>${escapeHtml(item.verdict)}</strong>
    </article>
  `).join("");
}

function renderFocus() {
  els.maritime.innerHTML = data.maritime.map((item) => `
    <article>
      <span>${escapeHtml(item.metric)}</span>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");

  els.nuclear.innerHTML = data.nuclear.map((item) => `
    <article class="nuclear-card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function renderSources() {
  els.sources.innerHTML = data.sources.map((source) => `
    <article class="ledger-card">
      <h3>${escapeHtml(source.title)}</h3>
      <p>${escapeHtml(source.detail)}</p>
      ${source.url ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">Open report</a>` : `<span>${escapeHtml(source.file)}</span>`}
    </article>
  `).join("");
}

function renderInteractiveSurfaces() {
  renderFilters();
  renderCoverage();
  renderTimeline();
}

function bindEvents() {
  els.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderInteractiveSurfaces();
  });

  els.sourceFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-source]");
    if (!button) return;
    state.source = button.dataset.source;
    renderInteractiveSurfaces();
  });

  els.recordToggle.addEventListener("click", (event) => {
    const button = event.target.closest("[data-density]");
    if (!button) return;
    state.expanded = button.dataset.density === "expanded";
    renderInteractiveSurfaces();
  });

  els.coverageStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-date]");
    if (!button) return;
    state.date = state.date === button.dataset.date ? "all" : button.dataset.date;
    renderInteractiveSurfaces();
  });

  els.clearDate.addEventListener("click", () => {
    state.date = "all";
    renderInteractiveSurfaces();
  });

  els.search.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderTimeline();
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-links a").forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });
}

function init() {
  renderStats();
  renderInteractiveSurfaces();
  renderPhases();
  renderComparisons();
  renderFocus();
  renderSources();
  bindEvents();
}

init();
