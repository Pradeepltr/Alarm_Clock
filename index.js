// To set digital clock in proper formate
function properTime(){
    var time=new Date();
    var session="AM";
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    if(h>12){
        session="PM";
        h=h-12;
    }
    if(h==0){
        h=12;
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    var proper_time=h+":"+m+":"+s+" "+session;
    console.log(proper_time);
    document.getElementById("dispaly").innerHTML=proper_time;
    setTimeout(function(){ properTime() }, 1000);
}
properTime();