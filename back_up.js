let form=document.querySelector(".form");
let input=document.querySelector(".input")
let tasks = document.querySelector(".tasks")

if(window.localStorage.getItem("loulou")){
    tasks.innerHTML=window.localStorage.getItem("loulou");
    
}
input.focus()
form.children[1].onclick=function(){
    if(input.value.length!==0){
        let cloned=form.cloneNode(true);
        cloned.children[1].value="deleat"
        cloned.children[0].setAttribute("value",input.value)
        tasks.append(cloned)
        input.value=""
        window.localStorage.setItem("loulou",tasks.innerHTML)
        input.focus()
    }
}

document.addEventListener("click",function(e){
    if(e.target.value==="deleat"){
        // console.log("e.currentTarget")
        e.target.parentElement.remove();
        window.localStorage.setItem("loulou",tasks.innerHTML)
    }
    input.focus()
    
})

