import { name, data } from './src/config.json';

import init from './src/init';

import './style.wrapped.scss';

import tpl from './src/template.ejs';

import nameTransformer from './name';

export default function (container = 'body', options = {}) {
    if (typeof container === 'string') {
        container = document.querySelector(container);
    }
    if (!(container instanceof HTMLElement)) {
        options = container;
        container = document.body;
    }

    const div = document.createElement('div');

    div.id = nameTransformer(name);

    div.innerHTML = tpl({
        ...data,
        ...options
    });

    container.appendChild(div);

    return init.call(div, div, options);
};
