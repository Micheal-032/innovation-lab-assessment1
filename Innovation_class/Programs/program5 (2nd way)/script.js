let result=document.getElementById("res")
function handleBox(){
    let para= document.getElementById("text").value
    let wordCount=para.split(" ").length
    let charCount=para.split("").length
    result.innerHTML=`<h1>Total Word Count    :${wordCount}</h1>
                      <h1>Total character Count:${charCount}</h1>`
}
document.addEventListener("Keyup",handleBox)