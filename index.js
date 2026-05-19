//document.getElementById("count-el").innerText=5 
//let count = 0 
//console.log(count)
//let myAge =25
//console.log(myAge)
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
function increment(){
   count+=1
   countEl.innerText=count
   
}
function save(){
    saveEl.innerText+=count
    saveEl.innerText+= "-"
    countEl.innerText=0
}