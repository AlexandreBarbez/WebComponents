var template =
    "<div s:id='content'>" +
    "<h1 s:id='h1'>SlimJS Clicker :</h1>" +
    "<div bind>{{slimCount}}</div>" +
    "<button click='increment'>Cliquez ici</button>" +
    "</div>";

class SlimClicker extends Slim {

    onCreated(){
        this.slimCount = "0";
        console.log("created");
        this.content.style.backgroundColor ="blue";
        this.content.style.borderRadius ="5px";
        this.content.style.color ="white";
        this.content.style.textAlign="center";
    }

    get useShadow(){
        return true;
    }

    increment(){
        let number = parseInt(this.slimCount)+1;
        this.slimCount = ""+number;
    }

}

Slim.tag('clicker-slimjs', template, SlimClicker)

