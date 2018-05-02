/* Do some stuff to initialize */

alert('This component is being loaded!');

export default function (targetElement, options) {
    /* Do some stuff as the component DOM is ready */

    alert('This component DOM is ready!');

    targetElement.querySelector('img').addEventListener('click', function (e) {
        alert(`Hello ${options.hello}!`);
    });
};
