const tools=[{"name": "ChatGPT", "short": "CG", "category": "AI Assistants", "url": "https://chatgpt.com/", "desc": "General-purpose AI assistant for research, writing, coding, analysis and multimodal workflows.", "tags": ["Assistant", "Multimodal", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "CG"}, {"name": "Claude", "short": "CL", "category": "AI Assistants", "url": "https://claude.ai/", "desc": "AI assistant suited to reasoning, long-context analysis, writing and coding workflows.", "tags": ["Assistant", "Research", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "CL"}, {"name": "Gemini", "short": "GE", "category": "AI Assistants", "url": "https://gemini.google.com/", "desc": "Google's multimodal AI assistant for research, productivity and creative work.", "tags": ["Assistant", "Multimodal", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "GE"}, {"name": "DeepSeek", "short": "DS", "category": "AI Assistants", "url": "https://chat.deepseek.com/", "desc": "AI assistant focused on reasoning, coding and technical problem solving.", "tags": ["Assistant", "Coding", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "DS"}, {"name": "Grok", "short": "GR", "category": "AI Assistants", "url": "https://grok.com/", "desc": "AI assistant from xAI for general questions, research, coding and real-time information workflows.", "tags": ["Assistant", "Research", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "GR"}, {"name": "Perplexity", "short": "PX", "category": "AI Assistants", "url": "https://www.perplexity.ai/", "desc": "AI-powered search and research assistant with web-backed answers and sources.", "tags": ["Research", "Search", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "PX"}, {"name": "Microsoft Copilot", "short": "MC", "category": "AI Assistants", "url": "https://copilot.microsoft.com/", "desc": "Microsoft's AI assistant for productivity, search and ecosystem-integrated workflows.", "tags": ["Assistant", "Productivity", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "MC"}, {"name": "Loes", "short": "LO", "category": "AI Assistants", "url": "https://loes.ai/", "desc": "Dutch AI assistant focused on Dutch-language use and privacy-conscious AI workflows.", "tags": ["Dutch", "Privacy", "EU"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false, "pricing": "Varies", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "LO"}, {"name": "GitHub Copilot", "short": "GH", "category": "Coding Assistants", "url": "https://github.com/features/copilot", "desc": "AI coding assistant integrated with popular developer workflows and IDEs.", "tags": ["Coding", "IDE", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web", "Desktop"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "GH"}, {"name": "Cursor", "short": "CU", "category": "Coding Assistants", "url": "https://www.cursor.com/", "desc": "AI-first code editor for generating, understanding and modifying software projects.", "tags": ["Coding", "Editor", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": true, "pricing": "Freemium", "platforms": ["Windows", "Linux", "macOS"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "CU"}, {"name": "Windsurf", "short": "WS", "category": "Coding Assistants", "url": "https://windsurf.com/", "desc": "AI coding environment focused on agentic development and codebase-aware assistance.", "tags": ["Coding", "IDE", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Windows", "Linux", "macOS"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "WS"}, {"name": "Replit", "short": "RP", "category": "Coding Assistants", "url": "https://replit.com/", "desc": "Browser-based development environment with AI-assisted coding and deployment workflows.", "tags": ["Coding", "Cloud", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web", "Desktop"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "RP"}, {"name": "Sourcegraph Cody", "short": "SC", "category": "Coding Assistants", "url": "https://sourcegraph.com/cody", "desc": "AI coding assistant designed for understanding and working across larger codebases.", "tags": ["Coding", "Search", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web", "Desktop"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "SC"}, {"name": "Tabnine", "short": "TB", "category": "Coding Assistants", "url": "https://www.tabnine.com/", "desc": "AI coding assistant focused on code completion and developer productivity.", "tags": ["Coding", "Completion", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web", "Desktop"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "TB"}, {"name": "NotebookLM", "short": "NL", "category": "Research & Analysis", "url": "https://notebooklm.google.com/", "desc": "Research and study assistant designed to work with your own source material and documents.", "tags": ["Research", "Notes", "Free"], "type": "Research", "openSource": false, "localModel": false, "featured": false, "pricing": "Free", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "NL"}, {"name": "Elicit", "short": "EL", "category": "Research & Analysis", "url": "https://elicit.com/", "desc": "AI research assistant focused on literature discovery, extraction and evidence synthesis.", "tags": ["Research", "Academic", "Free / Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "EL"}, {"name": "Consensus", "short": "CO", "category": "Research & Analysis", "url": "https://consensus.app/", "desc": "AI-powered search engine for exploring scientific research and evidence.", "tags": ["Research", "Academic", "Free / Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "CO"}, {"name": "Scite", "short": "SI", "category": "Research & Analysis", "url": "https://scite.ai/", "desc": "Research platform for discovering and evaluating scientific literature and citations.", "tags": ["Research", "Academic", "Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false, "pricing": "Paid", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "SI"}, {"name": "Connected Papers", "short": "CP", "category": "Research & Analysis", "url": "https://www.connectedpapers.com/", "desc": "Visual tool for exploring related academic papers and research networks.", "tags": ["Research", "Visualisation", "Free / Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "CP"}, {"name": "Ollama", "short": "OL", "category": "Local AI", "url": "https://ollama.com/", "desc": "Simple local runtime for downloading and running supported language models on your own system.", "tags": ["Local", "Privacy", "Free"], "type": "Local AI", "openSource": true, "localModel": true, "featured": false, "pricing": "Open Source", "platforms": ["Windows", "Linux", "macOS", "Local"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "OL"}, {"name": "LM Studio", "short": "LM", "category": "Local AI", "url": "https://lmstudio.ai/", "desc": "Desktop application for discovering and running compatible language models locally.", "tags": ["Local", "Desktop", "Free"], "type": "Local AI", "openSource": false, "localModel": true, "featured": false, "pricing": "Free", "platforms": ["Windows", "Linux", "macOS"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "LM"}, {"name": "Hugging Face", "short": "HF", "category": "AI Platforms & APIs", "url": "https://huggingface.co/", "desc": "Model, dataset and application ecosystem for building and exploring machine learning systems.", "tags": ["Models", "Datasets", "Developer"], "type": "Platform", "openSource": true, "localModel": false, "featured": false, "pricing": "Open Source", "platforms": ["Web", "API"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "HF"}, {"name": "OpenRouter", "short": "OR", "category": "AI Platforms & APIs", "url": "https://openrouter.ai/", "desc": "Unified API gateway for experimenting with and routing requests across multiple AI models.", "tags": ["API", "Models", "Developer"], "type": "Platform", "openSource": false, "localModel": false, "featured": false, "pricing": "Varies", "platforms": ["Web", "API"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "OR"}, {"name": "Mistral AI", "short": "MI", "category": "AI Platforms & APIs", "url": "https://mistral.ai/", "desc": "AI model provider offering general-purpose and developer-focused models and APIs.", "tags": ["Models", "API", "Developer"], "type": "Platform", "openSource": false, "localModel": false, "featured": false, "pricing": "Varies", "platforms": ["Web", "API"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "MI"}, {"name": "Midjourney", "short": "MJ", "category": "Image Generation", "url": "https://www.midjourney.com/", "desc": "Generative image platform for high-quality visual exploration and concept generation.", "tags": ["Images", "Creative", "Paid"], "type": "Image", "openSource": false, "localModel": false, "featured": false, "pricing": "Paid", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "MJ"}, {"name": "Adobe Firefly", "short": "AF", "category": "Image Generation", "url": "https://firefly.adobe.com/", "desc": "Adobe's generative AI tools for image creation, editing and creative production workflows.", "tags": ["Images", "Creative", "Free / Paid"], "type": "Image", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "AF"}, {"name": "Canva AI", "short": "CA", "category": "Image Generation", "url": "https://www.canva.com/ai-image-generator/", "desc": "AI-assisted design and image generation integrated with Canva's visual creation workflow.", "tags": ["Images", "Design", "Free / Paid"], "type": "Image", "openSource": false, "localModel": false, "featured": false, "pricing": "Freemium", "platforms": ["Web"], "securitySubtype": null, "lastVerified": "2026-09-26", "logoText": "CA"}, {"name": "PentestGPT", "short": "PG", "category": "Security AI", "url": "https://github.com/artyang/PentestGPT", "desc": "AI-assisted penetration testing framework designed to guide testing progress and specific security operations.", "tags": ["Pentesting", "LLM", "Research"], "type": "Security", "openSource": true, "localModel": false, "featured": true, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Research", "lastVerified": "2026-09-26", "logoText": "PG"}, {"name": "PentAGI", "short": "PA", "category": "Security AI", "url": "https://github.com/StoyKK/Pentagi", "desc": "Autonomous multi-agent platform for complex penetration testing workflows and security automation.", "tags": ["Pentesting", "Agents", "Autonomous"], "type": "Security", "openSource": true, "localModel": false, "featured": false, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Pentesting Agents", "lastVerified": "2026-09-26", "logoText": "PA"}, {"name": "CAI", "short": "CAI", "category": "Security AI", "url": "https://github.com/aliasrobotics/cai", "desc": "Cybersecurity AI framework for building AI-powered offensive and defensive security automation. The public repository is archived.", "tags": ["Security", "Framework", "Archived"], "type": "Security", "openSource": true, "localModel": false, "featured": false, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Red Teaming", "lastVerified": "2026-09-26", "logoText": "CAI"}, {"name": "Strix", "short": "ST", "category": "Security AI", "url": "https://github.com/usestrix/strix", "desc": "Open-source autonomous AI pentesting platform for discovering, validating and reporting application vulnerabilities.", "tags": ["Pentesting", "Agents", "AppSec"], "type": "Security", "openSource": true, "localModel": false, "featured": true, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "AppSec", "lastVerified": "2026-09-26", "logoText": "ST"}, {"name": "hackingBuddyGPT", "short": "HB", "category": "Security AI", "url": "https://github.com/ipa-lab/hackingBuddyGPT", "desc": "Research framework for exploring LLM-assisted offensive security tasks and autonomous security workflows.", "tags": ["Research", "Pentesting", "LLM"], "type": "Security", "openSource": true, "localModel": false, "featured": false, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Research", "lastVerified": "2026-09-26", "logoText": "HB"}, {"name": "HexStrike AI", "short": "HX", "category": "Security AI", "url": "https://github.com/dennislee928/Hexstrike-AI", "desc": "AI-powered penetration testing and MCP framework that orchestrates a large security-tool ecosystem with autonomous agents.", "tags": ["Pentesting", "MCP", "Agents"], "type": "Framework", "openSource": true, "localModel": false, "featured": true, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "MCP Security", "lastVerified": "2026-09-26", "logoText": "HX"}, {"name": "DarkMoon", "short": "DM", "category": "Security AI", "url": "https://github.com/ASCIT31/Dark-Moon", "desc": "Open-source autonomous AI penetration testing platform covering web, API, cloud, Active Directory, Kubernetes and AI/LLM targets.", "tags": ["Pentesting", "Autonomous", "Local AI"], "type": "Autonomous", "openSource": true, "localModel": true, "featured": true, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Pentesting Agents", "lastVerified": "2026-09-26", "logoText": "DM"}, {"name": "Shannon", "short": "SH", "category": "Security AI", "url": "https://github.com/KeygraphHQ/shannon", "desc": "Autonomous AI pentester for web applications and APIs that combines source analysis with live validation of vulnerabilities.", "tags": ["AppSec", "API", "Autonomous"], "type": "Autonomous", "openSource": true, "localModel": false, "featured": true, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "AppSec", "lastVerified": "2026-09-26", "logoText": "SH"}, {"name": "Nebula", "short": "NE", "category": "Security AI", "url": "https://github.com/berylliumsec/nebula", "desc": "AI-powered penetration testing workbench for reconnaissance, notes, vulnerability analysis, evidence and reporting.", "tags": ["Pentesting", "Assistant", "Workflow"], "type": "Assistant", "openSource": true, "localModel": false, "featured": false, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Pentesting Assistants", "lastVerified": "2026-09-26", "logoText": "NE"}, {"name": "BugTraceAI", "short": "BT", "category": "Security AI", "url": "https://github.com/BugTraceAI/BugTraceAI", "desc": "Self-hosted multi-agent security platform for autonomous vulnerability discovery, validation and reporting.", "tags": ["Bug Bounty", "Multi-agent", "Self-hosted"], "type": "Autonomous", "openSource": true, "localModel": true, "featured": true, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Bug Bounty", "lastVerified": "2026-09-26", "logoText": "BT"}, {"name": "Pentest Copilot", "short": "PC", "category": "Security AI", "url": "https://github.com/Dark-Moon-X/dm-bugbasesecurity-pentest-copilot", "desc": "Open-source AI penetration testing assistant that can work with a Kali attack box and iterate through tool-driven workflows.", "tags": ["Pentesting", "Assistant", "Kali"], "type": "Assistant", "openSource": true, "localModel": false, "featured": false, "pricing": "Open Source", "platforms": ["Linux", "CLI"], "securitySubtype": "Pentesting Assistants", "lastVerified": "2026-09-26", "logoText": "PC"}];
const categoryMeta={"AI Assistants": ["◉", "General-purpose AI assistants for research, writing, coding and analysis."], "Coding Assistants": ["</>", "AI tools for developers, coding, debugging and software development."], "Research & Analysis": ["⌕", "AI tools for research, analysis, academic work and information discovery."], "Local AI": ["⌂", "Run AI models locally for privacy, experimentation and offline workflows."], "AI Platforms & APIs": ["◇", "Model platforms, APIs and developer ecosystems for building with AI."], "Image Generation": ["▣", "AI tools for visual creation, image generation and design workflows."], "Security AI": ["⌾", "AI-powered tools and research frameworks for penetration testing, red teaming and security automation."]};

const sections=document.getElementById('sections');
const filters=document.getElementById('filters');
const metaFilters=document.getElementById('metaFilters');
const securitySubfilters=document.getElementById('securitySubfilters');
const securityFilterButtons=document.getElementById('securityFilterButtons');
const search=document.getElementById('search');
const emptyState=document.getElementById('emptyState');
const randomTool=document.getElementById('randomTool');
const themeToggle=document.getElementById('themeToggle');
const sortSelect=document.getElementById('sortSelect');
const favoritesOnly=document.getElementById('favoritesOnly');
const compareToggle=document.getElementById('compareToggle');
const compareCount=document.getElementById('compareCount');
const comparePanel=document.getElementById('comparePanel');
const compareTable=document.getElementById('compareTable');
const clearCompare=document.getElementById('clearCompare');
const toolModal=document.getElementById('toolModal');
const modalContent=document.getElementById('modalContent');
const modalClose=document.getElementById('modalClose');

let activeCategory='All';
let activeMeta='All';
let activeSecurity='All';
let favoritesMode=false;
let favorites=new Set(JSON.parse(localStorage.getItem('favoriteTools')||'[]'));
let compare=new Set();
const categories=['All',...Object.keys(categoryMeta)];
const metaOptions=[['All','All'],['Featured','Featured'],['Open Source','Open Source'],['Local AI','Local AI'],['Autonomous','Autonomous'],['Security','Security']];
const securityOptions=['All','Pentesting Agents','Pentesting Assistants','AppSec','Bug Bounty','MCP Security','Research','Red Teaming'];

function saveFavorites(){localStorage.setItem('favoriteTools',JSON.stringify([...favorites]));}

function renderFilters(){
  filters.innerHTML=categories.map(c=>`<button class="filter ${c===activeCategory?'active':''}" data-category="${c}">${c}</button>`).join('');
  filters.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
    activeCategory=btn.dataset.category;
    renderFilters();renderSections();
  }));

  metaFilters.innerHTML=metaOptions.map(([key,label])=>`<button class="filter meta-filter ${key===activeMeta?'active':''}" data-meta="${key}">${label}</button>`).join('');
  metaFilters.querySelectorAll('.meta-filter').forEach(btn=>btn.addEventListener('click',()=>{
    activeMeta=btn.dataset.meta;
    if(activeMeta==='Security') activeCategory='Security AI';
    renderFilters();renderSections();
  }));

  const showSecurity=activeCategory==='Security AI'||activeMeta==='Security';
  securitySubfilters.hidden=!showSecurity;
  if(showSecurity){
    securityFilterButtons.innerHTML=securityOptions.map(x=>`<button class="filter ${x===activeSecurity?'active':''}" data-security="${x}">${x}</button>`).join('');
    securityFilterButtons.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
      activeSecurity=btn.dataset.security;renderFilters();renderSections();
    }));
  }

  favoritesOnly.classList.toggle('active',favoritesMode);
}

function metaMatch(t){
  if(activeMeta==='All') return true;
  if(activeMeta==='Featured') return !!t.featured;
  if(activeMeta==='Open Source') return !!t.openSource;
  if(activeMeta==='Local AI') return !!t.localModel;
  if(activeMeta==='Autonomous') return t.type==='Autonomous'||t.tags.includes('Autonomous');
  if(activeMeta==='Security') return t.category==='Security AI';
  return true;
}

function matches(t,q){
  if(activeCategory!=='All'&&t.category!==activeCategory) return false;
  if(!metaMatch(t)) return false;
  if((activeCategory==='Security AI'||activeMeta==='Security')&&activeSecurity!=='All'&&t.securitySubtype!==activeSecurity) return false;
  if(favoritesMode&&!favorites.has(t.name)) return false;
  return [t.name,t.category,t.desc,t.type,t.pricing,...t.platforms,...t.tags].join(' ').toLowerCase().includes(q);
}

function sortItems(items){
  const mode=sortSelect.value;
  return [...items].sort((a,b)=>{
    if(mode==='az') return a.name.localeCompare(b.name);
    if(mode==='category') return a.category.localeCompare(b.category)||a.name.localeCompare(b.name);
    if(mode==='recent') return b.lastVerified.localeCompare(a.lastVerified)||a.name.localeCompare(b.name);
    return Number(b.featured)-Number(a.featured)||a.name.localeCompare(b.name);
  });
}

function badges(t){
  const b=[];
  if(t.featured) b.push('<span class="status-badge featured">Featured</span>');
  if(t.openSource) b.push('<span class="status-badge">Open Source</span>');
  if(t.localModel) b.push('<span class="status-badge">Local AI</span>');
  b.push(`<span class="status-badge subtle">${t.pricing}</span>`);
  return b.join('');
}

function card(t){
  const fav=favorites.has(t.name);
  const cmp=compare.has(t.name);
  return `<article class="tool-card">
    <div class="tool-card-actions">
      <button class="mini-btn favorite-btn ${fav?'active':''}" data-favorite="${t.name}" title="Favorite">${fav?'★':'☆'}</button>
      <button class="mini-btn compare-btn ${cmp?'active':''}" data-compare="${t.name}" title="Compare">⇄</button>
    </div>
    <button class="tool-top card-open" data-open="${t.name}" type="button">
      <div class="tool-logo">${t.logoText}</div><h3>${t.name}</h3>
    </button>
    <div class="status-row">${badges(t)}</div>
    <p>${t.desc}</p>
    <div class="platform-row">${t.platforms.map(p=>`<span class="platform-badge">${p}</span>`).join('')}</div>
    <div class="tags">${t.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
    <div class="verified">Verified ${t.lastVerified}</div>
    <div class="card-bottom">
      <button class="details-btn card-open" data-open="${t.name}" type="button">Details</button>
      <a class="card-link" href="${t.url}" target="_blank" rel="noopener noreferrer">Open Tool ↗</a>
    </div>
  </article>`;
}

function wireCardActions(){
  document.querySelectorAll('[data-favorite]').forEach(btn=>btn.addEventListener('click',()=>{
    const name=btn.dataset.favorite;
    favorites.has(name)?favorites.delete(name):favorites.add(name);
    saveFavorites();renderFilters();renderSections();
  }));
  document.querySelectorAll('[data-compare]').forEach(btn=>btn.addEventListener('click',()=>{
    const name=btn.dataset.compare;
    if(compare.has(name)) compare.delete(name);
    else if(compare.size<4) compare.add(name);
    updateCompare();renderSections();
  }));
  document.querySelectorAll('[data-open]').forEach(btn=>btn.addEventListener('click',()=>openModal(btn.dataset.open)));
}

function renderSections(){
  const q=search.value.trim().toLowerCase();
  const visible=activeCategory==='All'?Object.keys(categoryMeta):[activeCategory];
  let total=0;
  sections.innerHTML=visible.map(cat=>{
    let items=tools.filter(t=>t.category===cat&&matches(t,q));
    items=sortItems(items);
    if(!items.length) return '';
    total+=items.length;
    const [icon,desc]=categoryMeta[cat];
    return `<section class="tool-section">
      <div class="section-head">
        <div class="section-title"><span class="section-icon">${icon}</span><div><h2>${cat}</h2><p>${desc}</p></div></div>
        <span class="section-count">${items.length} tools</span>
      </div>
      <div class="tool-grid">${items.map(card).join('')}</div>
    </section>`;
  }).join('');
  emptyState.hidden=total!==0;
  wireCardActions();
}

function openModal(name){
  const t=tools.find(x=>x.name===name);
  if(!t) return;
  modalContent.innerHTML=`<div class="modal-hero"><div class="tool-logo large">${t.logoText}</div><div><div class="eyebrow">${t.category}</div><h2 id="modalTitle">${t.name}</h2></div></div>
    <p class="modal-desc">${t.desc}</p>
    <div class="modal-grid">
      <div><span>Type</span><strong>${t.type}</strong></div>
      <div><span>Pricing</span><strong>${t.pricing}</strong></div>
      <div><span>Open source</span><strong>${t.openSource?'Yes':'No'}</strong></div>
      <div><span>Local support</span><strong>${t.localModel?'Yes':'No'}</strong></div>
      <div><span>Platforms</span><strong>${t.platforms.join(', ')}</strong></div>
      <div><span>Last verified</span><strong>${t.lastVerified}</strong></div>
    </div>
    <div class="tags modal-tags">${t.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
    <div class="modal-actions"><button class="secondary-action" id="modalFav">${favorites.has(t.name)?'Remove favorite':'Add favorite'}</button><a class="card-link modal-open-link" href="${t.url}" target="_blank" rel="noopener noreferrer">Open Tool ↗</a></div>`;
  toolModal.hidden=false;
  document.body.classList.add('modal-open');
  document.getElementById('modalFav').addEventListener('click',()=>{
    favorites.has(t.name)?favorites.delete(t.name):favorites.add(t.name);
    saveFavorites();openModal(t.name);renderSections();
  });
}

function closeModal(){toolModal.hidden=true;document.body.classList.remove('modal-open');}
modalClose.addEventListener('click',closeModal);
toolModal.addEventListener('click',e=>{if(e.target===toolModal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

function updateCompare(){
  compareCount.textContent=compare.size;
  comparePanel.hidden=compare.size<2;
  if(compare.size<2){compareTable.innerHTML='';return;}
  const selected=[...compare].map(name=>tools.find(t=>t.name===name)).filter(Boolean);
  compareTable.innerHTML=`<table class="compare-table">
    <thead><tr><th>Attribute</th>${selected.map(t=>`<th>${t.name}</th>`).join('')}</tr></thead>
    <tbody>
      <tr><td>Category</td>${selected.map(t=>`<td>${t.category}</td>`).join('')}</tr>
      <tr><td>Type</td>${selected.map(t=>`<td>${t.type}</td>`).join('')}</tr>
      <tr><td>Pricing</td>${selected.map(t=>`<td>${t.pricing}</td>`).join('')}</tr>
      <tr><td>Open source</td>${selected.map(t=>`<td>${t.openSource?'Yes':'No'}</td>`).join('')}</tr>
      <tr><td>Local AI</td>${selected.map(t=>`<td>${t.localModel?'Yes':'No'}</td>`).join('')}</tr>
      <tr><td>Platforms</td>${selected.map(t=>`<td>${t.platforms.join(', ')}</td>`).join('')}</tr>
      <tr><td>Verified</td>${selected.map(t=>`<td>${t.lastVerified}</td>`).join('')}</tr>
    </tbody>
  </table>`;
}

favoritesOnly.addEventListener('click',()=>{favoritesMode=!favoritesMode;renderFilters();renderSections();});
compareToggle.addEventListener('click',()=>{if(compare.size>=2)comparePanel.scrollIntoView({behavior:'smooth'});});
clearCompare.addEventListener('click',()=>{compare.clear();updateCompare();renderSections();});
search.addEventListener('input',renderSections);
sortSelect.addEventListener('change',renderSections);
randomTool.addEventListener('click',()=>{
  const q=search.value.trim().toLowerCase();
  const pool=tools.filter(t=>matches(t,q));
  if(!pool.length) return;
  const t=pool[Math.floor(Math.random()*pool.length)];
  openModal(t.name);
});

const savedTheme=localStorage.getItem('theme');
if(savedTheme)document.documentElement.dataset.theme=savedTheme;
themeToggle.addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='light'?'dark':'light';
  document.documentElement.dataset.theme=next;
  localStorage.setItem('theme',next);
});

renderFilters();
renderSections();
updateCompare();
