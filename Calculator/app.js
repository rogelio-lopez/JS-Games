const numbers = document.querySelector('.numbers');
const operations = document.querySelector('.operations');
const topBtns = document.querySelector('.topBtns');
const problem = document.querySelector('.problem');


// event listener for the number buttons

numbers.addEventListener('click', (e) =>{

    // adding numbers to the problem (top part)
    if(e.target.className == "number"){

        // check if empty
        if (problem.innerText == ''){
            const numSpan = document.createElement('span');
            numSpan.className = 'num';
            numSpan.innerText = e.target.innerText;
            problem.appendChild(numSpan);
        }
        else{
            const lastChild = problem.lastElementChild;

            // groups numbers in same span
            if (lastChild.className == 'num'){
                lastChild.innerText += e.target.innerText;
            }
            
            // create new span if last element was operation
            else{
                const numSpan = document.createElement('span');
                numSpan.className = 'num';
                numSpan.innerText = e.target.innerText;
                problem.appendChild(numSpan);
            }
        }
    }
});


// event listener for the operations

operations.addEventListener('click', (e) =>{

    if(e.target.className == 'operation'){
        
        const lastChild = problem.lastElementChild;

        // error check: numbers are selected first 
        if(problem.innerText == ''){
            window.alert("Select a number first.");
        }

        else{
            // for all operations that arent the equal sign 
            if(e.target.getAttribute('id') != 'eq'){

                // create new operation span if last span is a number
                if(lastChild.className == 'num'){
                    const opSpan = document.createElement('span');
                    opSpan.className = 'op';
                    opSpan.setAttribute('id', e.target.getAttribute('id'));
                    opSpan.innerText = e.target.innerText;
                    problem.appendChild(opSpan);
                }

                // replace operation span with one selected
                else if(lastChild.className == 'op'){
                    lastChild.innerText = e.target.innerText;
                }
            }

            // action when hitting equal sign
            else{
                const arr = Array.from(document.querySelectorAll('.problem span'));
                let n1 = parseInt(arr[0].innerText);

                if(arr.length >= 2){
                    let op = arr[1].getAttribute('id');
                    let result;

                    switch (op){
                        case 'div':
                            (arr.length == 2)? result = n1/n1 : result = n1/parseInt(arr[2].innerText);
                            break;
                        case 'mult':
                            (arr.length == 2)? result = n1*n1 : result = n1*parseInt(arr[2].innerText);
                            break;
                        case 'sub':
                            (arr.length == 2)? result = n1-n1 : result = n1-parseInt(arr[2].innerText);
                            break;
                        case 'add':
                            (arr.length == 2)? result = n1+n1 : result = n1+parseInt(arr[2].innerText);
                            break;
                    }

                    document.querySelector('.result h2').innerText = result;
                }
                else{
                    document.querySelector('.result h2').innerText = n1;
                }

                problem.innerHTML = '';
            }
        }
    }
});


// event listener for top buttons

topBtns.addEventListener('click', (e) =>{

    // clear the problem
    if(e.target.getAttribute('id') == 'c'){
        problem.innerHTML = '';
        document.querySelector('.result h2').innerText = '';
    }

    // delete last item that was inserted
    else if(e.target.getAttribute('id') == 'ce' && problem.innerText != ''){
        problem.removeChild(problem.lastElementChild);
    }

    // convert to percentage
    else if (e.target.getAttribute('id') == 'percent' && problem.innerText != ''){
        const arr = Array.from(document.querySelectorAll('.problem span'));
        problem.innerHTML = '';
        document.querySelector('.result h2').innerText = (parseInt(arr[0].innerText) / 100);
    }
});