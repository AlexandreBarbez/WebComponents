import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';


class PolymerClicker extends PolymerElement {
  constructor(){
      super();
      this.counter = 0;
  }

  increment(){
    this.counter += 1;
  }

  static get template() {
    return html`
      <style>
        h1 {
          color:black;
        }
        #content{
          color:white;
          border-radius: 5px;
          background-color: darkgreen;
          text-align: center;
        }
      </style>
      
      <div id="content">
        <h1>Polymer Clicker :</h1>
        <div>{{counter}}</div>
        <button on-click="increment">Cliquez ici</button>
      </div>
    `;
  }
}
customElements.define('clicker-polymer', PolymerClicker);
