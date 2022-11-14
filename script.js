const input = document.querySelector(".comment")
// task listinin yaradilmasi
document.querySelector('.dob').onclick = function(){
    if(document.querySelector('.input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{  
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <label>
            <input type="checkbox">
                <span id="taskname">
                    ${document.querySelector('.input').value}
                </span>
                </label>
                <button class="delete">x</button>
            </div>
        `;

        document.querySelector('.input').value=""
       let cancel = document.querySelectorAll(".delete");
        for(let i=0; i<cancel.length; i++){
            cancel[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
    
// delete ve + duymelerinin funksiyasi

let delet=document.querySelector(".x")
delet.addEventListener("click",()=>{
    input.classList.add("hide")
})

let add=document.querySelector(".pl")
add.addEventListener("click",()=>{
   if(input.classList.contains("hide")){
      input.classList.remove("hide")
   }
})



// sort

let duyme=document.querySelectorAll('.duyme')
let alt=document.querySelector(".alt")
const tasks = document.querySelector("#tasks")

alt.addEventListener('click', () => {
 alt.style.display="none" 
 ust.style.display="block" 
 
let task=document.querySelectorAll('.task')
let x = [];

task.forEach(ele =>{
    x.push(ele.firstElementChild.innerText)
})

tasks.innerHTML=""
x.sort()

x.forEach(item=>{
    
   tasks.innerHTML+= `<div class="task">
   <label>
        <input type="checkbox">
    <span id="taskname">
        ${item}
    </span>
    </label>
    <button class="delete">x</button>
</div>`

document.querySelector('.input').value=""
let cancel = document.querySelectorAll(".delete");
 for(let i=0; i<cancel.length; i++){
     cancel[i].onclick = function(){
         this.parentNode.remove();
     }}


})
});

// reverse sort
let ust =document.querySelector(".ust")
ust.style.display="none"


ust.addEventListener('click', () => {
    alt.style.display="block" 
    ust.style.display="none" 
    let task=document.querySelectorAll('.task')
    let y = [];
    
    task.forEach(ele =>{
        y.push(ele.firstElementChild.innerText)
    })
    
    tasks.innerHTML=""
    y.reverse()
    
    y.forEach(item=>{
        
       tasks.innerHTML+= `<div class="task">
       <label>
        <input type="checkbox">
        <span id="taskname">
            ${item}
        </span>
        </label>
        <button class="delete">x</button>
    </div>`
document.querySelector('.input').value=""
let cancel = document.querySelectorAll(".delete");
 for(let i=0; i<cancel.length; i++){
     cancel[i].onclick = function(){
         this.parentNode.remove();
     }}
    
    })
    })