
const inputbox=document.getElementById('input-box');
 const containerlist=document.querySelector('.list-container');

function addtask(){
    if(inputbox.value==""){
        console.log("enter the task");
    }else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        containerlist.appendChild(li);
        console.log("append li");
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        console.log("append span");


    }
    inputbox.value="";
    savedata();

}

 containerlist.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
 })
 function savedata(){
    localStorage.setItem("x",containerlist.innerHTML);
 }
function getdata(){
    containerlist.innerHTML=localStorage.getItem("x");
}
getdata();






