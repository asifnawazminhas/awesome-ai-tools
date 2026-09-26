(() => {
  'use strict';
  const form = document.getElementById('toolSubmissionForm');
  const nameInput = document.getElementById('submitName');
  const duplicateBox = document.getElementById('duplicateCheck');
  let tools = [];

  fetch('/data/tools.json')
    .then(r => r.json())
    .then(data => { tools = data; checkDuplicate(); })
    .catch(() => { duplicateBox.textContent = 'Catalogue check unavailable. You can still prepare the submission.'; });

  function norm(value) {
    return (value || '').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  }

  function checkDuplicate() {
    const q = norm(nameInput.value);
    if (!q) {
      duplicateBox.className = 'duplicate-check';
      duplicateBox.textContent = 'Enter a tool name to check the current catalogue.';
      return;
    }

    const exact = tools.find(t => norm(t.name) === q);
    if (exact) {
      duplicateBox.className = 'duplicate-check duplicate-warning';
      duplicateBox.innerHTML = `Possible duplicate: <a href="/tools/${slugify(exact.name)}/">${escapeHtml(exact.name)}</a> is already listed.`;
      return;
    }

    const possible = tools.filter(t => norm(t.name).includes(q) || q.includes(norm(t.name))).slice(0,3);
    if (possible.length) {
      duplicateBox.className = 'duplicate-check duplicate-warning';
      duplicateBox.textContent = `Check similar existing tool${possible.length > 1 ? 's' : ''}: ${possible.map(t=>t.name).join(', ')}.`;
    } else {
      duplicateBox.className = 'duplicate-check duplicate-ok';
      duplicateBox.textContent = 'No obvious duplicate found in the current catalogue.';
    }
  }

  function slugify(value) {
    return (value || '').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  }
  function escapeHtml(value) {
    const d=document.createElement('div'); d.textContent=value; return d.innerHTML;
  }

  nameInput.addEventListener('input', checkDuplicate);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('submitName').value.trim();
    const website = document.getElementById('submitWebsite').value.trim();
    const category = document.getElementById('submitCategory').value;
    const pricing = document.getElementById('submitPricing').value;
    const github = document.getElementById('submitGithub').value.trim();
    const source = document.getElementById('submitSource').value.trim();
    const desc = document.getElementById('submitDesc').value.trim();
    const openSource = document.getElementById('submitOpenSource').checked ? 'Yes' : 'No / Unknown';
    const api = document.getElementById('submitApi').checked ? 'Yes' : 'No / Unknown';
    const local = document.getElementById('submitLocal').checked ? 'Yes' : 'No / Unknown';

    const title = `Submit a Tool: ${name}`;
    const body = [
      '## Tool submission',
      '',
      `**Tool name:** ${name}`,
      `**Official website:** ${website}`,
      `**Category:** ${category}`,
      `**Pricing:** ${pricing}`,
      `**GitHub / repository:** ${github || 'N/A'}`,
      `**Reference / source:** ${source || website}`,
      `**Open source:** ${openSource}`,
      `**API available:** ${api}`,
      `**Local/self-hosted:** ${local}`,
      '',
      '## Description',
      '',
      desc,
      '',
      '## Submission checklist',
      '',
      '- [ ] I checked the directory for obvious duplicates',
      '- [ ] The official website/source is included',
      '- [ ] The information above is current to the best of my knowledge'
    ].join('\n');

    const url = 'https://github.com/asifnawazminhas/awesome-ai-tools/issues/new'
      + '?labels=tool-submission'
      + '&title=' + encodeURIComponent(title)
      + '&body=' + encodeURIComponent(body);

    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();