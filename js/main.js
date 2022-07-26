//date
let dayString = document.getElementById('dayOfWeek')
let dayNumber = document.getElementById('dateNumber')
let date = new Date()
let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

dayString.textContent =week[date.getDay()]

dayNumber.textContent = (date.getDate()+' / '+months[date.getMonth()]+' / '+date.getFullYear())


//newTask
let newTask = document.getElementById('newTask')
let add = document.getElementById('add')
let list = document.getElementById('list')
let clear = document.getElementById('clear')
//functionAddTask
function addTask(){
    item = newTask.value
    //condition
    if(item.length!==0){
        //createH5
        let li = document.createElement('li')
        li.textContent=item
        
        //createDiscard
        let discard=document.createElement('button')
        discard.textContent = '×'
        discard.onclick=()=>{
            list.removeChild(li)
            nothingDisplay()
        }
        //append
        list.append(li)
        li.append(discard)

        //clearInput
        newTask.value = ''

    }else{
        alert('Please, add a new task.')
    }
}

//nothing
function nothingDisplay(){
    let nothing = document.getElementById('nothing')
    let lis = document.querySelectorAll('li')
    if(lis.length!==0){
        nothing.textContent = ''
    }else{
        nothing.textContent = "You don't have any pending task."
    }
}
//events
add.onclick=(e)=>{
    e.preventDefault()
    addTask()
    nothingDisplay()
}


clear.onclick=()=>{
    let lis = document.querySelectorAll('li')
    if(lis.length!==0){
        let clearAll = list
        clearAll.textContent=''
        nothingDisplay()
    }else{
        alert("You don't have any pending task.")
    }            
}


