document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("username").value;
    let rollno=document.getElementById("rollno").value;
    let phoneno=document.getElementById("phoneno").value;
    let email=document.getElementById("email").value;
    let url=document.getElementById("socialmedia").value;
    let genderinput =document.querySelector('input[name="gender"]:checked')?.value || "";
    let flag=true;
    document.getElementById("name-error").innerText="";
    document.getElementById("roll-error").innerText="";
    document.getElementById("phone-error").innerText="";
    document.getElementById("email-error").innerText="";
    document.getElementById("url-error").innerText="";
    document.getElementById("radio-error").innerText="";
    if(name===""){
        document.getElementById("name-error").innerText="name is required?";
         flag=false;
    }
    if(rollno===""){
        document.getElementById("roll-error").innerText="rollno is required?";
        flag=false;
    }else if(rollno.length<3){
        document.getElementById("roll-error").innerText="enter correct rollno?";
         flag=false;
    }
    if(phoneno===""){
        document.getElementById("phone-error").innerText="phone number is required?";
        flag=false;
    }else if(phoneno.length!=10){
        document.getElementById("phone-error").innerText="invalid phone number?";
        flag=false;
    }
    if(email===""){
        document.getElementById("email-error").innerText="email is required?";
       flag=false;
    }
    if(url===""){
        document.getElementById("url-error").innerText="url is required?";
         flag=false;
    }
    if(genderinput ===""){
        document.getElementById("radio-error").innerText="select the gender";
         flag=false;
    }
    if(flag){
        document.getElementById("form").innerHTML=
        `<div>
         <h1 style="font-size:25px;text-align:center">form submitted succesfully...</h1>
         <h2 style="font-size:20px;">your data</h2>
         <div style="font-size:15px;">
         <h4>name : ${name}</h4>
         <h4>rollno : ${rollno}</h4>
         <h4>phoneno : ${phoneno}</h4>
         <h4>email : ${email}</h4>
         <h4>gender : ${genderinput }</h4>
         <h4>url : ${url}</h4>
         </div>
        </div>`


        console.log({
            name: name,
            rollno: rollno,
            phoneno: phoneno,
            email: email,
            gender: genderinput,
            url: url
          });
          
    
    }

}); 