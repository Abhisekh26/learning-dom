var x=document.querySelector('.list-group-item:nth-child(2)')
x.style.backgroundColor="green"
 var y=document.querySelector('.list-group-item:nth-child(3)')
  
 y.style.visibility="hidden"

 var odd=document.querySelectorAll('li:nth-child(odd)')
 for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green"
 }
 var l=document.querySelectorAll('.list-group-item')
 
 l[1].style.color= "red"