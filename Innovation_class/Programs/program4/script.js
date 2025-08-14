function validatename(){
    const regex = /^[A-Za-z\s]+$/;
    if(!regex.test(name)){
        return "Name must contains alphabets and  "
    }


}
function validateemail(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email)){
        return "email is not valid"

    }

}
function validatepassword(){
    const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regex.test(password)){
        return ""
    }

}
function validatenumber(){
    const regex=/^[9876]+[0-9]{10}$/;
regex.test(number)

}










function handleform(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const number=document.getElementById("number").value;

    validatename(name)
    validateemail(email)
    validatepassword(password)
    validatenumber(number)
}
