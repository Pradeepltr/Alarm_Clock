//get all form data using query selector
const addAlarm = document.querySelector('.Set_Alarm')
//to select ul list to append all alarm list
const myList = document.querySelector('#List');


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
//To Formate Time
function formatTime(time) {
    if ( time < 10 && time.length != 2) {
        return '0' + time;
    }
    return time;
}
//Create an Empty Array to store Alarm
var alarmList=[];
addAlarm.addEventListener('submit', e=> {
    e.preventDefault();
    // const newAlarm = addAlarm.alarmTime.value;
    let formate=addAlarm.formate.value;
    let hour=addAlarm.hour.value;
    if(hour>=1&& formate=="PM"){
        hour+=12;
    }
    let new_h=formatTime(hour);
    if(new_h === '0'){
        new_h = '00'
    }
    let new_m=formatTime(addAlarm.minute.value);
    if(new_m === '0'){
        new_m = '00'
    }
    let new_s=formatTime(addAlarm.second.value);
    if(new_s === '0'){
        new_s = '00'
    }
    
    
    const newAlarm = `${new_h}:${new_m}:${new_s}`

//     add newAlarm to alarmList
    if(isNaN(newAlarm)){
        if(!alarmList.includes(newAlarm)){
            alarmList.push(newAlarm);
            console.log(alarmList);
            
            console.log(alarmList.length);
            showNewAlarm(newAlarm,formate);
            addAlarm.reset();
        } else{
            alert(`Alarm for ${newAlarm} already set.`);
        }
    } else{
        alert("Invalid Time Entered")
    }        
})
//Show alarm List with seprate delete button
function showNewAlarm(newAlarm,formate){
    const html =`
    <li class = "time-list">        
        <span class="time">${newAlarm+" "+formate}</span>
        <button class="deleteAlarm time-control" id="delete-button" onclick = "remove(this.value)" value=${newAlarm}>Delete Alarm</button>       
    </li>`
    List.innerHTML += html
};
// removes an alarm from the array when "Delete Alarm" is clicked
remove = (value) => {
    let newList = alarmList.filter((time) => time != value);
    alarmList.length = 0;                  // Clear contents
    alarmList.push.apply(alarmList, newList);
    
    console.log("newList", newList);
    console.log("alarmList", alarmList);
}
// removes an alarm from the unordered list and the webpage when "Delete Alarm" is clicked
List.addEventListener('click', e=> {
    console.log("removing element")
    if(e.target.classList.contains("deleteAlarm")){
        e.target.parentElement.remove();
    }    
})

