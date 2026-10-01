
let tools=[],categoryMeta={}; const $=s=>document.querySelector(s);
const sections=$('#sections'),filters=$('#filters'),metaFilters=$('#metaFilters'),securitySubfilters=$('#securitySubfilters'),securityFilterButtons=$('#securityFilterButtons'),search=$('#search'),emptyState=$('#emptyState'),randomTool=$('#randomTool'),themeToggle=$('#themeToggle'),sortSelect=$('#sortSelect'),favoritesOnly=$('#favoritesOnly'),compareToggle=$('#compareToggle'),compareCount=$('#compareCount'),comparePanel=$('#comparePanel'),compareTable=$('#compareTable'),clearCompare=$('#clearCompare'),toolModal=$('#toolModal'),modalContent=$('#modalContent'),modalClose=$('#modalClose'),featuredStrip=$('#featuredStrip'),recentStrip=$('#recentStrip'),popularStrip=$('#popularStrip'),viewFeatured=$('#viewFeatured'),viewRecent=$('#viewRecent'),clearSearch=$('#clearSearch'),resetFilters=$('#resetFilters'),emptyReset=$('#emptyReset'),resultCount=$('#resultCount'),heroCounts=$('#heroCounts'),categoryBrowseGrid=$('#categoryBrowseGrid');
let activeCategory='All',activeMeta='All',activeSecurity='All',favoritesMode=false,categories=[]; let favorites=new Set(JSON.parse(localStorage.getItem('favoriteTools')||'[]')),compare=new Set();
const metaOptions=[['All','All'],['Featured','Featured'],['Open Source','Open Source'],['Local AI','Local AI'],['Autonomous','Autonomous'],['Security','Security']];
const securityOptions=['All','Pentesting Agents','Pentesting Assistants','Red Teaming','Bug Bounty','AppSec','MCP Security','LLM Security','Local Security AI','Research Frameworks'];
const slugify=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function clicks(){return JSON.parse(localStorage.getItem('toolClicks')||'{}')} function recordClick(n){const c=clicks();c[n]=(c[n]||0)+1;localStorage.setItem('toolClicks',JSON.stringify(c))}
function saveFavorites(){localStorage.setItem('favoriteTools',JSON.stringify([...favorites]))}
function logoMarkup(t,cls='tool-logo'){const src=t.logo||t.localLogo;return `<div class="${cls} logo-wrap"><img src="${src}" data-fallback="${t.localLogo}" alt="${t.name} logo" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fallback"></div>`}
function miniCard(t){return `<button class="mini-tool-card" data-open="${t.name}" type="button">${logoMarkup(t,'mini-tool-logo')}<span><strong>${t.name}</strong><small>${t.category}</small></span></button>`}
function renderSpotlights(){featuredStrip.innerHTML=tools.filter(t=>t.featured).slice(0,6).map(miniCard).join('');recentStrip.innerHTML=[...tools].sort((a,b)=>b.added.localeCompare(a.added)||a.name.localeCompare(b.name)).slice(0,6).map(miniCard).join('');const c=clicks();popularStrip.innerHTML=[...tools].sort((a,b)=>(c[b.name]||0)-(c[a.name]||0)||a.name.localeCompare(b.name)).slice(0,6).map(miniCard).join('');document.querySelectorAll('.mini-tool-card').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.open)))}
function renderCategoryBrowse(){
  if(!categoryBrowseGrid)return;
  const labels={'AI Assistants':'AI Assistants','Coding Assistants':'Coding Assistants','Research & Analysis':'Research & Analysis','Local AI':'Local AI','AI Platforms & APIs':'Platforms & APIs','Security AI':'Security Native AI'};
  const icons={'AI Assistants':'✦','Coding Assistants':'</>','Research & Analysis':'⌕','Local AI':'▣','AI Platforms & APIs':'◇','Security AI':'◆'};
  categoryBrowseGrid.innerHTML=categories.filter(c=>c!=='All').map(c=>{const count=tools.filter(t=>t.category===c).length;return `<button class="category-browse-card" type="button" data-browse-category="${c}"><span class="category-browse-copy"><strong>${labels[c]||c}</strong><small>${count} tool${count===1?'':'s'}</small></span><span class="category-browse-arrow" aria-hidden="true">→</span></button>`}).join('');
  categoryBrowseGrid.querySelectorAll('[data-browse-category]').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.browseCategory;activeMeta='All';renderFilters();renderSections();$('#tools').scrollIntoView({behavior:'smooth'})}));
}
function renderFilters(){const categoryLabels={'AI Assistants':'AI Assistants','Coding Assistants':'Coding','Research & Analysis':'Research','Local AI':'Local AI','AI Platforms & APIs':'Platforms','Image Generation':'Images','Security AI':'Security AI'};filters.innerHTML=categories.map(c=>`<button class="filter ${c===activeCategory?'active':''}" data-category="${c}">${categoryLabels[c]||c}</button>`).join('');filters.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.category;renderFilters();renderSections()}));metaFilters.innerHTML=metaOptions.map(([k,l])=>`<button class="filter meta-filter ${k===activeMeta?'active':''}" data-meta="${k}">${l}</button>`).join('');metaFilters.querySelectorAll('.meta-filter').forEach(b=>b.addEventListener('click',()=>{activeMeta=b.dataset.meta;if(activeMeta==='Security')activeCategory='Security AI';renderFilters();renderSections()}));const show=activeCategory==='Security AI'||activeMeta==='Security';securitySubfilters.hidden=!show;if(show){securityFilterButtons.innerHTML=securityOptions.map(x=>`<button class="filter ${x===activeSecurity?'active':''}" data-security="${x}">${x}</button>`).join('');securityFilterButtons.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{activeSecurity=b.dataset.security;renderFilters();renderSections()}))}favoritesOnly.classList.toggle('active',favoritesMode)}
function metaMatch(t){if(activeMeta==='All')return true;if(activeMeta==='Featured')return !!t.featured;if(activeMeta==='Open Source')return !!t.openSource;if(activeMeta==='Local AI')return !!t.localModel;if(activeMeta==='Autonomous')return t.type==='Autonomous'||t.tags.includes('Autonomous');if(activeMeta==='Security')return t.category==='Security AI';return true}
function matches(t,q){if(activeCategory!=='All'&&t.category!==activeCategory)return false;if(!metaMatch(t))return false;if((activeCategory==='Security AI'||activeMeta==='Security')&&activeSecurity!=='All'&&t.securitySubtype!==activeSecurity)return false;if(favoritesMode&&!favorites.has(t.name))return false;return [t.name,t.category,t.desc,t.type,t.pricing,t.securitySubtype||'',...t.platforms,...t.tags].join(' ').toLowerCase().includes(q)}
function sortItems(items){const m=sortSelect.value;return [...items].sort((a,b)=>m==='az'?a.name.localeCompare(b.name):m==='category'?a.category.localeCompare(b.category)||a.name.localeCompare(b.name):m==='recent'?b.added.localeCompare(a.added)||a.name.localeCompare(b.name):Number(b.featured)-Number(a.featured)||a.name.localeCompare(b.name))}
function badges(t){let b=[];if(t.featured)b.push('<span class="status-badge featured">Featured</span>');if(t.openSource)b.push('<span class="status-badge">Open Source</span>');if(t.localModel)b.push('<span class="status-badge">Local AI</span>');if(t.apiAvailable)b.push('<span class="status-badge api">API</span>');if(t.status==='Experimental')b.push('<span class="status-badge status-experimental">Experimental</span>');return b.join('')}
function card(t){const fav=favorites.has(t.name),cmp=compare.has(t.name);return `<article class="tool-card"><button class="tool-top card-open" data-open="${t.name}" type="button">${logoMarkup(t)}<h3>${t.name}</h3></button><p class="tool-desc">${t.desc}</p><div class="status-row">${badges(t)}</div><div class="platform-row">${t.platforms.map(p=>`<span class="platform-badge">${p}</span>`).join('')}</div><div class="card-spacer"></div><div class="card-bottom"><a class="details-btn" href="/tools/${slugify(t.name)}/">Details</a><a class="card-link" href="${t.website}" target="_blank" rel="noopener noreferrer" data-visit="${t.name}">Website ↗</a>${t.github?`<a class="github-link" href="${t.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`:''}</div><div class="card-actions-row"><button class="quiet-action ${fav?'active':''}" data-favorite="${t.name}" aria-label="Favorite ${t.name}">☆</button><button class="quiet-action ${cmp?'active':''}" data-compare="${t.name}" aria-label="Compare ${t.name}">⇄</button><button class="quiet-action" data-share="${t.name}" aria-label="Share ${t.name}">↗</button></div></article>`}
function renderSections(){const q=search.value.trim().toLowerCase(),visible=activeCategory==='All'?categories.filter(c=>c!=='All'):[activeCategory];let total=0;sections.innerHTML=visible.map(cat=>{const items=sortItems(tools.filter(t=>t.category===cat&&matches(t,q)));if(!items.length)return'';total+=items.length;const meta=categoryMeta[cat]||['◈','AI tools selected for security workflows.'];const [icon,desc]=meta;return `<section class="tool-section"><div class="section-head"><div class="section-title"><span class="section-icon">${icon}</span><div><h2>${cat}</h2><p>${desc}</p></div></div><span class="section-count">${items.length} tools</span></div><div class="tool-grid">${items.map(card).join('')}</div></section>`}).join('');emptyState.hidden=total!==0;resultCount.textContent=`${total} tool${total===1?'':'s'}`;wire()}
function wire(){document.querySelectorAll('[data-favorite]').forEach(b=>b.addEventListener('click',()=>{favorites.has(b.dataset.favorite)?favorites.delete(b.dataset.favorite):favorites.add(b.dataset.favorite);saveFavorites();renderSections()}));document.querySelectorAll('[data-compare]').forEach(b=>b.addEventListener('click',()=>{compare.has(b.dataset.compare)?compare.delete(b.dataset.compare):compare.size<4&&compare.add(b.dataset.compare);updateCompare();renderSections()}));document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.open)));document.querySelectorAll('[data-share]').forEach(b=>b.addEventListener('click',()=>shareTool(b.dataset.share,b)));document.querySelectorAll('[data-visit]').forEach(a=>a.addEventListener('click',()=>recordClick(a.dataset.visit)))}
function toolPermalink(name){
  const url=new URL('/',location.origin);
  url.searchParams.set('tool',name);
  return url.toString();
}
async function copyTextRobust(text){
  if(navigator.clipboard && window.isSecureContext){
    try{
      await navigator.clipboard.writeText(text);
      return true;
    }catch(_){}
  }
  const ta=document.createElement('textarea');
  ta.value=text;
  ta.setAttribute('readonly','');
  ta.style.position='fixed';
  ta.style.left='-9999px';
  ta.style.top='0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  ta.setSelectionRange(0,ta.value.length);
  let ok=false;
  try{ok=document.execCommand('copy');}catch(_){}
  ta.remove();
  return ok;
}
async function shareTool(name,b){
  const t=tools.find(x=>x.name===name);
  if(!t)return;
  const url=toolPermalink(name);
  const old=b.textContent;
  const copied=await copyTextRobust(url);
  if(copied){
    b.textContent='Copied ✓';
    setTimeout(()=>b.textContent=old,1400);
    return;
  }
  window.prompt('Copy this tool link:',url);
}
function openModal(name){const t=tools.find(x=>x.name===name);if(!t)return;recordClick(name);try{history.replaceState({tool:name},'',toolPermalink(name))}catch(_){};modalContent.innerHTML=`<div class="modal-hero">${logoMarkup(t,'tool-logo large')}<div><div class="eyebrow">${t.category}</div><h2 id="modalTitle">${t.name}</h2></div></div><p class="modal-desc">${t.desc}</p><div class="modal-grid"><div><span>Type</span><strong>${t.type}</strong></div><div><span>Pricing</span><strong>${t.pricing}</strong></div><div><span>Open source</span><strong>${t.openSource?'Yes':'No'}</strong></div><div><span>Local support</span><strong>${t.localModel?'Yes':'No'}</strong></div><div><span>API available</span><strong>${t.apiAvailable?'Yes':'No'}</strong></div><div><span>Platforms</span><strong>${t.platforms.join(', ')}</strong></div><div><span>Last verified</span><strong>${t.lastVerified}</strong></div></div><div class="modal-actions"><a class="secondary-action" href="/tools/${slugify(t.name)}/">Full details</a><button class="secondary-action" id="modalFav">${favorites.has(name)?'Remove favorite':'Add favorite'}</button><button class="secondary-action" id="modalShare">Share / Copy link</button><a class="card-link modal-open-link" href="${t.website}" target="_blank" rel="noopener noreferrer">Official website ↗</a>${t.github?`<a class="github-link modal-open-link" href="${t.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`:''}</div>`;toolModal.hidden=false;document.body.classList.add('modal-open');$('#modalFav').addEventListener('click',()=>{favorites.has(name)?favorites.delete(name):favorites.add(name);saveFavorites();openModal(name);renderSections()});$('#modalShare').addEventListener('click',e=>shareTool(name,e.currentTarget))}
function closeModal(){toolModal.hidden=true;document.body.classList.remove('modal-open');if(location.search.includes('tool=')){try{history.replaceState(null,'',location.origin+location.pathname+location.hash)}catch(_){}}}
function updateCompare(){compareCount.textContent=compare.size;comparePanel.hidden=compare.size<2;if(compare.size<2){compareTable.innerHTML='';return}const s=[...compare].map(n=>tools.find(t=>t.name===n));compareTable.innerHTML=`<table class="compare-table"><thead><tr><th>Attribute</th>${s.map(t=>`<th>${t.name}</th>`).join('')}</tr></thead><tbody><tr><td>Category</td>${s.map(t=>`<td>${t.category}</td>`).join('')}</tr><tr><td>Pricing</td>${s.map(t=>`<td>${t.pricing}</td>`).join('')}</tr><tr><td>Open source</td>${s.map(t=>`<td>${t.openSource?'Yes':'No'}</td>`).join('')}</tr><tr><td>Local</td>${s.map(t=>`<td>${t.localModel?'Yes':'No'}</td>`).join('')}</tr><tr><td>API</td>${s.map(t=>`<td>${t.apiAvailable?'Yes':'No'}</td>`).join('')}</tr></tbody></table>`}
function resetAll(){activeCategory='All';activeMeta='All';activeSecurity='All';favoritesMode=false;search.value='';sortSelect.value='featured';renderFilters();renderSections()}
modalClose.addEventListener('click',closeModal);toolModal.addEventListener('click',e=>e.target===toolModal&&closeModal());document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){e.preventDefault();search.focus()}});
favoritesOnly.addEventListener('click',()=>{favoritesMode=!favoritesMode;renderFilters();renderSections()});compareToggle.addEventListener('click',()=>compare.size>=2&&comparePanel.scrollIntoView({behavior:'smooth'}));clearCompare.addEventListener('click',()=>{compare.clear();updateCompare();renderSections()});search.addEventListener('input',renderSections);clearSearch.addEventListener('click',()=>{search.value='';search.focus();renderSections()});resetFilters.addEventListener('click',resetAll);emptyReset.addEventListener('click',resetAll);sortSelect.addEventListener('change',renderSections);randomTool.addEventListener('click',()=>{const p=tools.filter(t=>matches(t,search.value.trim().toLowerCase()));if(p.length)openModal(p[Math.floor(Math.random()*p.length)].name)});viewFeatured.addEventListener('click',()=>{activeMeta='Featured';activeCategory='All';renderFilters();renderSections();$('#tools').scrollIntoView({behavior:'smooth'})});viewRecent.addEventListener('click',()=>{sortSelect.value='recent';activeMeta='All';activeCategory='All';renderFilters();renderSections();$('#tools').scrollIntoView({behavior:'smooth'})});
const savedTheme=localStorage.getItem('theme');if(savedTheme)document.documentElement.dataset.theme=savedTheme;themeToggle.addEventListener('click',()=>{const n=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n)});
function openToolFromUrl(){
  const p=new URLSearchParams(window.location.search);
  const requested=p.get('tool');
  if(requested&&tools.some(t=>t.name===requested)){
    openModal(requested);
  }else if(toolModal&&!toolModal.hidden){
    toolModal.hidden=true;
    document.body.classList.remove('modal-open');
  }
}
Promise.all([fetch('/data/tools.json',{cache:'no-store'}).then(r=>r.json()),fetch('/data/categories.json',{cache:'no-store'}).then(r=>r.json())]).then(([td,cd])=>{tools=td;categoryMeta=cd;const toolCategories=[...new Set(tools.map(t=>t.category))];categories=['All',...toolCategories];const nativeCount=tools.filter(t=>t.securityRelevance==='Security Native').length;heroCounts.innerHTML=`<span><strong>${tools.length}</strong><small>Tools</small></span><span><strong>${nativeCount}</strong><small>Security Native</small></span><span><strong>${toolCategories.length}</strong><small>Categories</small></span>`;renderSpotlights();renderCategoryBrowse();renderFilters();renderSections();updateCompare();openToolFromUrl()}).catch(()=>{emptyState.hidden=false;emptyState.textContent='Unable to load the tool directory.'});
window.addEventListener('popstate',()=>{if(tools.length)openToolFromUrl()});


