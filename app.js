let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');

function addTask() {
    if (inputBox.value === '') {
        alert('Add Your task');
    }
    else {
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listContainer.appendChild(task)

        var span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)


    }
    // function clear(){
    //    listContainer.value = '';

    // }
    span.addEventListener("click", function clear() {
        // alert("Span clicked!");
        // task.value = '';
        
        // task.value ='';
        
    });
    inputBox.value = '';
    saveData()

}
listContainer.addEventListener('click', (el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})
 
function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('tasks')
}
showData();