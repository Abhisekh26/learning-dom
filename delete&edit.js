var x=document.getElementById('addForm')
var y=document.getElementById('items')


//form submit event 
x.addEventListener('submit',addItem)
//delete event 
y.addEventListener('click',removeItem)
// additem 
function addItem(e){
    e.preventDefault();
    //get input value 

    var z=document.getElementById("item").value
   //create new li element 
   var li=document.createElement('li')
   //add class 
   li.className="list-group-item"
   //add text nodewith input value 
   li.appendChild(document.createTextNode(z))
     //create delete button 
    var deleteBtn =document.createElement('button')
    // add classes to deletebutton 
    deleteBtn.className="btn btn-danger btn-sm float-right delete"
    //append text node 
    deleteBtn.appendChild(document.createTextNode('X'))
   //append button to li 
    li.appendChild(deleteBtn)
    //append li to list 
    y.appendChild(li)
    //create edit button 
    // var editBtn=document.createElement('button')
    // editBtn.className="btn btn-danger btn-sm float-right delete"


}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement
            y.removeChild(li)
        }
    }
}