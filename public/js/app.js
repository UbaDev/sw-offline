if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
}

if (window.caches) {
  caches.open("test-1").then(console.log("cache opened"));
  caches.has("test-1").then(console.log);
  caches.delete("test-1").then(console.log);

  //Save files in cache "cache-v1"

  caches.open("cache-v1").then((cache) => {
    cache
      .addAll([
        "./index.html",
        "logo192.png",
        "logo512.png",
        "./pages/offline.html",
      ]).then(() => {
        cache.delete("index.html")
      })
      cache.match("index.html").then(res => {
        res.text().then(console.log)
      })
  });
}
