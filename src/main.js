import('dayler-ui');

import('./app')
    .then(app =>
        'div#root' |> document.querySelector |> app.bootstrap,
    );
