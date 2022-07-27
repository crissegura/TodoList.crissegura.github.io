//date
let dayString = document.getElementById('dayOfWeek')
let dayNumber = document.getElementById('dateNumber')
let date = new Date()
let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

dayString.textContent =week[date.getDay()]

dayNumber.textContent = (months[date.getMonth()]+' / '+date.getDate()+' / '+date.getFullYear())


//newTask
let newTask = document.getElementById('newTask')
let add = document.getElementById('add')
let list = document.getElementById('list')
let clear = document.getElementById('clear')
let tasks = []

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
        discard.onclick=()=>{
            list.removeChild(li)
            nothingDisplay()
        }
        //append
        list.append(li)
        li.append(discard)
        tasks.push(li.textContent)

        //clearInput
        newTask.value = ''

        //localStorageSetItem
        localStorage.setItem('tasks',JSON.stringify(tasks))

    }else{
        alert('Please, add a new task.')
    }
}
//functionNothingDisplay
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
//Clear
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
//functionLocalStorageGetItem
function getItem(){
    let saved = JSON.parse(localStorage.getItem('tasks'))
    
    while (saved.length >0){
    let discard=document.createElement('button')
    discard.onclick=()=>{
        list.removeChild(li)
        nothingDisplay()
    }

    li = document.createElement('li')
    li.textContent = saved.pop()
    li.append(discard)
    list.append(li)
    }
}

getItem()

