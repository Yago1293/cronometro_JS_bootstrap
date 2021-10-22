"use strict" // ignorar todo erro javascript
//DECLARANDO  AS VAR , DE CADA ELEMENTO 
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // 1 segundo
var cron;

function start(){
   cron = setInterval(() =>{ timer();} , tempo);
   
}

function pause(){
  clearInterval(cron);
}


function stop(){
  document.getElementById( "counter").innerText = "00:00:00";
  clearInterval(cron);
  var hh = 0;
  var mm = 0;
  var ss = 0;
}

// função  quando,  chega em 59 "pula para proxima casa"

function timer(){ 

  ss++;
  if( ss == 59){
    ss = 0;
    mm++;

    if(mm = 59){
      mm = 0;
      hh++;
    }
  }

// var que adiciona  +1 , em cd elemento 
  var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

 document.getElementById( "counter").innerText = format;
}


