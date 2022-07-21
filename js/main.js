//date
let dayString = document.getElementById('dayOfWeek')
let dayNumber = document.getElementById('dateNumber')
let date = new Date()

dayNumber.textContent = (date.getDate()+' / '+(1+date.getMonth())+' / '+date.getFullYear())
if(date.getDay()===0){
    dayString.textContent='Sunday'
}else if(date.getDay()===1){
    dayString.textContent='Monday'
}else if(date.getDay()===2){
    dayString.textContent='Tuesday'
}else if(date.getDay()===3){
    dayString.textContent='Wednesday'
}else if(date.getDay()===4){
    dayString.textContent='Thursday'
}else if(date.getDay()===5){
    dayString.textContent='Friday'
}else if(date.getDay()===6){
    dayString.textContent='Saturday'
}

//newTask
let newTask = document.getElementById('newTask')
let add = document.getElementById('add')
let ul = document.getElementById('ul')

//functionAddTask
function addTask(){
    item = newTask.value
    //condition
    if(item.length!==0){
        //createLi
        li = document.createElement('li')
        li.textContent=item
        //createDiscard
        discard = document.createElement('button')
        discard.textContent='×'
        discard.onclick=()=>{
            ul.removeChild(li)
        }
        //append
        li.append(discard)
        ul.append(li)
    }else{
        alert('Please, add a new task.')
    }
    //clearInput
    newTask.value = ''
}

//notTask
if(ul.length===0){
    nothing = document.getElementById('nothing')
    p = document.createElement('p')
    nothing.append(p)
    p.textContent = "You haven't pendings tasks."
}

//events
add.onclick=(e)=>{
    e.preventDefault()
    addTask()
    
}