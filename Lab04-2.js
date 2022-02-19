let hide = true;
function c(){
    let change = document.querySelector('a');
    if(hide === true)
    {
        change.innerHTML = '>> Show details';
        let h = document.querySelector('ul');
        h.classList.add('hidden');
        hide = false;
    }
    else if(hide === false)
    {
        change.innerHTML = '>> Hide details';
        let h = document.querySelector('ul');
        h.classList.remove('hidden');
        hide = true;
    }
}

let change = document.querySelector('#show');
    change.addEventListener('click', c);
