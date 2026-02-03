const form = document.querySelector("form")
const input = document.querySelector('input')
const allTask = document.querySelector("#allTask")

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const text = input.value.trim();

    if(text == "")  return

    const parent = document.createElement('div')
    parent.style.marginTop = '20px'

    const task = document.createElement('span')
    task.textContent = text;
    task.style.marginRight = '20px'

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.style.width = '50px'

    const doneBtn = document.createElement('button')
    doneBtn.textContent = 'Done'
    doneBtn.style.width = '50px'
    doneBtn.style.marginRight = '10px'

    parent.append(task,doneBtn,deleteBtn);

    allTask.append(parent);

    deleteBtn.addEventListener('click',()=> {
        parent.remove();
    })

    doneBtn.addEventListener('click',()=> {
        task.style.textDecoration = 'line-through';
        task.style.color = 'grey';
    })

    form.reset();
})