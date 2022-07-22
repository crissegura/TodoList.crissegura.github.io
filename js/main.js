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
let list = document.getElementById('list')

//functionAddTask
function addTask(){
    item = newTask.value
    //condition
    if(item.length!==0){
        //createLi
        let h5 = document.createElement('h5')
        h5.textContent=item
        
        //createDiscard
        let discard=document.createElement('button')
        discard.textContent = '×'
        discard.onclick=()=>{
            list.removeChild(h5)
        }
        //append
        list.append(h5)
        h5.append(discard)
    }else{
        alert('Please, add a new task.')
    }
    //clearInput
    newTask.value = ''
}


//events
add.onclick=(e)=>{
    e.preventDefault()
    addTask()
}