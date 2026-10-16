function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

// ---------- Skills ----------
const skills = ["Web Development", "Mobile Apps", "Solana & EVM dApps", "Web3 Research", "Community Engagement"];
document.getElementById("skills").innerHTML = skills.map(s => '<span class="skill">' + esc(s) + "</span>").join("");

// ---------- Projects ----------
// Add live and repo URLs in `links`, for example:
// links: [{ label: "Live Demo", url: "https://..." }, { label: "GitHub", url: "https://github.com/..." }]
const projects = [
  {
    name: "ARC Hub", icon: "A", status: "In progress",
    short: "An original Web3 Super dApp for Arc Testnet with real wallet and on-chain actions.",
    tags: ["Arc Testnet", "USDC", "Wallet", "Vercel"],
    about: "ARC Hub is my own Super dApp for Circle's Arc Testnet (Chain ID 5042002, USDC as the native gas token). It is inspired by the Startale super app idea but built from scratch, and every feature is meant to use real blockchain transactions instead of mocked data.",
    features: [
      "Wallet connect with automatic Arc Testnet detection and live balances",
      "Send, Receive and session-based Activity with real transaction hashes",
      "Planned: Swap, Earn (staking), Quests, Payments, Portfolio, Mini Apps, Leaderboard, Faucet, Referral"
    ],
    progress: "Phase 1 (wallet connect, network detection, balance) and Phase 2 (send, receive, activity) are deployed on Vercel and tested with MetaMask.",
    links: []
  },
  {
    name: "Solflux", icon: "S", status: "Devnet",
    short: "Solana NFT platform with minting, staking and unstaking.",
    tags: ["Solana", "Anchor", "NFT", "Devnet"],
    about: "Solflux is an NFT platform on Solana built with the Anchor framework. Users can mint NFTs, stake them and unstake them again, all running on Devnet.",
    features: ["NFT minting", "Staking and unstaking flow", "Anchor programs deployed on Devnet"],
    links: []
  },
  {
    name: "Soldot", icon: "D", status: "Built",
    short: "Gamified Solana dApp with streaks, tasks and leaderboards.",
    tags: ["Solana", "Next.js", "Prisma", "Wallet Auth"],
    about: "Soldot is a gamified Solana dApp that keeps users coming back with streaks and tasks. It comes with a production-style starter kit: a Prisma schema, Next.js API routes and wallet connect logic.",
    features: ["Daily streak system", "Task tracking", "Leaderboards", "Wallet-based authentication"],
    links: []
  },
  {
    name: "Fruit Slice", icon: "F", status: "Live",
    short: "Fruit slicing game with an on-chain leaderboard on Story.",
    tags: ["Story Protocol", "Solidity", "Game", "GitHub Pages"],
    about: "Fruit Slice is a browser game deployed on GitHub Pages. A Solidity smart contract on Story Mainnet stores player scores, so the leaderboard lives on-chain.",
    features: ["Playable fruit slicing game", "Solidity leaderboard contract on Story Mainnet", "Hosted on GitHub Pages"],
    links: []
  },
  {
    name: "NovaSphere", icon: "N", status: "Built",
    short: "Dark, futuristic landing page for a Web3 SuperApp.",
    tags: ["HTML", "CSS", "JavaScript", "UI"],
    about: "NovaSphere is a landing page concept for a Web3 SuperApp, inspired by Startale, with a dark and futuristic look.",
    features: ["Dark futuristic design", "Responsive layout", "SuperApp style sections"],
    links: []
  },
  {
    name: "Notes App", icon: "K", status: "Built",
    short: "Notes sharing app for teachers and students.",
    tags: ["Android", "Kotlin", "Firebase", "React Native"],
    about: "A notes app for teachers and students. The Android version uses Kotlin with Firestore and Firebase Auth, and an earlier version was built with React Native (Expo).",
    features: ["Teacher and student roles", "Firebase Auth and Firestore", "Notes uploading"],
    links: []
  }
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function tagsHtml(tags) {
  return '<div class="tags">' + tags.map(t => '<span class="tag">' + esc(t) + "</span>").join("") + "</div>";
}

projects.forEach((p, idx) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML =
    '<div class="project-banner">' + esc(p.icon) + "</div>" +
    '<div class="project-body">' +
    '<span class="status">' + esc(p.status) + "</span>" +
    "<h3>" + esc(p.name) + "</h3>" +
    "<p>" + esc(p.short) + "</p>" +
    tagsHtml(p.tags) +
    '<span class="more">View Details →</span></div>';
  card.addEventListener("click", () => openProject(idx));
  grid.appendChild(card);
});

