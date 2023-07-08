let btn = document.getElementById("SubmitButton")
let msgErr = document.getElementById("msgErr")
let msgOk = document.getElementById("msgOk")


btn.addEventListener("click",(e) => {
    e.preventDefault();	
    console.log("Button Clicked")
    let email = document.getElementById("useremail").value;
    let pass  = document.getElementById("userpass").value;
    let hasError = false;

    const fetchOption = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          "email": email,
          "password": pass
        })
      }

      fetch("http://localhost:8080/login/", fetchOption)
      .then((resp) => {
        if(resp.status === 403){
           hasError = true;
        }
	console.log("I am here")
        return resp.json();
      })
      .then(data => {
	 console.log(data)
         if(hasError){
            msgErr.innerText = data.msg
            msgOk.innerText = "";
         } else{
            msgOk.innerText = data.msg
	    msgErr.innerText = "";
         }
      })
      .catch((err) => {
        console.log(err)
      })
})
