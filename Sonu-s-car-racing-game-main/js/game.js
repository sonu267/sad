class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref('gameState')
        gamestateref.on("value",(data)=>{
            gameState = data.val()

        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player= new Player()
            player.getCount();
            form = new Form()
            form.display()
        }
    }

    play(){
        form.hide()
        textSize(30)
        text("game Started",120,100)
        Player.getplayerinfo()
        if(allplayers!==undefined){
        var pos = 120
        for(var plr in allplayers){
            if(plr==="player"+player.index){
                fill("red")
            
            }
            else{
                fill("black")
            }
        pos+=20
        textSize(15)
        text(allplayers[plr].name+": "+allplayers[plr].distance,120,pos)
        }    
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=10
     player.update()

    }
    }
}