var x=document.getElementById('addForm')
var y=document.getElementById('items')
var filter=document.getElementById("filter")

//form submit event 
x.addEventListener('submit',addItem)
//delete event 
y.addEventListener('click',removeItem)
//filter event 
filter.addEventListener("keyup",filterItems)
additem 
function addItem(e){
    e.preventDefault();
    //get input value 
    var z=document.getElementById("item").value
    //get input value 
    var t=document.getElementById('item3').value
    //create new li element 
   var li=document.createElement('li')
   //add class 
   li.className="list-group-item"
   //add text nodewith input value 
   li.appendChild(document.createTextNode(z))
   li.appendChild(document.createTextNode(t))
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
  /// create edit button 
    var editBtn=document.createElement('button')
    editBtn.className="rahul float-right"
    editBtn.appendChild(document.createTextNode("Edit"))
    li.appendChild(editBtn)
    y.appendChild(li)
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement
            y.removeChild(li)


    }
}
}
function filterItems(e){
    //convert text to lowercase 
    var text=e.target.value.toLowerCase()
    var items=y.getElementsByTagName('li')
    
    Array.from(items).forEach(function(item) {
        var itemName=item.childNodes[0].textContent 
        var o=item.childNodes[1].textContent 
        var rt=itemName+o
        
        
        if(rt.toLowerCase().indexOf(text) !=-1){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        } 
     })
}