var x= document.querySelector('#items')
// // parentNode
//console.log(x.parentNode)
// x.parentNode.style.backgroundColor="#f4f4f4"
// console.log(x.parentNode.parentNode.parentNode)

//parentelement 
// console.log(x.parentElement)
// x.parentElement.style.backgroundColor="#f4f4f4"
//  console.log(x.parentElement.parentElement.parentElement)
//  //note to self parent node aand parent eleement are same thing 

//childnode 
// console.log(x.childNodes)

//children 
// console.log(x.children[1])
// // childNodes and children are same but only difference is childNodes will give u all the break as tex but children will give u only the elemt .avoid using childnodes
// x.children[1].style.backgroundColor="yellow"

//firstchild
// console.log(x.firstChild)
// //firstElementChild is more useful than first child 
// x.firstElementChild.textContent="hello"

//lastchild
//  console.log(x.lastChild)
//  //LastElementChild
//  console.log(x.lastElementChild)
//  x.lastElementChild.textContent="hello guava"
// //  same as first child and afirst element child 

// //nextsiblings
// console.log(x.nextSibling)
// console.log(x.nextElementSibling)

//previoussibling 
// console.log(x.previousSibling)
// //previousElementSibling
// console.log(x.previousElementSibling)
// x.previousElementSibling.style.color="red"

// createElement 
var y=document.createElement('div')
y.className="hello"
y.id="how"
y.setAttribute=("title","how are you?")

var z=document.createTextNode("hello world!")
y.appendChild(z)

var x=document.querySelector('header .container')
var h1=document.querySelector('header h1')

var li=document.querySelector("list .list-group")
console.log(y)
y.style.fontSize="30px"
x.insertBefore(y,h1)
x.insertBefore(y,li)