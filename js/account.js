var username_alloted=['Salman','Mehboob','Sraj','Sohail']

function chk(e){
    var msg=document.getElementById('usererr');
    for(var i=0;i<username_alloted.length;i++){
        if(username_alloted[i]==element)
    }
    
}
function setactive(e){
    
    var element = e.target;
    var prev = document.getElementsByClassName('active');
    if(prev.length == 1)
        prev[0].setAttribute('class','form-acontrol'); 
    
    element.setAttribute('class','form-control active');
    
}

var elements = document.getElementsByTagName("input");
for(var i=0;elements.length;i++)
{
    if(elements[i].type!="submit" && elements[i].type!="reset")
        {
         elements[i].addEventListener('focus',setactive,false)
        }
}

var username = document.getElementsById("username");
         username.addEventListener('blur',chk,false)
