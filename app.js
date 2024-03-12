
const p1Score = document.querySelector('#p1Score');
let p1ScoreValue = 0;
const p2Score = document.querySelector('#p2Score');
let p2ScoreValue = 0;

const gameSelect = document.querySelector('#game-select');
let gameTo = 5;
gameSelect.addEventListener('change', function(){
    gameTo = gameSelect.value;
    
});


const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function(){
        p1ScoreValue++;
        console.log(p1ScoreValue);
        p1Score.innerText = p1ScoreValue;
        if(p1ScoreValue==gameTo){
            p1Score.style.color = 'green';
            p2Score.style.color = 'red';
        }
});

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function(){
        p2ScoreValue++;
        // console.log(p1ScoreValue);
        p2Score.innerText = p2ScoreValue;
        if(p2ScoreValue==gameTo){
            p2Score.style.color = 'green';
            p1Score.style.color = 'red';
        }
});

const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function(){
    p1ScoreValue=0;
    p1Score.innerText = p1ScoreValue;
    p1Score.style.color = 'black';
    p2ScoreValue=0;
    p2Score.innerText = p2ScoreValue;
    p2Score.style.color = 'black';

    gameTo=5;
    gameSelect.value =5;
});


console.log('Connected');

