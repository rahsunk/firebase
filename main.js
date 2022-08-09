import { ref, push, set, database, onValue } from "./firebase.js";

let submitBtn=document.getElementById('submitBtn')

let userName=document.getElementById('name')
let userTitle=document.getElementById('title')
let userText=document.getElementById('text')

let itemsRef=ref(database,"items")

submitBtn.onclick=function(event){
    event.preventDefault()
    if(userName.value.length==0||userTitle.value.length==0||userText.value.length==0){
        alert('Please fill in all 3 boxes!')
    }
    else{
        let userInput=[userName.value,userTitle.value,userText.value]
        userName.value=""
        userTitle.value=""
        userText.value=""

        let newItemRef=push(itemsRef)
        set(newItemRef,userInput)
    }
    
}