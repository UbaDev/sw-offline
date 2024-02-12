if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
}

if (window.caches) {
  caches.open("test-1").then(console.log("cache opened"));
  caches.has("test-1").then(console.log);
  caches.delete("test-1").then(console.log);

  //Save files in cache "cache-v1"

  caches.open("cache-v1").then((cache) => {
    cache.add("/index.html");
    cache
      .addAll([
      
        "logo192.png",
        "logo512.png",
        "./pages/offline.html",
      ]).then(() => {
        //Intercept a file for another
        cache.put("index.html", new Response(`Intercepted file`));
      })
      //Get all caches in the app
        caches.keys().then((keys) => {
            console.log(keys);
        });
  });
}
