class Form{
    constructor(){
         this.input = createInput("name");
         this.button = createButton("play");
         this.greeting = createElement("h3");
         this.reset=createButton("reset")
    }
hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
    display(){
        var title = createElement("h1");
        title.html("car raccing game");
        title.position(130,0);
        this.reset.position(400,100)
        this.input.position(130,160);
        this.button.position(230,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1
            player.index = playerCount
            player.updateCount(playerCount)
            player.update()

            this.greeting.html("hello welcome " +player.name);
            this.greeting.position(130,160);
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
        })
    }
}