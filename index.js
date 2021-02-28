let handleOutsideClick;

export default {
    bind(el, binding, vnode) {
        handleOutsideClick = (e) => {
            e.stopPropagation()

            // Get the handler method name and the exclude array from the object used in v-closable
            const {handler, exclude} = binding.value;

            // List of classes of the clicked on element
            const targetClasses = Array.from(e.target.classList);

            // Compare the array of classes from the clicked element to see if there are any matches with the excluded
            // classes passed through
            const clickedOnExcluded = targetClasses.filter(element => exclude.includes(element)).length > 0;

            // Check that what was just clicked is both not the element we are applying the directive to,
            // or an excluded element
            if (!el.contains(e.target) && !clickedOnExcluded) {
                // Call the passed handler
                vnode.context[handler]();
            }
        }

        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
    },

    unbind() {
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('touchstart', handleOutsideClick);
    }
}
