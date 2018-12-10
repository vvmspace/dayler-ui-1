import('dayler-ui');

import React from 'react';
import { render } from 'react-dom';

/** Application node */
const node = document.querySelector('div#root');

/** Render application */
import('./app')
    .then(({ App }) => render(<App />, node));
