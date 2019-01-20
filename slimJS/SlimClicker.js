import '../node_modules/slim-js/Slim.js';

function buildTemplate(){
    return `
            <style>
                h1 {
                  color:black;
                }
                #content{
                  color:white;
                  border-radius: 5px;
                  background-color: blue;
                  text-align: center;
                }
            </style>
            <div id='content'>
                <h1>SlimJS Clicker :</h1>
                <div bind>{{slimCount}}</div>
                <button click='increment'>Cliquez ici</button>
            </div>
        `;
}

class SlimClicker extends Slim {

    onCreated(){
        this.slimCount = "0";
    }

    get useShadow(){
        return true;
    }

    increment(){
        let number = parseInt(this.slimCount)+1;
        this.slimCount = ""+number;
    }

}

Slim.tag('clicker-slimjs', buildTemplate(), SlimClicker)

