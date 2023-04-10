var ele = document.getElementById('cd');
var size = ele.innerHTML;

setInterval(function(){
    if(size%2 == 0){
        ele.style.backgroundImage = "url(https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80)";
        if(size == 0){

        }else{
            size -= 1;
            ele.innerHTML = size;
        }
    }else{
        ele.style.backgroundImage = "url(https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg)";
        if(size == 0){

        }else{
            size -= 1;
            ele.innerHTML = size;
        }
    }

},1000)