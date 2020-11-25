// adding times to planner
const hours = document.querySelector('.planner__times');

for (let i = 0; i < 16; i++){

    let hour = (i + 6 > 12)? i + 6 - 12 : i + 6;
    let listItem = document.createElement('li');
    
    listItem.innerHTML = `
            <div class="hour__times">
                <p>
                    ${hour}
                    ${(i + 6 > 12)? 'pm' : 'am'} 
                </p>
                <p>
                    ${(hour + 1 > 12)? hour + 1 - 12 : hour + 1}
                    ${(i + 6 > 12)? 'pm' : 'am'}
                </p>
            </div>
            <div class="hour__text">
                <p>something that I have to do today</p>
            </div>
            <div class="hour__btns">
                <i class='material-icons edit'>create</i>
                <i class='material-icons important'>grade</i>
                <i class='material-icons done'>done</i>
            </div>`;
    hours.appendChild(listItem);
}

class UI{
    static handleDone(el){
        const text = el.parentElement.previousElementSibling.firstElementChild;

        if (el.classList.contains('redo')){
            text.style.textDecoration = 'none';
            el.innerText = 'done';
            el.classList.remove('redo');
        }
        else{
            text.style.textDecoration = 'line-through';
            el.innerText = 'clear';
            el.classList.add('redo');
        }
    }
    static handleImportant(el){
        
    }


}




// Event listener for list buttons

hours.addEventListener('click', (e)=>{
    if(e.target.classList.contains('done')){
        UI.handleDone(e.target);
    }
    else if(e.target.classList.contains('edit')){
        console.log(e.target);
    }
    else if(e.target.classList.contains('important')){
        
    }
});