// v15.3 prominent homepage search
const homeToolSearch=document.getElementById('homeToolSearch');
const homeSearchClear=document.getElementById('homeSearchClear');
const homeSearchStatus=document.getElementById('homeSearchStatus');
const homeSearchResults=document.getElementById('homeSearchResults');
document.querySelectorAll('[data-home-query]').forEach(b=>b.addEventListener('click',()=>{if(!homeToolSearch)return;homeToolSearch.value=b.dataset.homeQuery;renderHomeSearch();homeToolSearch.focus();}));

function renderHomeSearch(){
  if(!homeToolSearch||!homeSearchResults||!homeSearchStatus)return;
  const q=homeToolSearch.value.trim().toLowerCase();
  if(!q){
    homeSearchResults.hidden=true;
    homeSearchResults.innerHTML='';
    homeSearchStatus.textContent=tools.length?`${tools.length} tools available`:'';
    if(homeSearchClear)homeSearchClear.hidden=true;
    return;
  }

  const results=tools.filter(t=>{
    const hay=[
      t.name,t.desc,t.category,t.type,t.securityRelevance,
      ...(t.tags||[]),...(t.securityCapabilities||[])
    ].join(' ').toLowerCase();
    return hay.includes(q);
  }).slice(0,8);

  if(homeSearchClear)homeSearchClear.hidden=false;
  homeSearchStatus.textContent=`${results.length}${results.length===8?'+' : ''} result${results.length===1?'':'s'}`;

  if(!results.length){
    homeSearchResults.hidden=false;
    homeSearchResults.innerHTML='<div class="home-search-empty">No matching tools found.</div>';
    return;
  }

  homeSearchResults.hidden=false;
  homeSearchResults.innerHTML=results.map(t=>`
    <button class="home-search-result" type="button" data-home-tool="${t.name}">
      ${logoMarkup(t,'home-search-logo')}
      <span><strong>${t.name}</strong><small>${t.securityRelevance||t.category}</small></span>
      <em>Open</em>
    </button>
  `).join('');

  homeSearchResults.querySelectorAll('[data-home-tool]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const name=btn.dataset.homeTool;
      openModal(name);
      homeSearchResults.hidden=true;
    });
  });
}

if(homeToolSearch){
  homeToolSearch.addEventListener('input',renderHomeSearch);
  homeToolSearch.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      const first=homeSearchResults?.querySelector('[data-home-tool]');
      if(first)first.click();
    }
    if(e.key==='Escape'){
      homeToolSearch.value='';
      renderHomeSearch();
      homeToolSearch.blur();
    }
  });
  if(homeSearchClear)homeSearchClear.addEventListener('click',()=>{
    homeToolSearch.value='';
    homeToolSearch.focus();
    renderHomeSearch();
  });
}
