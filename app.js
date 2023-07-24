"use strict"

window.onload=()=>{
    let date= document.getElementById("date");
    let container2=document.getElementById("container2");
    let eventInput=document.getElementById("eventInput");
    let stage=document.getElementById("stage");
    let body=document.body;
    
   
    let counter =0;// task pending counter;
    
    
    // CASE 1(Adding DATE).
    let liveDate = new Date().toLocaleString("English",{dateStyle:"full"})
    date.innerHTML=`${liveDate}`;
   
   
   
    
 //CASE 2.0:(ADDING EVENT FUNCTION TO CONTAINER2);
 container2.addEventListener("click",()=>{
 
  container2.style.display="none";
  eventInput.style.display="block";
  eventInput.focus();
  
  
  //CASE 2.1:(eventInput event func);
  eventInput.addEventListener("blur",()=>{
      container2.style.display="flex";
      eventInput.style.display ="none";
      
      
  let value= eventInput.value.trim();
      
      if(value){
       //create 1:
        counter++;
  let taskContainer=document.createElement("section");
       taskContainer.setAttribute("id","taskContainer");
  let valueContainer=document.createElement("div");
       valueContainer.setAttribute("id","valueContainer");
  let taskValue=document.createElement("div");
       taskValue.setAttribute("id","taskValue");
       taskValue.innerHTML =value;
  let status=document.createElement("div");
       status.setAttribute("id","status");
  let getCounter=status.innerHTML=`Task ${counter} Pending `;
  let delKey =document.createElement("div");
       delKey.setAttribute("id","delKey");
       delKey.innerHTML="🗑️";
  let clicker= document.createElement("div");
       clicker.setAttribute("id","clicker");
    
       
  //Append 1:
  valueContainer.appendChild(taskValue);
  valueContainer.appendChild(status);
  taskContainer.appendChild(clicker);
  taskContainer.appendChild(valueContainer);
  taskContainer.appendChild(delKey);
  stage.appendChild(taskContainer);
 
   eventInput.value="";

    stage.scrollTo(0,stage.scrollHeight);
   
   
  //CASE 2.2(Delete key event function);
   delKey.addEventListener("click",()=>{
        
      
       if(confirm ("Do you really want to delete this TASK?") ){
           stage.removeChild(taskContainer);
       }else{
           return;
       }
             
    });//End of deleteKey function;
    
   
       
    
  // CASE 2.3 (clicker event function);
       let num=0;
    
 clicker.addEventListener("click",()=>{
       num+=1; 
    if(num === 1){
       clicker.style.backgroundColor="#69ff84";
       clicker.innerHTML ="✔️";
       taskValue.style.textDecoration="line-through";
       status.innerHTML =`Task Completed`;
       status.style.color="#69ff84";
                
     }else if(num === 2){
       clicker.style.backgroundColor="transparent";
       clicker.innerHTML ="";
       taskValue.style.textDecoration="none";
       status.innerHTML =`${getCounter}`;
       status.style.color="yellow";
        num=0;
        
   };//End of if.
 });//End of clicker event function;
 
 
 
 
 //CASE 2.4 (adding effect to stageContainer);
     let numb=0;
  stage.addEventListener("click",(e)=>{
      
      numb+=1;
       if(numb === 1){
        e.target.style.animation="shake .3s ease-in 2";
        
       }else if(numb === 2){
          e.target.style.animation="shake .3s ease-in 2";
        
          numb=0;
       }
       });// Emd of case 2.4.
         
 } ;//End of if statement;
    
 });//End of eventInput event func();
    
 });//End of container2 event function();
    
     
};//End of General Function();
