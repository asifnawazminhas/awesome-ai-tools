const tools = [{"name": "ChatGPT", "short": "CG", "category": "Assistants", "url": "https://chatgpt.com/", "desc": "General-purpose AI assistant for research, writing, coding, analysis and multimodal workflows.", "tags": ["General", "Coding", "Research"]}, {"name": "Claude", "short": "CL", "category": "Assistants", "url": "https://claude.ai/", "desc": "AI assistant well suited to long-context analysis, writing, coding and document-heavy workflows.", "tags": ["General", "Long context", "Coding"]}, {"name": "Gemini", "short": "GE", "category": "Assistants", "url": "https://gemini.google.com/", "desc": "Google's multimodal AI assistant for general productivity, research and creative work.", "tags": ["General", "Multimodal"]}, {"name": "DeepSeek", "short": "DS", "category": "Assistants", "url": "https://chat.deepseek.com/", "desc": "AI assistant with a strong focus on reasoning, coding and technical problem solving.", "tags": ["Reasoning", "Coding"]}, {"name": "Perplexity", "short": "PX", "category": "Research", "url": "https://www.perplexity.ai/", "desc": "AI-powered answer engine designed around web research and source-backed exploration.", "tags": ["Search", "Research", "Sources"]}, {"name": "Microsoft Copilot", "short": "MC", "category": "Assistants", "url": "https://copilot.microsoft.com/", "desc": "Microsoft's AI assistant for productivity, search and ecosystem-integrated workflows.", "tags": ["General", "Productivity"]}, {"name": "GitHub Copilot", "short": "GH", "category": "Coding", "url": "https://github.com/features/copilot", "desc": "AI coding assistant integrated with popular developer workflows and IDEs.", "tags": ["Coding", "IDE", "Developer"]}, {"name": "Cursor", "short": "CU", "category": "Coding", "url": "https://www.cursor.com/", "desc": "AI-first code editor for generating, understanding and modifying software projects.", "tags": ["Coding", "Editor", "Agents"]}, {"name": "Windsurf", "short": "WS", "category": "Coding", "url": "https://windsurf.com/", "desc": "AI coding environment focused on agentic development and codebase-aware assistance.", "tags": ["Coding", "Editor", "Agents"]}, {"name": "Hugging Face", "short": "HF", "category": "Developer", "url": "https://huggingface.co/", "desc": "Model, dataset and application ecosystem for building and exploring machine learning systems.", "tags": ["Models", "Datasets", "Developer"]}, {"name": "OpenRouter", "short": "OR", "category": "Developer", "url": "https://openrouter.ai/", "desc": "Unified API gateway for experimenting with and routing requests across multiple AI models.", "tags": ["API", "Models", "Developer"]}, {"name": "Ollama", "short": "OL", "category": "Local AI", "url": "https://ollama.com/", "desc": "Simple local runtime for downloading and running supported language models on your own system.", "tags": ["Local", "Privacy", "Models"]}, {"name": "LM Studio", "short": "LM", "category": "Local AI", "url": "https://lmstudio.ai/", "desc": "Desktop application for discovering and running compatible language models locally.", "tags": ["Local", "Desktop", "Models"]}, {"name": "Mistral AI", "short": "MI", "category": "Developer", "url": "https://mistral.ai/", "desc": "AI platform and model provider offering general-purpose and developer-focused models.", "tags": ["Models", "API", "Developer"]}, {"name": "Poe", "short": "PO", "category": "Assistants", "url": "https://poe.com/", "desc": "Multi-model AI interface that makes it easy to access and compare different assistants.", "tags": ["Multi-model", "General"]}, {"name": "NotebookLM", "short": "NL", "category": "Research", "url": "https://notebooklm.google.com/", "desc": "Research and study assistant designed to work with your own source material and documents.", "tags": ["Research", "Documents", "Notes"]}, {"name": "Elicit", "short": "EL", "category": "Research", "url": "https://elicit.com/", "desc": "AI research assistant focused on literature discovery, extraction and evidence synthesis.", "tags": ["Research", "Academic", "Literature"]}, {"name": "Midjourney", "short": "MJ", "category": "Images", "url": "https://www.midjourney.com/", "desc": "Generative image platform for high-quality creative visual exploration and concept generation.", "tags": ["Images", "Creative"]}, {"name": "Adobe Firefly", "short": "AF", "category": "Images", "url": "https://firefly.adobe.com/", "desc": "Adobe's generative AI tools for image creation, editing and creative production workflows.", "tags": ["Images", "Creative", "Design"]}, {"name": "Canva AI", "short": "CA", "category": "Images", "url": "https://www.canva.com/ai-image-generator/", "desc": "AI-assisted design and image generation integrated with Canva's visual creation workflow.", "tags": ["Images", "Design", "Productivity"]}, {"name": "Loes", "short": "LO", "category": "Assistants", "url": "https://loes.ai/", "desc": "Dutch AI assistant hosted in the EU, focused on Dutch-language use and privacy-conscious AI workflows.", "tags": ["Dutch", "EU hosted", "Privacy"]}];

const grid = document.getElementById('toolGrid');
const search = document.getElementById('search');
const filters = document.getElementById('filters');
const emptyState = document.getElementById('emptyState');
const toolCount = document.getElementById('toolCount');
const categoryCount = document.getElementById('categoryCount');
const themeToggle = document.getElementById('themeToggle');
const randomTool = document.getElementById('randomTool');

let activeCategory = 'All';

const categories = ['All', ...Array.from(new Set(tools.map(t => t.category))).sort()];
toolCount.textContent = tools.length;
categoryCount.textContent = categories.length - 1;

function renderFilters() {
  filters.innerHTML = categories.map(c => `
    <button class="filter ${c === activeCategory ? 'active' : ''}" data-category="${c}">${c}</button>
  `).join('');
  filters.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderTools();
    });
  });
}

function renderTools() {
  const q = search.value.trim().toLowerCase();
  const shown = tools.filter(t => {
    const categoryMatch = activeCategory === 'All' || t.category === activeCategory;
    const haystack = [t.name, t.category, t.desc, ...t.tags].join(' ').toLowerCase();
    return categoryMatch && haystack.includes(q);
  });

  grid.innerHTML = shown.map(t => `
    <article class="tool-card">
      <div class="tool-top">
        <div class="tool-logo" aria-hidden="true">${t.short}</div>
        <div>
          <h3>${t.name}</h3>
          <div class="category">${t.category}</div>
        </div>
      </div>
      <p>${t.desc}</p>
      <div class="tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <a class="card-link" href="${t.url}" target="_blank" rel="noopener noreferrer">
        <span>Open tool</span><span>↗</span>
      </a>
    </article>
  `).join('');

  emptyState.hidden = shown.length !== 0;
}

search.addEventListener('input', renderTools);

const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = current;
  localStorage.setItem('theme', current);
});

randomTool.addEventListener('click', () => {
  const t = tools[Math.floor(Math.random() * tools.length)];
  window.open(t.url, '_blank', 'noopener,noreferrer');
});

renderFilters();
renderTools();
