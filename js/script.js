document.getElementById("contact-nav").style.display="none";

function btnClick(){
  var contact = document.getElementById("contact-nav");
    if(contact.style.display=="none"){
      contact.style.display ="block";
    }
    else{
      contact.style.display ="none";
    }
}
