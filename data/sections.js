window.ConflictSections = {
  stats: [
    {
      value: "80",
      label: "ISW/CTP reports indexed",
      note: "Article coverage runs from February 28 through May 18, 2026."
    },
    {
      value: "Feb. 28",
      label: "Opening date in this brief",
      note: "ISW/CTP and Trump posts both place the opening public record on February 28."
    },
    {
      value: "138 to 2",
      label: "Normal Strait traffic versus reported traffic",
      note: "UKMTO reported around 138 usual daily transits and roughly 2 at the March 14 reporting point."
    },
    {
      value: "85",
      label: "Commercial vessels redirected by May 18",
      note: "CENTCOM figure reported by ISW/CTP on May 18."
    },
    {
      value: "May 19",
      label: "Planned strike date canceled May 18",
      note: "Trump announced the cancellation after requests from Qatari, Saudi, and Emirati leaders."
    }
  ],
  phases: [
    {
      title: "Opening shock",
      range: "Feb. 28 to Mar. 14",
      text: "The war opens with leadership strikes, air-defense suppression, Natanz, and rapid pressure on the Strait. The campaign is military, nuclear, and maritime from the first days."
    },
    {
      title: "Retaliation campaign",
      range: "Mar. 2 to Mar. 29",
      text: "Iran, Hezbollah, Iraqi militias, and later the Houthis push the conflict outward while US and Israeli strikes degrade launchers, command nodes, and missile production."
    },
    {
      title: "First bargaining track",
      range: "Mar. 23 to Apr. 16",
      text: "Deadlines, Islamabad talks, enrichment limits, HEU transfer, and missile limits move into the foreground. Public optimism and reported sticking points pull in opposite directions."
    },
    {
      title: "Strait contest",
      range: "Mar. 13 to May 10",
      text: "Hormuz becomes the central bargaining weapon. Iran pushes routes, fees, protocols, mines, and sovereignty claims. The United States answers with blockade language, interdictions, escorts, and mine-clearing."
    },
    {
      title: "Bargaining and pressure",
      range: "May 3 to May 17",
      text: "Iran tries to front-load the Strait and delay nuclear concessions. The United States keeps pressure through the blockade while Gulf states absorb direct risk."
    },
    {
      title: "Strike suspended",
      range: "May 18 to May 19",
      text: "Trump cancels the planned May 19 strike after Gulf leaders intervene. ISW/CTP reports the pause occurs alongside an insufficient Iranian counterproposal and fear of retaliation against Gulf energy infrastructure."
    }
  ],
  comparisons: [
    {
      title: "May 18 strike cancellation",
      trump: "Trump framed the pause as respect for Gulf leaders and confidence that a deal could be reached.",
      isw: "ISW/CTP reported the Gulf leaders also warned they would pay the price through Iranian retaliation against energy and oil infrastructure.",
      verdict: "The event matches. The rationale differs."
    },
    {
      title: "Nuclear bargaining",
      trump: "Trump's public red line stayed simple: no nuclear weapons for Iran.",
      isw: "ISW/CTP listed concrete demands: HEU transfer, facility dismantlement, and a long enrichment pause.",
      verdict: "The public slogan and policy details point in the same direction."
    },
    {
      title: "Military condition",
      trump: "Trump repeatedly described Iran as militarily shattered and close to surrender.",
      isw: "ISW/CTP still described active Iranian maritime coercion, drone attacks, proxy threats, and rebuilding efforts.",
      verdict: "Trump used surrender framing. ISW/CTP tracked continuing coercive capacity."
    }
  ],
  maritime: [
    { metric: "Traffic collapse", text: "Around 138 usual daily transits through the Strait became roughly 2 at the March 14 reporting point." },
    { metric: "Tehran route", text: "By March 24, vessels were reportedly paying Iran for safe passage through a Tehran-approved route." },
    { metric: "US blockade", text: "Trump announced the blockade on April 13 after saying the nuclear point remained unresolved." },
    { metric: "Fees to insurance", text: "Iran later reframed tolls as maritime insurance policies, turning coercion into bureaucracy." },
    { metric: "Sovereignty push", text: "By May, ISW/CTP assessed that recognition of Iranian sovereignty over Hormuz had become a central Iranian objective." },
    { metric: "Bypass strategy", text: "The UAE moved to expand Fujairah export capacity to reduce dependence on the Strait." }
  ],
  nuclear: [
    {
      title: "Natanz strike",
      text: "The first nuclear-site strike in the campaign hit Natanz on March 2, making the nuclear issue part of the war from the opening week."
    },
    {
      title: "US demand",
      text: "US demands centered on HEU transfer, facility dismantlement, and a long enrichment pause, according to ISW/CTP reporting."
    },
    {
      title: "Iranian counterproposal",
      text: "Iran's May 18 proposal did not commit to suspending enrichment or handing over HEU, and US officials considered it insufficient."
    },
    {
      title: "Public red line",
      text: "Trump's May 18 cancellation post said any deal would include no nuclear weapons for Iran."
    }
  ],
  sources: [
    {
      title: "Trump Truth Social posts",
      detail: "591 posts covering February 1 through May 19, 2026. Used here for Trump's public statements on Iran.",
      file: "claude-project/trump-truth-posts-2026-02-01_to_2026-05-19.txt"
    },
    {
      title: "ISW/CTP article files",
      detail: "80 article files covering February 28 through May 18, 2026. Each timeline card cites article-level source files and lines.",
      file: "pages"
    },
    {
      title: "ISW/CTP weekly bundles",
      detail: "13 weekly bundles span February 23 through May 24 as storage containers. The article evidence inside them runs February 28 through May 18.",
      file: "claude-project/claude-weekly"
    },
    {
      title: "May 18 ISW/CTP report",
      detail: "Core source for the strike cancellation, Iranian counterproposal, Persian Gulf Strait Authority, and CENTCOM vessel figures.",
      url: "https://understandingwar.org/research/middle-east/iran-update-special-report-may-18-2026/"
    }
  ]
};
