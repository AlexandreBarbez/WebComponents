// With Custom Elements, web developers can create new HTML tags, beef-up existing HTML tags,
// or extend the components other developers have authored.
// This API is the foundation of Web Components.
const currentDocument = document.currentScript.ownerDocument;

class VanillaClicker extends HTMLElement {

    constructor() {
        // Required by CE spec
        super();
        this.count = 0;
        this.addedValue = 1;
        this.addEventListener('click', e => {
            this.increment();
        })
    }

    increment() {
        this.count += this.addedValue ;
        this.render(this.count);
        console.log("Vanilla-clicker clicked "+this.count+" times");
    }

    connectedCallback() { //Appellé lors de l'insert dans le DOM
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = currentDocument.querySelector('#clicker-vanilla-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        this.addedValue = parseInt(this.getAttribute('added-value'));

        this.render(this.count);
    }

    render(count){
        this.shadowRoot.querySelector('#vanillaClickCounter').innerHTML = count;
    }
}

customElements.define('clicker-vanilla', VanillaClicker);