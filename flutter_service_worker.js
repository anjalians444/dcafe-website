'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "486de444a1ad40df6d6aae11ea95d000",
"version.json": "d081ac51fddc61881c7fce709c17b86a",
"index.html": "367cb0758265ea110fba46656f8e34e9",
"/": "367cb0758265ea110fba46656f8e34e9",
"main.dart.js": "29a3dc1bf4f1dabe8084b1b3d3f9ed06",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "be42588ba9b1bef869d4d474f97327a6",
"icons/Icon-192.png": "e4cc40af005009fae6a02f9c617c4fe2",
"icons/Icon-maskable-192.png": "e4cc40af005009fae6a02f9c617c4fe2",
"icons/Icon-maskable-512.png": "18226f55524f4cdd75336f8b4ab72e99",
"icons/Icon-512.png": "18226f55524f4cdd75336f8b4ab72e99",
"manifest.json": "8ffd5806b1b91ef33354cb81ca6be410",
"assets/AssetManifest.json": "0d0c69735a6c9960f952124b0433ccac",
"assets/NOTICES": "0b8dff480b2299c2f2dd1accd61768b4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "41a1fac17e880402ad84db7ba2c12d5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ba7918d416e3470ff5276d1ae9debaf9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d9a0d20a370eee1a2583275fc6816717",
"assets/fonts/MaterialIcons-Regular.otf": "5dd821f17f90853efd89ea8ec5368dfb",
"assets/assets/images/down_arrow.png": "ed8bb9739f6783968f51e3c98e515221",
"assets/assets/images/watch.png": "d72191acad6720bfd72b6ef38d886adb",
"assets/assets/images/discover.png": "aa51d135566c8bd6c19ec93186375f25",
"assets/assets/images/searchIc.png": "dac12c32524921521364361230a168f4",
"assets/assets/images/game.png": "7fa879fceb8bf04553ff6ccfb259407e",
"assets/assets/images/banner.png": "20a9fa1cedf73bc42fe4d2ff74cd15b8",
"assets/assets/images/dummy.png": "b4385ad4e1be6caea60281171618ee88",
"assets/assets/images/rent.png": "cbfa93344627c6f9ea6a3214b62eb5b8",
"assets/assets/images/music.png": "b8975450a72bdb83fb3985780fec2c78",
"assets/assets/images/home.png": "98aa65df87f6ddd1c04bdf9271a900cb",
"assets/assets/images/person.png": "59685930192585629bda1df1672c2916",
"assets/assets/images/user.png": "5bc62467882762149c47d09e7aea8679",
"assets/assets/images/rentIc.png": "c2956d457d08ac54950ffa20e91f1a91",
"assets/assets/images/rightArrow.png": "6165e8b9a0b022ec8d02238793f04c05",
"assets/assets/images/leftArrow.png": "73b39d3eace46be0278f67cba6227c24",
"assets/assets/images/like.png": "7adbf7cc34a02c1e97a97cd5671430b7",
"assets/assets/images/heart.png": "fb302e128ddbd967625e44533e7c24b0",
"assets/assets/images/premim.png": "194adbf5a44bd20ab9d4bc3a644d2d93",
"assets/assets/images/fillRent.png": "704960f779504917b61683f16af85f8a",
"assets/assets/images/bookmark.png": "1b5f777d4f046539938b1b8726485102",
"assets/assets/images/drawerMenu.png": "9cff901130fe579f71072ca628511217",
"assets/assets/images/share.png": "28e3435d42b84e905d416b82b47567cb",
"assets/assets/images/profile.png": "d6a4070e840d1d0c2f3f6853bcd9a258",
"assets/assets/images/fillMusic.png": "51114c8bb96edf7eee2d4b56425178c0",
"assets/assets/images/fillHome.png": "f5da3414e5e4e5b70f19c9b3eabdaf36",
"assets/assets/images/fillUser.png": "5bc62467882762149c47d09e7aea8679",
"assets/assets/images/playIc.png": "bd70ce4ea9487b2f8802595ce989c25d",
"assets/assets/images/fillDiscover.png": "bd2aca344bf851ca7aa4be79a624d810",
"assets/assets/images/star.png": "62890d7ef730f0fc8e821b74d52fd72c",
"assets/assets/images/add_menu.png": "3095b22218ef571431aa0d845ec595d1",
"assets/assets/images/hindiLang.png": "afb079bffca77eee0f0452d5d0e31424",
"assets/assets/images/play.png": "0ef2c3c746e5c8b2acc93e6417a33a2d",
"assets/assets/images/fillGame.png": "80d363ddd44ffdef3ff51676d9e457a5",
"assets/assets/images/free.png": "f4334c40f314f828ce98f15cd2a98fc0",
"assets/assets/lang/en.json": "00da7264f4894e8873de516983628549",
"assets/assets/lang/hi.json": "97ddb0e055714ae555c2311ca866af9a",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
