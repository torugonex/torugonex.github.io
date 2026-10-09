// 誤ってサイト直下に置かれた体操アプリのService Workerを解除するためのファイル
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil(caches.delete("taiso-v1").then(() => self.registration.unregister()));
});
