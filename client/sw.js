const version = 0.1;
const cacheConfig = {
  staticAssets: ['/client/index.html', '/client/app.js'],
  staticCacheVersion: `staticCache-${version}`,
  dynamicCacheVersion: `dynamicCache-${version}`,
  fetchOptions: { ignoreVary: true },
};

const installNewCache = async ({ staticAssets, staticCacheVersion }) => {
  try {
    const cache = await caches.open(staticCacheVersion);
    return cache.addAll(staticAssets);
  } catch (error) {
    console.error(`Failed to update to ${staticCacheVersion} with error: ${error}`);
  }
};

const removeOldCache = async ({ staticCacheVersion }) => {
  try {
    const cacheKeys = await caches.keys();
    return Promise.all(
      cacheKeys.filter((key) => key !== staticCacheVersion).map((key) => caches.delete(key))
    );
  } catch (error) {
    console.error(`Failed to remove old cache: ${error}`);
  }
};

const addToCache = async (cacheName, event) => {
  try {
    const fetchResponse = await fetch(event.request);
    const openCache = await caches.open(cacheName);
    await openCache.put(event.request, fetchResponse.clone());
    return fetchResponse;
  } catch (error) {
    console.error(`Failed to add ${event.request.url} to cache.`);
  }
};

const checkCache = async ({ dynamicCacheVersion, fetchOptions }, event) => {
  try {
    const cacheResponse = await caches.match(event.request, fetchOptions);
    return cacheResponse || addToCache(dynamicCacheVersion, event);
  } catch {
    console.error('Failed to check cache.');
  }
};

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(installNewCache(cacheConfig));
});

self.addEventListener('activate', (event) => {
  // eslint-disable-next-line no-undef
  clients.claim();
  event.waitUntil(removeOldCache(cacheConfig));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(checkCache(cacheConfig, event));
});
