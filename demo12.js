var users=[]

function adduser(obj){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(obj)
            resolve()
        },1000)
    })
}
function lastTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.time=new Date().getTime()
            resolve()
        },1000)
    })
}
function deluser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.pop()
            resolve()
        },1000)
    })
    users.pop()
}

//Promise.all([adduser({name:"prem",age:32,time:13}),lastTime()]).then(([adduserresolve,lastTimeresolve])=>{
    //console.log(users)})

 Promise.all([adduser({name:"prem",age:32}),lastTime()]).then(()=>{
     Promise.all([adduser({name:"jimmy",age:72}),lastTime()]).then(()=>{
        Promise.all([adduser({name:"jim",age:79}),lastTime()]).then(()=>{
            Promise.all([deluser(),lastTime()]).then(()=>{
                console.log(users)
            })
            //console.log(users)
        })
            
        })
    })