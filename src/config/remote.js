// Direct file opening falls back to localhost. Pages served over HTTP use the
// current page hostname, so phones on the same LAN connect to the computer.
window.REMOTE_SERVER_HOST = location.hostname || 'localhost';
window.REMOTE_SERVER_PORT = 8787;
window.REMOTE_SERVER_PROTOCOL = 'http:';
window.REMOTE_SERVER_DEMO = true;
window.REMOTE_SERVER_URL =
  `${window.REMOTE_SERVER_PROTOCOL}//${window.REMOTE_SERVER_HOST}:${window.REMOTE_SERVER_PORT}`;
