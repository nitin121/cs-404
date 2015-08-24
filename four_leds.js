var b = require('bonescript');

//config pins for leds
var leds = [  "P9_11",  "P9_13",  "P9_15",  "P9_17"];

//config pins for pushbuttons
var button = ["P9_23","P9_25","P9_27","P9_41"];

//setting the output pins for leds
for(var i in leds) {
    b.pinMode(leds[i], b.OUTPUT);
    
}

//setting the input pins for pushbuttons
for(var i in button) {
    b.pinMode(button[i], b.INPUT);
}

/*
var state = b.LOW;
for(var i in leds) {
    b.digitalWrite(leds[i], state);
}

setInterval(toggle, 1000);

function toggle() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    for(var i in leds) {
        b.digitalWrite(leds[i], state);
    }
}

*/



///////////////

//for calling the functions for every 300ms
setInterval(ck_1,300);
setInterval(ck_2,300);
setInterval(ck_3,300);
setInterval(ck_4,300);



function ck_1(){
b.digitalRead('P9_23', ch_Button);
}
function ck_2(){
b.digitalRead('P9_25', ch_Button1);
}
function ck_3(){
b.digitalRead('P9_27', ch_Button2);
}
function ck_4(){
b.digitalRead('P9_41', ch_Button3);
}


//function definitions for giving the  outputs to the led pins

function ch_Button(x) {
  if(x.value == 1){
    //led glows when set to '1' bit and goes off when set to '0' bit
   
     b.digitalWrite('P9_11', b.HIGH);
     
   
  }
  else{
    b.digitalWrite('P9_11', b.LOW);
  }
}


function ch_Button1(x) {
  if(x.value == 1){
  //led glows when set to '1' bit and goes off when set to '0' bit
     b.digitalWrite('P9_13', b.HIGH);
     
    
  }
  else{
    b.digitalWrite('P9_13', b.LOW);
  }
}


function ch_Button2(x) {
  if(x.value == 1){
   //led glows when set to '1' bit and goes off when set to '0' bit
     b.digitalWrite('P9_15', b.HIGH);
    
  
  }
  else{
    b.digitalWrite('P9_15', b.LOW);
  }
}


function ch_Button3(x) {
  if(x.value == 1){
   //led glows when set to '1' bit and goes off when set to '0' bit
     b.digitalWrite('P9_17', b.HIGH);
   
    
  }
  else{
    b.digitalWrite('P9_17', b.LOW);
  }
}
