import { data } from './src/config.json';

import init from './src/init';

import tpl from './src/template.ejs';

export default function (container = 'body', options = {}) {
    if (typeof container === 'string') {
        container = document.querySelector(container);
    }
    if (!(container instanceof HTMLElement)) {
        container = document.body;
    }

    const div = document.createElement('div');

    div.innerHTML = tpl({
        ...data,
        ...options
    });

    container.appendChild(div);

    return init.call(div, div, options);
};
