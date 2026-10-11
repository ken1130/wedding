// Light deterrent against casual copying: blocks the context menu, image
// dragging and the usual dev-tools / view-source shortcuts. Determined users
// can still get around it; it only stops the one-click cases.
const editable = el => el && el.closest && el.closest('input, textarea, select, [contenteditable]');
addEventListener('contextmenu', e => { if (!editable(e.target)) e.preventDefault(); });
addEventListener('dragstart', e => { if (e.target.tagName === 'IMG') e.preventDefault(); });
addEventListener('keydown', e => {
  const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
  if (k === 'f12'
    || (mod && e.shiftKey && ['i', 'j', 'c'].includes(k))   // dev tools (Win/Linux)
    || (e.metaKey && e.altKey && ['i', 'j', 'c', 'u'].includes(k)) // dev tools / source (Mac)
    || (mod && ['u', 's'].includes(k))) {                   // view source, save page
    e.preventDefault();
    e.stopPropagation();
  }
}, true);
