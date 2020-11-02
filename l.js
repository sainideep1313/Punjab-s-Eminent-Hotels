let date;
let time;
const options={weekday:'long',year:'numeric',month:'long',day:'numeric'}
/////arrow funtion//////
setInterval(()=>{
var a=new Date()
 time=a.getHours() + ' : ' + a.getMinutes()  + ' : ' + a.getSeconds();
 date=a.toLocaleDateString(undefined,options);
console.log(time);
console.log(date);

document.getElementById('time').innerHTML=date+ ' on ' + time;

},1000);

