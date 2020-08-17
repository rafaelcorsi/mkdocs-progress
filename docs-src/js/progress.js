const scriptURL = 'https://script.google.com/macros/s/AKfycbxJTJIvfkJzTusu8PGkyP1aGmA7KSrKq8H4OiiQYSl9Lf6ZVM8/exec';

function progressBut(button_id)  {
    var usrname = document.getElementById("progressUsrName").value;
    var but = document.getElementById(button_id);
    var text = but.firstChild;
    if(text.data == "Cheguei Aqui!"){
       text.data = "Progresso reportado!";
       but.className = "button0 buttonDone";

       f = new FormData();
       f.append('name', usrname);
       f.append('time', new Date());
       f.append('id', button_id);
       f.append('url', window.location.href);
       fetch(scriptURL, { method: 'POST', body: f})
       .then(response => console.log('Success!', response))
       .catch(error => console.error('Error!', error.message));
    }
}

 $('.auto-save').savy('load',function(){
     console.log("All data from savy are loaded");
 });

 function dstry(){
     $('.auto-save').savy('destroy',function(){
         console.log("All data from savy are Destroyed");
         window.location.reload();
     });
 }
