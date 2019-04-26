import '@babel/polyfill'
import { props as $q } from 'bluebird'

const DEBUG = process.env.NODE_ENV !== 'production'

if ('serviceWorker' in navigator && !DEBUG) {
    const $workers = {
        sw: navigator.serviceWorker.register('./sw.js'),
    }

    $q($workers)
        .then(() => navigator.serviceWorker.ready.then(worker => {
            return worker.sync.register('syncdata') |> Promise.resolve
        }))
        .then(() => import('./app'))
} else {
    import('./app')
}
