

const input = document.querySelector(".todo-element");
const Btn = document.querySelector(".button");
const ul = document.querySelector(".todo-list");

Btn.addEventListener("click",function(e){
      e.preventDefault();
      const text = input.value;
      if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(addBtn());
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        input.value = "";
   
  }
});

function addBtn() {
  const editBtn = document.createElement("input"); 
  editBtn.type="checkbox";
  editBtn.className ="button2";
  editBtn.addEventListener("click", function(e){ 
    if(this.checked){
      const item1= e.target.nextElementSibling;
      item1.classList.add("checked")
    }
    else{
      const item1= e.target.nextElementSibling;
      item1.classList.remove("checked")
    }  
   });

   return editBtn;
}


function addDeleteBtn() { 
  const deleteBtn = document.createElement("span"); 
  deleteBtn.textContent = "X"; 
  deleteBtn.className = "button1"; 
  deleteBtn.addEventListener("click",function(e){ 
    const item = e.target.parentElement; 
    ul.removeChild(item); 
   
  });
  return deleteBtn;
}


function filterall(){
  const all=document.querySelectorAll("li");
  for(let x of all){
    x.style.display="flex";
  }
}


function filteractive(){
  const all=document.querySelectorAll("li");
  for(let x of all ){
    x.style.display="flex";
}
const check=document.querySelectorAll(".checked");
for(let x of check ){
 x.parentNode.style.display="none";
  }
}


function filtercompleted(){
  const completed=document.querySelectorAll("li");
  for(let x of completed){
    x.style.display="none";
}
const check=document.querySelectorAll(".checked");
for(let x of check ){
 x.parentNode.style.display="flex";
  }
}


function filterclearcompleted(){
  const clear_completed=document.querySelectorAll("li");
for(let x of clear_completed ){
  x.remove();
  }
}






