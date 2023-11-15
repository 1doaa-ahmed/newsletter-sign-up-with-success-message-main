function ThankyouPage(){
    let input = document.getElementById("mail");
    let email = input.value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = regex.test(email);

    
    if(valid === false){
        let span = document.getElementById("added");
        span.innerText = "Valid email required";
        span.style.color = "red";
        input.style.border = "1px solid red"
        input.style.backgroundColor = "#ff000026"
        input.style.color = "red";
    }else {
        location.assign('./thank.html')
    }
    
}
