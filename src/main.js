import('@babel/polyfill')
import('./app')

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/workers/sw.js').then(() => {
            // ...
        }).catch(() => {
            // ...
        })
    })
}
