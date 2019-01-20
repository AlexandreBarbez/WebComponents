Vue.component('clicker-vuejs', {
    data: function () {
        return {
            count: 0,
            h1: {
                color: 'black'
            },
            content: {
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '5px',
                textAlign:'center'
            }
        }
    },
    template: ` <div id="content" v-bind:style="content">
                    <h1 v-bind:style="h1">VueJS Clicker :</h1> 
                    <div>{{ count }}</div>
                    <button v-on:click="count++">clickez ici</button>
                </div>`,


})