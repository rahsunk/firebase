import { ref, push, set, database, onValue } from "./firebase.js";

let posts=document.getElementById('posts')

let itemsRef=ref(database,"items")

onValue(itemsRef,(snapshot)=>{
    let data=snapshot.val()
    console.log(data)
    for(let key in data){
        let newDiv=document.createElement('div')
        newDiv.className="newPost"
        
        let newTitle=document.createElement('h3')
        newTitle.innerHTML=data[key][1]

        let newName=document.createElement('p')
        newName.innerHTML="User: "+data[key][0]

        let newText=document.createElement('p')
        newText.innerHTML=data[key][2]
        newText.className="newText"
        
        posts.append(newDiv)
        newDiv.append(newTitle,newName,newText)
    }
})