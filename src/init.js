/* Do some stuff to initialize */

console.log('This component is being loaded!');

export default function (targetElement, options) {
    /* Do some stuff as the component DOM is ready */

    console.log('This component\'s DOM is ready!', targetElement);

    targetElement.querySelector('img').addEventListener('click', function (e) {
        alert(`hello ${options.hello}`);
    });
};
