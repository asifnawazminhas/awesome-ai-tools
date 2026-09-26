const tools=[{"name": "ChatGPT", "short": "CG", "category": "AI Assistants", "url": "https://chatgpt.com/", "desc": "General-purpose AI assistant for research, writing, coding, analysis and multimodal workflows.", "tags": ["Assistant", "Multimodal", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true}, {"name": "Claude", "short": "CL", "category": "AI Assistants", "url": "https://claude.ai/", "desc": "AI assistant suited to reasoning, long-context analysis, writing and coding workflows.", "tags": ["Assistant", "Research", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true}, {"name": "Gemini", "short": "GE", "category": "AI Assistants", "url": "https://gemini.google.com/", "desc": "Google's multimodal AI assistant for research, productivity and creative work.", "tags": ["Assistant", "Multimodal", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true}, {"name": "DeepSeek", "short": "DS", "category": "AI Assistants", "url": "https://chat.deepseek.com/", "desc": "AI assistant focused on reasoning, coding and technical problem solving.", "tags": ["Assistant", "Coding", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false}, {"name": "Grok", "short": "GR", "category": "AI Assistants", "url": "https://grok.com/", "desc": "AI assistant from xAI for general questions, research, coding and real-time information workflows.", "tags": ["Assistant", "Research", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": true}, {"name": "Perplexity", "short": "PX", "category": "AI Assistants", "url": "https://www.perplexity.ai/", "desc": "AI-powered search and research assistant with web-backed answers and sources.", "tags": ["Research", "Search", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false}, {"name": "Microsoft Copilot", "short": "MC", "category": "AI Assistants", "url": "https://copilot.microsoft.com/", "desc": "Microsoft's AI assistant for productivity, search and ecosystem-integrated workflows.", "tags": ["Assistant", "Productivity", "Free / Paid"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false}, {"name": "Loes", "short": "LO", "category": "AI Assistants", "url": "https://loes.ai/", "desc": "Dutch AI assistant focused on Dutch-language use and privacy-conscious AI workflows.", "tags": ["Dutch", "Privacy", "EU"], "type": "Assistant", "openSource": false, "localModel": false, "featured": false}, {"name": "GitHub Copilot", "short": "GH", "category": "Coding Assistants", "url": "https://github.com/features/copilot", "desc": "AI coding assistant integrated with popular developer workflows and IDEs.", "tags": ["Coding", "IDE", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false}, {"name": "Cursor", "short": "CU", "category": "Coding Assistants", "url": "https://www.cursor.com/", "desc": "AI-first code editor for generating, understanding and modifying software projects.", "tags": ["Coding", "Editor", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": true}, {"name": "Windsurf", "short": "WS", "category": "Coding Assistants", "url": "https://windsurf.com/", "desc": "AI coding environment focused on agentic development and codebase-aware assistance.", "tags": ["Coding", "IDE", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false}, {"name": "Replit", "short": "RP", "category": "Coding Assistants", "url": "https://replit.com/", "desc": "Browser-based development environment with AI-assisted coding and deployment workflows.", "tags": ["Coding", "Cloud", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false}, {"name": "Sourcegraph Cody", "short": "SC", "category": "Coding Assistants", "url": "https://sourcegraph.com/cody", "desc": "AI coding assistant designed for understanding and working across larger codebases.", "tags": ["Coding", "Search", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false}, {"name": "Tabnine", "short": "TB", "category": "Coding Assistants", "url": "https://www.tabnine.com/", "desc": "AI coding assistant focused on code completion and developer productivity.", "tags": ["Coding", "Completion", "Free / Paid"], "type": "Coding", "openSource": false, "localModel": false, "featured": false}, {"name": "NotebookLM", "short": "NL", "category": "Research & Analysis", "url": "https://notebooklm.google.com/", "desc": "Research and study assistant designed to work with your own source material and documents.", "tags": ["Research", "Notes", "Free"], "type": "Research", "openSource": false, "localModel": false, "featured": false}, {"name": "Elicit", "short": "EL", "category": "Research & Analysis", "url": "https://elicit.com/", "desc": "AI research assistant focused on literature discovery, extraction and evidence synthesis.", "tags": ["Research", "Academic", "Free / Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false}, {"name": "Consensus", "short": "CO", "category": "Research & Analysis", "url": "https://consensus.app/", "desc": "AI-powered search engine for exploring scientific research and evidence.", "tags": ["Research", "Academic", "Free / Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false}, {"name": "Scite", "short": "SI", "category": "Research & Analysis", "url": "https://scite.ai/", "desc": "Research platform for discovering and evaluating scientific literature and citations.", "tags": ["Research", "Academic", "Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false}, {"name": "Connected Papers", "short": "CP", "category": "Research & Analysis", "url": "https://www.connectedpapers.com/", "desc": "Visual tool for exploring related academic papers and research networks.", "tags": ["Research", "Visualisation", "Free / Paid"], "type": "Research", "openSource": false, "localModel": false, "featured": false}, {"name": "Ollama", "short": "OL", "category": "Local AI", "url": "https://ollama.com/", "desc": "Simple local runtime for downloading and running supported language models on your own system.", "tags": ["Local", "Privacy", "Free"], "type": "Local AI", "openSource": true, "localModel": true, "featured": false}, {"name": "LM Studio", "short": "LM", "category": "Local AI", "url": "https://lmstudio.ai/", "desc": "Desktop application for discovering and running compatible language models locally.", "tags": ["Local", "Desktop", "Free"], "type": "Local AI", "openSource": false, "localModel": true, "featured": false}, {"name": "Hugging Face", "short": "HF", "category": "AI Platforms & APIs", "url": "https://huggingface.co/", "desc": "Model, dataset and application ecosystem for building and exploring machine learning systems.", "tags": ["Models", "Datasets", "Developer"], "type": "Platform", "openSource": true, "localModel": false, "featured": false}, {"name": "OpenRouter", "short": "OR", "category": "AI Platforms & APIs", "url": "https://openrouter.ai/", "desc": "Unified API gateway for experimenting with and routing requests across multiple AI models.", "tags": ["API", "Models", "Developer"], "type": "Platform", "openSource": false, "localModel": false, "featured": false}, {"name": "Mistral AI", "short": "MI", "category": "AI Platforms & APIs", "url": "https://mistral.ai/", "desc": "AI model provider offering general-purpose and developer-focused models and APIs.", "tags": ["Models", "API", "Developer"], "type": "Platform", "openSource": false, "localModel": false, "featured": false}, {"name": "Midjourney", "short": "MJ", "category": "Image Generation", "url": "https://www.midjourney.com/", "desc": "Generative image platform for high-quality visual exploration and concept generation.", "tags": ["Images", "Creative", "Paid"], "type": "Image", "openSource": false, "localModel": false, "featured": false}, {"name": "Adobe Firefly", "short": "AF", "category": "Image Generation", "url": "https://firefly.adobe.com/", "desc": "Adobe's generative AI tools for image creation, editing and creative production workflows.", "tags": ["Images", "Creative", "Free / Paid"], "type": "Image", "openSource": false, "localModel": false, "featured": false}, {"name": "Canva AI", "short": "CA", "category": "Image Generation", "url": "https://www.canva.com/ai-image-generator/", "desc": "AI-assisted design and image generation integrated with Canva's visual creation workflow.", "tags": ["Images", "Design", "Free / Paid"], "type": "Image", "openSource": false, "localModel": false, "featured": false}, {"name": "PentestGPT", "short": "PG", "category": "Security AI", "url": "https://github.com/artyang/PentestGPT", "desc": "AI-assisted penetration testing framework designed to guide testing progress and specific security operations.", "tags": ["Pentesting", "LLM", "Research"], "type": "Security", "openSource": true, "localModel": false, "featured": true}, {"name": "PentAGI", "short": "PA", "category": "Security AI", "url": "https://github.com/StoyKK/Pentagi", "desc": "Autonomous multi-agent platform for complex penetration testing workflows and security automation.", "tags": ["Pentesting", "Agents", "Autonomous"], "type": "Security", "openSource": true, "localModel": false, "featured": false}, {"name": "CAI", "short": "CAI", "category": "Security AI", "url": "https://github.com/aliasrobotics/cai", "desc": "Cybersecurity AI framework for building AI-powered offensive and defensive security automation. The public repository is archived.", "tags": ["Security", "Framework", "Archived"], "type": "Security", "openSource": true, "localModel": false, "featured": false}, {"name": "Strix", "short": "ST", "category": "Security AI", "url": "https://github.com/usestrix/strix", "desc": "Open-source autonomous AI pentesting platform for discovering, validating and reporting application vulnerabilities.", "tags": ["Pentesting", "Agents", "AppSec"], "type": "Security", "openSource": true, "localModel": false, "featured": true}, {"name": "hackingBuddyGPT", "short": "HB", "category": "Security AI", "url": "https://github.com/ipa-lab/hackingBuddyGPT", "desc": "Research framework for exploring LLM-assisted offensive security tasks and autonomous security workflows.", "tags": ["Research", "Pentesting", "LLM"], "type": "Security", "openSource": true, "localModel": false, "featured": false}, {"name": "HexStrike AI", "short": "HX", "category": "Security AI", "url": "https://github.com/dennislee928/Hexstrike-AI", "desc": "AI-powered penetration testing and MCP framework that orchestrates a large security-tool ecosystem with autonomous agents.", "tags": ["Pentesting", "MCP", "Agents"], "type": "Framework", "openSource": true, "localModel": false, "featured": true}, {"name": "DarkMoon", "short": "DM", "category": "Security AI", "url": "https://github.com/ASCIT31/Dark-Moon", "desc": "Open-source autonomous AI penetration testing platform covering web, API, cloud, Active Directory, Kubernetes and AI/LLM targets.", "tags": ["Pentesting", "Autonomous", "Local AI"], "type": "Autonomous", "openSource": true, "localModel": true, "featured": true}, {"name": "Shannon", "short": "SH", "category": "Security AI", "url": "https://github.com/KeygraphHQ/shannon", "desc": "Autonomous AI pentester for web applications and APIs that combines source analysis with live validation of vulnerabilities.", "tags": ["AppSec", "API", "Autonomous"], "type": "Autonomous", "openSource": true, "localModel": false, "featured": true}, {"name": "Nebula", "short": "NE", "category": "Security AI", "url": "https://github.com/berylliumsec/nebula", "desc": "AI-powered penetration testing workbench for reconnaissance, notes, vulnerability analysis, evidence and reporting.", "tags": ["Pentesting", "Assistant", "Workflow"], "type": "Assistant", "openSource": true, "localModel": false, "featured": false}, {"name": "BugTraceAI", "short": "BT", "category": "Security AI", "url": "https://github.com/BugTraceAI/BugTraceAI", "desc": "Self-hosted multi-agent security platform for autonomous vulnerability discovery, validation and reporting.", "tags": ["Bug Bounty", "Multi-agent", "Self-hosted"], "type": "Autonomous", "openSource": true, "localModel": true, "featured": true}, {"name": "Pentest Copilot", "short": "PC", "category": "Security AI", "url": "https://github.com/Dark-Moon-X/dm-bugbasesecurity-pentest-copilot", "desc": "Open-source AI penetration testing assistant that can work with a Kali attack box and iterate through tool-driven workflows.", "tags": ["Pentesting", "Assistant", "Kali"], "type": "Assistant", "openSource": true, "localModel": false, "featured": false}];
const categoryMeta={"AI Assistants": ["◉", "General-purpose AI assistants for research, writing, coding and analysis."], "Coding Assistants": ["</>", "AI tools for developers, coding, debugging and software development."], "Research & Analysis": ["⌕", "AI tools for research, analysis, academic work and information discovery."], "Local AI": ["⌂", "Run AI models locally for privacy, experimentation and offline workflows."], "AI Platforms & APIs": ["◇", "Model platforms, APIs and developer ecosystems for building with AI."], "Image Generation": ["▣", "AI tools for visual creation, image generation and design workflows."], "Security AI": ["⌾", "AI-powered tools and research frameworks for penetration testing, red teaming and security automation."]};
const sections=document.getElementById('sections');
const filters=document.getElementById('filters');
const metaFilters=document.getElementById('metaFilters');
const search=document.getElementById('search');
const emptyState=document.getElementById('emptyState');
const randomTool=document.getElementById('randomTool');
const themeToggle=document.getElementById('themeToggle');

let activeCategory='All';
let activeMeta='All';
const categories=['All',...Object.keys(categoryMeta)];
const metaOptions=[
  ['All','All'],
  ['Featured','Featured'],
  ['Open Source','Open Source'],
  ['Local AI','Local AI'],
  ['Autonomous','Autonomous'],
  ['Security','Security']
];

function renderFilters(){
  filters.innerHTML=categories.map(c=>`<button class="filter ${c===activeCategory?'active':''}" data-category="${c}">${c}</button>`).join('');
  filters.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
    activeCategory=btn.dataset.category;
    renderFilters();
    renderSections();
  }));

  metaFilters.innerHTML=metaOptions.map(([key,label])=>`<button class="filter meta-filter ${key===activeMeta?'active':''}" data-meta="${key}">${label}</button>`).join('');
  metaFilters.querySelectorAll('.meta-filter').forEach(btn=>btn.addEventListener('click',()=>{
    activeMeta=btn.dataset.meta;
    renderFilters();
    renderSections();
  }));
}

function metaMatch(t){
  if(activeMeta==='All') return true;
  if(activeMeta==='Featured') return !!t.featured;
  if(activeMeta==='Open Source') return !!t.openSource;
  if(activeMeta==='Local AI') return !!t.localModel;
  if(activeMeta==='Autonomous') return t.type==='Autonomous' || t.tags.includes('Autonomous');
  if(activeMeta==='Security') return t.category==='Security AI';
  return true;
}

function matches(t,q){
  if(activeCategory!=='All'&&t.category!==activeCategory) return false;
  if(!metaMatch(t)) return false;
  return [t.name,t.category,t.desc,t.type,...t.tags].join(' ').toLowerCase().includes(q);
}

function card(t){
  const badges=[];
  if(t.featured) badges.push('<span class="status-badge featured">Featured</span>');
  if(t.openSource) badges.push('<span class="status-badge">Open Source</span>');
  if(t.localModel) badges.push('<span class="status-badge">Local AI</span>');
  if(t.type) badges.push(`<span class="status-badge subtle">${t.type}</span>`);
  return `<article class="tool-card">
    <div class="tool-top"><div class="tool-logo">${t.short}</div><h3>${t.name}</h3></div>
    <div class="status-row">${badges.join('')}</div>
    <p>${t.desc}</p>
    <div class="tags">${t.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
    <a class="card-link" href="${t.url}" target="_blank" rel="noopener noreferrer">Open Tool ↗</a>
  </article>`;
}

function renderSections(){
  const q=search.value.trim().toLowerCase();
  const visible=activeCategory==='All'?Object.keys(categoryMeta):[activeCategory];
  let total=0;
  sections.innerHTML=visible.map(cat=>{
    const items=tools.filter(t=>t.category===cat&&matches(t,q));
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
}

search.addEventListener('input',renderSections);
randomTool.addEventListener('click',()=>{
  const q=search.value.trim().toLowerCase();
  const pool=tools.filter(t=>matches(t,q));
  if(!pool.length) return;
  const t=pool[Math.floor(Math.random()*pool.length)];
  window.open(t.url,'_blank','noopener,noreferrer');
});

const savedTheme=localStorage.getItem('theme');
if(savedTheme) document.documentElement.dataset.theme=savedTheme;
themeToggle.addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='light'?'dark':'light';
  document.documentElement.dataset.theme=next;
  localStorage.setItem('theme',next);
});

renderFilters();
renderSections();
