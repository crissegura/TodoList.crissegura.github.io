//date
let dayString = document.getElementById('dayOfWeek')
let dayNumber = document.getElementById('dateNumber')
let date = new Date()
let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

//showDayOfWeek
dayString.textContent =week[date.getDay()]

//showDate
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

        //createLi
        let li = document.createElement('li')
        li.textContent=item
        
        //deleteTask
        li.onclick=()=>{
            list.removeChild(li)
            let taskPosition = tasks.indexOf(li.textContent)
            tasks.splice(taskPosition,1)
            localStorage.setItem('tasks',JSON.stringify(tasks))
        }

        //append
        list.append(li)
        tasks.push(li.textContent)

        //clearInput
        newTask.value = ''

        //localStorageSetItem
        localStorage.setItem('tasks',JSON.stringify(tasks))

    }else{
        Swal.fire({
            icon: 'warning',
            title: 'please add a task',
            timer: 1500,
            showConfirmButton: false
          })
    }
}

//events
add.onclick=(e)=>{
    e.preventDefault()
    addTask()
}

//Clear
clear.onclick=()=>{
    let lis = document.querySelectorAll('li')
    if(lis.length!==0){
        Swal.fire({
            title: 'Are you sure?',
            text: "you are going to delete every task",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Clear!',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
                let clearAll = list
                clearAll.textContent=''
                localStorage.setItem('tasks',JSON.stringify(tasks))
                Swal.fire({
                    title:'every task were deleted!',
                    icon:'success',
                    timer: '1500',
                    showConfirmButton: false
                })
            }
          })
    }else{
        Swal.fire({
            title:"You don't have any pending task.",
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
    }            
}

//functionLocalStorageGetItem
function getItem(){
    let saved = JSON.parse(localStorage.getItem('tasks'))
    for (e of saved){
        let li = document.createElement('li')
        li.textContent = e
        list.append(li)

        li.onclick=()=>{
            list.removeChild(li)
            let taskPosition = saved.indexOf(li.textContent)
            saved.splice(taskPosition,1)
            localStorage.setItem('tasks',JSON.stringify(saved))
        }
    }
}

//localStoraGetItem
getItem()


