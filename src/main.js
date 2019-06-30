import('@babel/polyfill')

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/workers/sw.js')
            .then(() => import('./app'))
            .catch(() => import('./app'))
    })
}
