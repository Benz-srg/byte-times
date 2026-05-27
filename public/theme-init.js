try {
  var t = localStorage.getItem('bt:theme') || 'night';
  var a = localStorage.getItem('bt:accent') || 'cyan';
  document.documentElement.setAttribute('data-theme', t);
  document.documentElement.setAttribute('data-accent', a);
} catch (e) {}
