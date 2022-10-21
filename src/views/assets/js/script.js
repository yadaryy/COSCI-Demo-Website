 function test() {
    var name = document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    //storing data
    var storename = localStorage.setItem("name",name);
    var storeemail = localStorage.setItem("email",email);
    var storesubject= localStorage.setItem("subject",subject);
    var storemessage = localStorage.setItem("message",message);


    alert('Sent Done !!!');
    
 }

 
 
 
