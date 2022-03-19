todo_fetch()
let completed_section = document.getElementById('completed')
let pending_section = document.getElementById('pending')
let completed =[];
let pending =[];

document.getElementById('completed_todo').addEventListener('click',display_completed);
document.getElementById('pending_todo').addEventListener('click',display_pending);

function todo_fetch(){
    fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())

.then(data => {
            for(let i=0;data.length;i++){
                if(data[i].completed===true){
                    completed.push(data[i].title)
                }else{
                    pending.push(data[i].title)
                }
            }
        });


    }

function display_completed(){
    for(let i=0;i<completed.length;i++){
        tag=document.createElement('li');
        tag.innerHTML=completed[i];
        completed_section.appendChild(tag)
    }
    completed=[];
}


function display_pending(){
    for(let i=0;i<pending.length;i++){
        tag=document.createElement('li');
        tag.innerHTML=pending[i];
        pending_section.appendChild(tag)
    }
    pending=[];
}