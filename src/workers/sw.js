const CACHE = 'cache-and-update-v1'

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE).then(cache =>
            cache.addAll(['/']))
    )
})

self.addEventListener('fetch', event => {
    const HMR_ENV = ['hot-update', '__webpack_hmr']
        .map(_ => event.request.url.indexOf(_) !== -1).includes(true)

    if (HMR_ENV) {
        return false
    }

    event.respondWith(
        extract(event.request)
    )

    event.waitUntil(
        update(event.request)
    )
})

const extract = request =>
    caches.open(CACHE).then(cache =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ))

const update = request =>
    caches.open(CACHE).then(cache =>
        fetch(request).then((response) =>
            cache.put(request, response)
        ))
