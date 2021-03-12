class Player{
    constructor(){
    this.name = null
    }
    getCount(){
        var playerCount = database.ref('playerCount')
        playerCount.on("value",function(data){
            playerCount = data.val()

        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    
}
