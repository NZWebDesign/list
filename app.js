let userList = document.querySelector(".nameList");
let listInput = document.querySelector(".listInput");
let addToListButton = document.querySelector(".addToListButton");

addToListButton.addEventListener('click', function(){
 let newListItem = document.createElement('p');
 let listContent = document.createTextNode(listInput.value);
 newListItem.appendChild(listContent);
 newListItem.classList.add('p');
  userList.appendChild(newListItem);
 listInput.value='';

 newListItem.addEventListener('click', function(){
   newListItem.classList.toggle("change");
    }           
)

newListItem.addEventListener('dblclick', function(){
    newListItem.removeChild(listContent);
})

});