function openProject(idx) {
  const p = projects[idx];
  let html =
    "<h3>" + esc(p.name) + "</h3>" +
    '<span class="status">' + esc(p.status) + "</span>" +
    "<p>" + esc(p.about) + "</p>" +
    "<h4>Features</h4><ul>" + p.features.map(f => "<li>" + esc(f) + "</li>").join("") + "</ul>";
  if (p.progress) html += "<h4>Progress</h4><p>" + esc(p.progress) + "</p>";
  html += "<h4>Tech</h4>" + tagsHtml(p.tags);
  if (p.links && p.links.length) {
    html += '<div class="modal-links">' + p.links.map(l =>
      '<a target="_blank" rel="noopener" href="' + esc(l.url) + '">' + esc(l.label) + "</a>"
    ).join("") + "</div>";
  }
  modalBody.innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ---------- Ecosystems ----------
const ecosystems = [
  {
    name: "Arc",
    desc: "Circle's stablecoin-focused L1 where USDC is the gas token. ARC Hub is built on its testnet.",
    links: [
      ["Portal", "https://portal.arc.io/"],
      ["Community", "https://community.arc.io/home"],
      ["Circle Quickstart", "https://developers.circle.com/stablecoins/quickstart-setup-transfer-usdc-sui"],
      ["X", "https://x.com/arc"]
    ]
  },
  {
    name: "Startale & Soneium",
    desc: "Startale's super app and stablecoin products, plus the Soneium network.",
    links: [
      ["Website", "https://startale.com/en"],
      ["App", "https://startale.com/en/app"],
      ["Startale USD", "https://usd.startale.com/"],
      ["Startale X", "https://x.com/StartaleGroup"],
      ["App X", "https://x.com/startaleapp"],
      ["Soneium X", "https://x.com/soneium"]
    ]
  },
  {
    name: "Astar",
    desc: "Astar Network and AstarFi: portal, explorer, docs, forum and blog.",
    links: [
      ["AstarFi Save", "https://astarfi.com/save"],
      ["Portal", "https://portal.astar.network/astar/assets"],
      ["Subscan", "https://astar.subscan.io/"],
      ["Docs", "https://docs.astar.network/"],
      ["GitHub", "https://github.com/AstarNetwork/Astar"],
      ["Forum", "https://forum.astar.network/"],
      ["Blog", "https://astar.network/blog"],
      ["Astar X", "https://x.com/astarnetwork"],
      ["AstarFi X", "https://x.com/astar_fi"]
    ]
  },
  {
    name: "Resonance",
    desc: "Resonance network with its kitchen game, guide and main site.",
    links: [
      ["Website", "https://rsnc.network"],
      ["Kitchen", "https://play.rsnc.network/kitchen"],
      ["Guide", "https://guide.rsnc.network"],
      ["X", "https://x.com/rsncnetwork"]
    ]
  }
];

const ecoGrid = document.getElementById("ecoGrid");
ecosystems.forEach(e => {
  const c = document.createElement("div");
  c.className = "eco-card";
  c.innerHTML =
    "<h3>" + esc(e.name) + "</h3><p>" + esc(e.desc) + "</p>" +
    '<div class="link-list">' +
    e.links.map(l => '<a target="_blank" rel="noopener" href="' + l[1] + '">' + esc(l[0]) + "</a>").join("") +
    "</div>";
  ecoGrid.appendChild(c);
});

// ---------- Ecosystem Updates (curated, no X widget needed) ----------
// To add an update: copy one object into `updates` and set `eco` to one of the feed ids below.
// Use the real post/article link in `url`.
const feeds = [
  { id: "soneium",  label: "Soneium",      handle: "soneium" },
  { id: "startale", label: "Startale",     handle: "StartaleGroup" },
  { id: "startaleapp", label: "Startale App", handle: "startaleapp" },
  { id: "astar",    label: "Astar",        handle: "astarnetwork" },
  { id: "astarfi",  label: "AstarFi",      handle: "astar_fi" },
  { id: "arc",      label: "Arc",          handle: "arc" },
  { id: "resonance", label: "Resonance",   handle: "rsncnetwork" }
];

const updates = [
  {
    eco: "arc",
    title: "Circle raises $222M in Arc token presale",
    text: "Circle announced a $222M Arc token presale at a $3B fully diluted valuation, with investors including a16z crypto and BlackRock.",
    source: "The Block",
    url: "https://www.theblock.co/amp/post/400709/circle-raises-222m-in-arc-token-presale-at-3b-fdv-from-a16z-crypto-blackrock-and-others-q1-revenue-up-20"
  },
  {
    eco: "astar",
    title: "Astar unveils Evolution Phase 2 roadmap",
    text: "Roadmap update covering Tokenomics 3.0 and a fixed supply model for Astar Network.",
    source: "KuCoin News",
    url: "https://www.kucoin.com/news/flash/astar-network-unveils-evolution-phase-2-roadmap-with-tokenomics-3-0-and-fixed-supply-model"
  },
  {
    eco: "astar",
    title: "Astar Q1 recap",
    text: "Quarterly recap from the official Astar blog.",
    source: "Astar Blog",
    url: "https://astar.network/blog/q1-recap-239"
  },
  {
    eco: "soneium",
    title: "Soneium Rewind 2025",
    text: "Year-in-review post from the official Soneium blog.",
    source: "Soneium Blog",
    url: "https://soneium.org/en/blog/soneium-rewind-2025/"
  },
  {
    eco: "soneium",
    title: "Soneium first quarter of mainnet: wrap-up",
    text: "Wrap-up of the first quarter after the Soneium mainnet launch.",
    source: "Soneium Blog",
    url: "https://soneium.org/en/blog/first-quarter-2025/"
  }
];

const tabs = document.getElementById("xTabs");
const xBox = document.getElementById("xBox");
const xOpen = document.getElementById("xOpen");

function showFeed(feed, btn) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  xOpen.href = "https://x.com/" + feed.handle;
  xOpen.textContent = "Follow @" + feed.handle + " on X";

  const items = updates.filter(u => u.eco === feed.id);
  let html = "";
  items.forEach(u => {
    html +=
      '<a class="update-card" target="_blank" rel="noopener" href="' + esc(u.url) + '">' +
      '<span class="update-source">' + esc(u.source) + "</span>" +
      "<h3>" + esc(u.title) + "</h3>" +
      "<p>" + esc(u.text) + "</p>" +
      '<span class="more">Read more →</span></a>';
  });
  if (!items.length) {
    html =
      '<div class="update-card empty"><h3>@' + esc(feed.handle) + "</h3>" +
      "<p>Latest posts from " + esc(feed.label) + " are on X. Tap the button below to open the feed.</p></div>";
  }
  xBox.innerHTML = html;
}

feeds.forEach((f, n) => {
  const b = document.createElement("button");
  b.className = "tab";
  b.textContent = f.label;
  b.addEventListener("click", () => showFeed(f, b));
  tabs.appendChild(b);
  if (n === 0) showFeed(f, b);
});
