class Form {

 constructor() {

   this.input = createInput("").attribute("placeholder", "Name");
   this.button = createButton('Play');


 }

 hide(){
   this.button.hide();
   this.input.hide();
 }

display () {

   this.title.html("Chess");
   this.title.position(width/2-50 , 50);

   this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
   this.button.position(displayWidth/2 + 30, displayHeight/2);

   this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount-1;
      this.title.hide;

})

}
}