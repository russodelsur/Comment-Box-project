// First function to set the data in the form and return the data for display

function commentBox(){

    let data = "";  
    let name = document.getElementById("userName").value
    let email = document.getElementById("userEmail").value
    let comment = document.getElementById("userComment").value
    let count = textContent = textarea.value.length;

        data =  "<h5>User name: </h5>"+ name +"<h5>User email: </h5>"+email+ "<h5>Comment: </h5>"+comment + "<h5>Comment characters: </h5>" + count + " characters"
    
        document.getElementById("data").innerHTML = data 
}

// Now setting variable for the max number of characters, and querySelector to fetch the characters. 
// Later I used the addEventListener to display the number of characters as they increase.
// Using JS object Method this to refer to the global object
// Using the .lenght array method to measure the text character lenght.

const max = 140;
let textarea = document.querySelector('textarea');
let info = document.querySelector('#info');

let counter = info.textContent = max - textarea.value.length;

textarea.addEventListener('input', function() {
info.textContent = max - this.value.length;
})

// New addEventListener to call function warningBox as characters change.
// Use JS DOM to get characters leght through another method.
// Using the if and else conditional statements to set the custom styling of the comment box and warning message.

textarea.addEventListener('input',warningBox)

function warningBox(){

    let warning;
    let count = document.getElementById('userComment').value.length; 

        if (count > max) {
        warning = "Do not exceed 140 characters please",
        document.getElementById("userComment").style.color = "red";
        document.getElementById("userComment").style.border = "2px solid red";

        } else {
            warning = ""
            document.getElementById("userComment").style.color = "black";
            document.getElementById("userComment").style.border = "1px solid black";
        }
        document.getElementById("warningBox").style.color = "red";
        document.getElementById("warningBox").innerHTML = warning;

        console.log(warning);    
        console.log(count);
        console.log(info);
}


