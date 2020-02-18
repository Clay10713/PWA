const staticMegaManXBosses = "MegaMan-X-Bossesv1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/Armored_Armadillo.png",
  "/images/Boomer_Kuwanger.png",
  "/images/Chill_Penguin.png",
  "/images/Flame_Mammoth.png",
  "/images/Launch_Octopus.png",
  "/images/Spark_Mandrill.png",
  "/images/Sting_Chameleon.png",
  "/images/Storm_Eagle.png",
  "/images/Vile.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMegaManXBosses).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});