// ===== ÍCONES SVG =====
const sunIcon = '<svg id="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

const moonIcon = '<svg id="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

// ===== THEME TOGGLE =====
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', saved);
  updateIcon(saved);
}

function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
}

function updateIcon(theme) {
  const btn = document.getElementById('theme-btn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
  }
}

// ===== FORM SUBMIT =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const orig = btn.innerHTML;
  btn.innerHTML = '✓ Conectado!';
  btn.style.background = '#10b981';

  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = '';
    alert('Planilha conectada! Você receberá o primeiro relatório na próxima segunda-feira às 08:00.');
  }, 1500);

  return false;
}

function handleTest() {
  const sheetUrl = document.getElementById('sheet-url').value;
  if (!sheetUrl) {
    alert('Por favor, insira a URL da planilha primeiro.');
    return;
  }
  const btn = document.getElementById('testBtn');
  const orig = btn.innerHTML;
  btn.innerHTML = '⏳ Testando...';
  setTimeout(() => {
    btn.innerHTML = '✓ Conexão OK';
    btn.style.color = '#10b981';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.color = '';
    }, 2000);
  }, 1000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  const form = document.getElementById('configForm');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }

  const testBtn = document.getElementById('testBtn');
  if (testBtn) {
    testBtn.addEventListener('click', handleTest);
  }
});