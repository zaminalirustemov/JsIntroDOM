const id=document.querySelector("#id");
const name=document.querySelector("#name");
const surname=document.querySelector("#surname");
const add=document.querySelector("#add");
const list=document.querySelector("#list");

add.onclick=function(){
  
  let tid=document.createElement("td");
  let tname=document.createElement("td");
  let tsurname=document.createElement("td");

  tid.textContent=id.value;
  tname.textContent=name.value;
  tsurname.textContent=surname.value;

  let tr=document.createElement("tr");

  tr.appendChild(tid);
  tr.appendChild(tname);
  tr.appendChild(tsurname);


  list.appendChild(tr);

  
}
