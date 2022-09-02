function commentBox(){

    let data = "";  
    let name = document.getElementById("userName").value
    let email = document.getElementById("userEmail").value
    let comment = document.getElementById("userComment").value
    let count = textContent = textarea.value.length;

        data = "User name : "+ name +"<br/>User email : "+email+ "<br/>User comment : "+comment + "<br/>" + count
    
        document.getElementById("data").innerHTML = data 
}

const max = 140;
let textarea = document.querySelector('textarea');
let info = document.querySelector('#info');

let counter = info.textContent = max - textarea.value.length;

textarea.addEventListener('input', function() {
info.textContent = max - this.value.length;
})

textarea.addEventListener('input',warningBox)


function warningBox(){

    let warning;
    let count = document.getElementById('userComment').value.length; 

        if (count > max) {
        warning = "Do not exceed 140 please",
        document.getElementById("userComment").style.color = "red";
        document.getElementById("userComment").style.border = "2px solid red";

        console.log('salmon');        
        } else {
            warning = ""
            document.getElementById("userComment").style.color = "black";

        }
        document.getElementById("warningBox").innerHTML = warning;

        console.log(counter);
        console.log(warning);    
        console.log(count);
        console.log(info);
}


