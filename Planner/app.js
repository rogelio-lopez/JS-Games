

// adding times to planner
const hours = document.querySelector('.hour');

function createHours(){
    for (let i = 0; i < 16; i++){

        let listItem = document.createElement('li');
        listItem = setAttribute("class", "hour");
        listItem.innerHTML(`
                <div class="hour__times">
                    <p>${i + 6}am</p>
                    <p>${i + 7}am</p>
                </div>
                <div class="hour__text">
                    <p></p>
                </div>
                <div class="hour__btns">
                    <i class='material-icons title-icon'>create</i>
                    <i class='material-icons title-icon'>clear</i>
                </div>`);
        hours.appendChild(listItem);
    }
}
createHours();