//fetch
self.addEventListener("fetch", function (event) {
  const offlineResponse = new Response(
`
    <!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Modo offline</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head> 
    <body>
       <h1>Modo offline</h1>
       <p>Para usar esta app necesitas conexión a internet</p>
    </body>
</html>
    
    `,
    {
      headers: {
        "Content-Type": "text/html",
      },
    });

  const resp = fetch(event.request);
  event.respondWith(resp.catch(() => offlineResponse));

  event.respondWith(resp);
});
