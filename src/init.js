import Vue from 'vue/dist/vue.esm.js'

export default function (targetElement, options) {
    const app = new Vue({
        el: targetElement,
        data: {
            ...options
        }
    });
};
