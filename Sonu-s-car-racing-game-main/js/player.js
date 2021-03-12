class Player{
    constructor(){
    this.index = null
    this.distance = 0;
    this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",(data)=>{
            playerCount = data.val()

        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
            database.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance
        })
    }
static getplayerinfo(){
    var playerinforef = database.ref('players')
    playerinforef.on("value",(data)=>{
        allplayers = data.val()
    })
}
}
