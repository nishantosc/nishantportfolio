// dark / light toggle
var root = document.documentElement;
var themeBtn = document.getElementById('theme-btn');

function isDark() {
  var set = root.getAttribute('data-theme');
  if (set) return set === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateLabel() {
  themeBtn.textContent = isDark() ? 'Light' : 'Dark';
}

try {
  var saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
} catch (e) {}
updateLabel();

themeBtn.addEventListener('click', function () {
  var next = isDark() ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
  updateLabel();
});

// read more on the startup card
var more = document.getElementById('more');
var moreBtn = document.getElementById('more-btn');

moreBtn.addEventListener('click', function () {
  var open = more.classList.toggle('open');
  moreBtn.textContent = open ? 'Show less' : 'Read more';
  moreBtn.setAttribute('aria-expanded', open);
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();
