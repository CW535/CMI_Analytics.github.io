let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let name = document.getElementById("name").value;
    let email = document.getElementById("Email").value;
    let state = document.getElementById("comment").value;


  let newArray = [Email,name,comment];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 
}
