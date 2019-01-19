const currentDocument = document.currentScript.ownerDocument;

class VanillaClicker extends HTMLElement {

    constructor() {
        super();
        this.count = 0;
        this.addEventListener('click', e => {
            this.increment();
        })
    }

    increment() {
        this.count += 1;
        this.render(this.count);
    }

    connectedCallback() { //Appellé lors de l'insert dans le DOM
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = currentDocument.querySelector('#clicker-vanilla-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        this.render(this.count);
    }

    render(count){
        this.shadowRoot.querySelector('#vanillaClickCounter').innerHTML = count;
    }
}

customElements.define('clicker-vanilla', VanillaClicker);