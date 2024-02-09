self.addEventListener("fetch", function (event) {
  const offlineResponse = fetch("pages/offline.html")

  const resp = fetch(event.request);
  event.respondWith(resp.catch(() => offlineResponse));
 
  event.respondWith(resp);
});
