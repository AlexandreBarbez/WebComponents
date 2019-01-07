class SlimClicker extends Slim {
    get useShadow(){
        return true;
    }

    onBeforeCreated(){
        this.slimCount = 0;
    }

    increment(){
        this.slimCount +=1;
    }
}

var template = "<row>" +
    "<h1>SlimJS Clicker :</h1>" +
    "<div bind>{{slimCount}}</div>" +
    "<button click='increment'>test</button></row>";


Slim.tag('my-tag', template, SlimClicker)

