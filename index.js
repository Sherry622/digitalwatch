function watch(){
    let time= new Date();
    let hrs=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let session=document.getElementById('session');


    if(hrs>=12){
        var secc = session.innerHTML='AM'
    }
    else{
        var secc = session.innerHTML='PM'
    }
    if(hrs>12){
        hrs=hrs-12
    }
    if(hrs<10){
        hrs='0'+hrs;
    }
    else{
        hrs=hrs;
    }
    if(min<10){
        min='0'+min;
    }
    else{
        min=min;
    }
    if(sec<10){
        sec='0'+sec;
    }
    else{
    sec=sec;
    }

    var hours = new Date(`2000-01-01 ${hrs}:${min} ${secc}`).getHours()
    console.log(hours)
 
    var image = document.getElementById('pic')
    if (hours >= 20 || hours <= 6) {
        image.src = '/public/nightt.jpg'
    }
    else if(hours > 6 || hours <=12 ) {
        image.src = '/public/morning.jpg'
    }
    else if(hours>12 || hours<=16){
        image.src='/public/after.jpg'
    }
    else if(hours>=16 || hours<=20){
     image.src='/public/eve.jpg'
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(watch,10)
