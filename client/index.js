var edit = false;
var id;
window.addEventListener('DOMContentLoaded', () => {
  //get all keys from crudcrud
  axios.get('http://localhost:3000/user')
  .then((response) => {
      var users = response.data;
      console.log(users);
      users.forEach(user => {
        addNewLineElement(user);
      });
    })
    .catch(err => console.log(err));
}); 
  
const submitButton = document.getElementById("submit");

//submit button click event
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      userName: name,
      email: emailId 
    };
    if(edit === false){
      console.log("adding")
      axios.post('http://localhost:3000/user/add-user',
      object)
      .then((user) => {
        addNewLineElement(user.data);
      })
      .catch(err => console.log(err));
    } else {
      console.log("editing");
      edit = false;
      axios.put(`http://localhost:3000/user/${id}`,
      object).then((response) => {
        addNewLineElement(response.data)
      })
      .catch(err => console.log(err));
    }
    
  } else {
    alert('Please enter details!');
  }
});

function addNewLineElement(object) {
  const ul = document.getElementById("users");
  const li = document.createElement("li");

  li.appendChild(
    document.createTextNode(object.userName + " " + object.email + " ")
  );
  
  //edit button
  const editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.value = "Edit";
  //edit event
  editBtn.addEventListener("click", () => {
    console.log(object);
    edit = true;
    id = object.id;
    document.getElementById("name").value = object.userName;
    document.getElementById("email").value = object.email;
    li.remove();
  });
  editBtn.className = "edit";
  editBtn.style.border = "2px solid green";
  li.appendChild(editBtn);

  //delete button
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "Delete";

  //delete event
  deleteBtn.addEventListener("click", () => {
    //delete from crudcrud and remove li
    axios.delete(`http://localhost:3000/user/${object.id}`)
    li.remove();
  });
  deleteBtn.className = "delete";
  deleteBtn.style.border = "2px solid red";
  li.appendChild(deleteBtn);

  ul.appendChild(li);
}