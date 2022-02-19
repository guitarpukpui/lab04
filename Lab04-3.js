let xo = true;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let t = 1;
function add(event){
    c1 = document.querySelector('#c1');
    c2 = document.querySelector('#c2');
    c3 = document.querySelector('#c3');
    c4 = document.querySelector('#c4');
    c5 = document.querySelector('#c5');
    c6 = document.querySelector('#c6');
    c7 = document.querySelector('#c7');
    c8 = document.querySelector('#c8');
    c9 = document.querySelector('#c9');
    let textpu = document.querySelector('p');
     
    if(t % 2 === 1)
    {
        prinX(event);
       //event.target.textContent = 'x';
        
        //check();
    }
    if(t % 2 === 0){
        let randomNO = random(t, 9);
        rdn(randomNO);
        console.log('ramdon number = ' + randomNO);
        //console.log(randomNO);
        check();
    }

    if(t > 4){
        ox.addEventListener('click', win);
    }
    if(t > 10){
        textpu.innerHTML = 'Game over';
    }
    console.log('ttttt = ' + t);
    //console.log('ramdon number = ' + randomNO);
}

let ox = document.querySelector('table');
    ox.addEventListener('click', add);

function win(){
    c1 = document.querySelector('#c1');
    c2 = document.querySelector('#c2');
    c3 = document.querySelector('#c3');
    c4 = document.querySelector('#c4');
    c5 = document.querySelector('#c5');
    c6 = document.querySelector('#c6');
    c7 = document.querySelector('#c7');
    c8 = document.querySelector('#c8');
    c9 = document.querySelector('#c9');
    let textpu = document.querySelector('p');
 
    if(c1.innerHTML === c2.innerHTML & c1.innerHTML === c3.innerHTML & c1.innerHTML !== '' & c2.innerHTML !== '' & c3.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
    else if(c4.innerHTML === c5.innerHTML & c4.innerHTML === c6.innerHTML & c4.innerHTML !== '' & c5.innerHTML !== '' & c6.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
    else if(c7.innerHTML === c8.innerHTML & c7.innerHTML === c9.innerHTML & c7.innerHTML !== '' & c8.innerHTML !== '' & c9.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
    else if(c1.innerHTML === c4.innerHTML & c1.innerHTML === c7.innerHTML & c1.innerHTML !== '' & c4.innerHTML !== '' & c7.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
    else if(c2.innerHTML === c5.innerHTML & c2.innerHTML === c8.innerHTML & c2.innerHTML !== '' & c5.innerHTML !== '' & c8.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
    else if(c3.innerHTML === c6.innerHTML & c3.innerHTML === c9.innerHTML & c3.innerHTML !== '' & c6.innerHTML !== '' & c9.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
    else if(c1.innerHTML === c5.innerHTML & c1.innerHTML === c9.innerHTML & c1.innerHTML !== '' & c5.innerHTML !== '' & c9.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
    else if(c3.innerHTML === c5.innerHTML & c3.innerHTML === c7.innerHTML & c3.innerHTML !== '' & c5.innerHTML !== '' & c7.innerHTML !== ''){
        textpu.innerHTML = 'win';
    }
}

function check(){
    c1 = document.querySelector('#c1');
    c2 = document.querySelector('#c2');
    c3 = document.querySelector('#c3');
    c4 = document.querySelector('#c4');
    c5 = document.querySelector('#c5');
    c6 = document.querySelector('#c6');
    c7 = document.querySelector('#c7');
    c8 = document.querySelector('#c8');
    c9 = document.querySelector('#c9');
    let buffer = 0;
    let tt = t;
    for(i=tt;i<9;i++)
    {
        if(array[i] === 1 & c1.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log( array[tt]);
            break;
        }
        else if(array[i] === 2 & c2.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
        else if(array[i] === 3 & c3.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
        else if(array[i] === 4 & c4.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
        else if(array[i] === 5 & c5.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
        else if(array[i] === 6 & c6.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
        else if(array[i] === 7 & c7.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
        else if(array[i] === 8 & c8.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
        else if(array[i] === 9 & c9.textContent !== ''){
            buffer = array[tt] ;
            array[tt] = array[i];
            array[i] = buffer;
            console.log(array[tt]);
            break;
        }
    }
     console.log(array);
    t++;
}

function random(min, max){
    return Math.floor(Math.random() * (max - min) + t);
}

function rdn(randomNO){

    if(array[randomNO] === 1 & c1.textContent === '' & c1.textContent !== 'x'){
        c1.textContent = 'o';
        
    }
    else if(array[randomNO] === 2 & c2.textContent === '' & c2.textContent !== 'x'){
        c2.textContent = 'o';
        
    }
    else if(array[randomNO] === 3 & c3.textContent === '' & c3.textContent !== 'x'){
        c3.textContent = 'o';
        
    }
    else if(array[randomNO] === 4 & c4.textContent === '' & c4.textContent !== 'x'){
        c4.textContent = 'o';
        
    }
    else if(array[randomNO] === 5 & c5.textContent === '' & c5.textContent !== 'x'){
        c5.textContent = 'o';
        
    }
    else if(array[randomNO] === 6 & c6.textContent === '' & c6.textContent !== 'x'){
        c6.textContent = 'o';
        
    }
    else if(array[randomNO] === 7 & c7.textContent === '' & c7.textContent !== 'x'){
        c7.textContent = 'o';
        
    }
    else if(array[randomNO] === 8 & c8.textContent === '' & c8.textContent !== 'x'){
        c8.textContent = 'o';
        
    }
    else if(array[randomNO] === 9 & c9.textContent === '' & c9.textContent !== 'x'){
        c9.textContent = 'o';
        
    }
}

function prinX(event){
    if(event.target.innerHTML === ''){
        event.target.textContent = 'x';
        check();
    }
}