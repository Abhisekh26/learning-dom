var users=[{name:"abhi",age:20}]

async function ty(){

function adduser(obj){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(obj)
            resolve()
        },3000)
    })
    
}

     function removeuser(){
    return new Promise((resolve,reject)=>{
        users.pop()
        resolve()
    })
  
}
 await adduser({name:"rohan",age:22})
 await adduser({name:"rohit",age:26})
 await removeuser()
  console.log(users)
}
ty()
 //console.log(users)