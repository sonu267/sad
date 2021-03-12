class Game{
    constructor(){

    }
    getState(){
        var gamestate = database.ref('gamestate')
        gamestate.on("value",function(data){
            gamestate = data.val()

        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            form = new Form()
            form.display()
            player= new Player()

        }
    }
    play(){
        form.hide()
        textSize(30)
        text("game Started",120,100)
    }
}