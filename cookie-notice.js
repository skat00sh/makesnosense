/**
 * makesnosense.io — cookie notice
 * No cookies are used on this site. This notice informs visitors once and
 * dismisses permanently (stored in localStorage, not a cookie).
 */
(function () {
  if (localStorage.getItem('mns_notice_dismissed')) return;

  var notice = document.createElement('div');
  notice.id = 'mns-notice';
  notice.innerHTML =
    '<span class="mns-text">' +
      'Diese Website verwendet <strong>keine Cookies</strong> und kein Tracking. ' +
      'Alle Berechnungen laufen lokal in deinem Browser. ' +
      '<a href="./datenschutz.html">Datenschutz</a>' +
    '</span>' +
    '<button class="mns-ok" aria-label="Verstanden">OK</button>';

  var style = document.createElement('style');
  style.textContent = [
    '#mns-notice{',
      'position:fixed;bottom:0;left:0;right:0;z-index:9999;',
      'background:#15171E;color:#E2E5EC;',
      'font-family:"Space Grotesk",system-ui,sans-serif;font-size:14px;line-height:1.5;',
      'display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;',
      'padding:14px 24px;',
      'box-shadow:0 -2px 18px rgba(21,23,30,.35);',
      'transition:transform .3s ease,opacity .3s ease;',
    '}',
    '#mns-notice.mns-hide{transform:translateY(8px);opacity:0;pointer-events:none;}',
    '#mns-notice .mns-text{flex:1 1 280px;}',
    '#mns-notice .mns-text strong{color:#fff;}',
    '#mns-notice .mns-text a{color:#7C78F0;text-underline-offset:3px;}',
    '#mns-notice .mns-text a:hover{color:#fff;}',
    '#mns-notice .mns-ok{',
      'flex:0 0 auto;',
      'font-family:"Space Mono",monospace;font-size:12px;font-weight:700;',
      'background:transparent;color:#fff;',
      'border:1px solid rgba(255,255,255,.25);border-radius:7px;',
      'padding:7px 16px;cursor:pointer;white-space:nowrap;',
      'transition:border-color .15s,background .15s;',
    '}',
    '#mns-notice .mns-ok:hover{border-color:#fff;background:rgba(255,255,255,.08);}',
  ].join('');

  document.head.appendChild(style);
  document.body.appendChild(notice);

  notice.querySelector('.mns-ok').addEventListener('click', function () {
    notice.classList.add('mns-hide');
    setTimeout(function () { notice.remove(); }, 320);
    try { localStorage.setItem('mns_notice_dismissed', '1'); } catch(e) {}
  });
})();
