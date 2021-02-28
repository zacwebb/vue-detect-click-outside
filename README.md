# 🕵 vue-detect-click-outside

A simple [custom Vue directive](https://vuejs.org/v2/guide/custom-directive.html) to detect clicks outside an element
and call a method.

## Installation
Using Yarn:

    yarn add vue-detect-click-outside

Using npm:

    npm i vue-detect-click-outside

## Usage
    v-click-outside="<options>"

## Options
An array containing the following

### handler
A string matching the name of a method in the same Vue component. Called when a click is detected outside the element
the directive is on (or any excluded elements).  
Example: `handler: 'myMethod'`

### exclude
An array of classnames of elements that we don't want to trigger the click outside event. This could be useful for a
button that opens a dialog, otherwise clicking on the button will immediately close the dialog.  
Example: `exclude: ['one-element', 'another-element']`

## Example
    <template>
        <div>
            <div v-click-outside="{
                handler: 'clickedOutside',
                exclude: ['excluded']
            }">Clicking anywhere outside me will trigger the method</div>

            <div class='excluded'>Except for me!</div>
        </div>
    <template>

    <script>
        import clickOutside from 'vue-detect-click-outside';
    
        export default {
            methods: {
                clickedOutside() {
                    console.log('You clicked outside the element');
                }
            }
        }
    </script>