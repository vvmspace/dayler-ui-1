import('dayler-ui');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import('./app')
    .then(({ App }) => render(
        <Router>
            <App />
        </Router>,
        document.querySelector('div#root'),
    ));
