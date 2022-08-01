let container=document.getElementById("mainContainer");
let displayScore=document.getElementById("displayScore");
let width = 28;
let score =0;
let music = new Audio('sound.mp3');





const layout=[
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,2,2,1,1,1,4,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,1,4,1,1,0,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,1,1,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,4,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,2,2,2,1,1,4,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
   

]
const squares=[]
function createBoard(){
    for (let i=0; i< layout.length ; i++){
        let square =document.createElement('div');
        container.appendChild(square);
        squares.push(square)

        if(layout[i]===0){
            squares[i].classList.add('pacManFood')
        }
        else if(layout[i]===1){
            squares[i].classList.add('wall')
        }
        else if(layout[i]===2){
            squares[i].classList.add('notallow')
        }
        else if(layout[i]===3){
            squares[i].classList.add('power')
        }
    }

}
createBoard();
let pacmanCurrentIndex=490;
squares[pacmanCurrentIndex].classList.add('pacMan');

function movePacman(e){
    squares[pacmanCurrentIndex].classList.remove('pacMan');

    switch(e.keyCode){
        case 37:
            if(pacmanCurrentIndex % width !=0 && 
                !squares[pacmanCurrentIndex-1].classList.contains('wall') && 
                !squares[pacmanCurrentIndex-1].classList.contains('notallow') )
            pacmanCurrentIndex -=1;
            if(squares[pacmanCurrentIndex-1]===squares[363])
            pacmanCurrentIndex =391;
            break;
            case 38:
                if( pacmanCurrentIndex-width>=0 && 
                    !squares[pacmanCurrentIndex-width].classList.contains('wall') && 
                    !squares[pacmanCurrentIndex-width].classList.contains('notallow'))
                pacmanCurrentIndex -=width;
                break;
                case 39:
                    if(pacmanCurrentIndex % width < width-1 && 
                        !squares[pacmanCurrentIndex+1].classList.contains('wall') && 
                        !squares[pacmanCurrentIndex+1].classList.contains('notallow'))
                    pacmanCurrentIndex +=1;
                    if(squares[pacmanCurrentIndex+1]===squares[392])
                    pacmanCurrentIndex =364;
                    break;
                    case 40:
                        if(pacmanCurrentIndex + width < width*width && 
                            !squares[pacmanCurrentIndex+width].classList.contains('wall') && 
                            !squares[pacmanCurrentIndex+width].classList.contains('notallow') )
                        pacmanCurrentIndex +=width;
                        break;
    }
    squares[pacmanCurrentIndex].classList.add('pacMan');
    eating();
    power();
    gameover();
    win();

}
document.addEventListener('keyup',movePacman);


function eating(){
    if(squares[pacmanCurrentIndex].classList.contains('pacManFood')){
        music.play();
        score++;
        displayScore.innerHTML="your score is :"+score;
        squares[pacmanCurrentIndex].classList.remove('pacManFood');
    }

} 
function power(){
    if (squares[pacmanCurrentIndex].classList.contains('power')){
        music.play;
        score+=10;
        armys.forEach(army => army.isScared=true );
        setTimeout (unscared,1000);
        squares[pacmanCurrentIndex].classList.remove('power');
    }


}
 
function unscared(){
    armys.forEach(army => army.isScared=false );

}


class Army{
    constructor(className, startIndex, speed){
        this.className=className;
        this.startIndex=startIndex;
        this.speed=speed;
        this.timerId= NaN;
        this.currentIndex=startIndex;
        this.isScared=false;

    }
}
 const armys = [
    new Army('army1',348,250),
    new Army('army2',376,400),
    new Army('army3',351,300),
    new Army('army4',379,500)
];
armys.forEach(amy => {

    squares[amy.currentIndex].classList.add(amy.className);
    squares[amy.currentIndex].classList.add('army');
    
});
armys.forEach(amy => moveArmy(amy));



function moveArmy(amy){
    let armyDir=[ -1, +1, -width, +width];
    let direction= armyDir[ Math.floor( Math.random()*armyDir.length)];

    amy.timerId= setInterval(function(){
        if (!squares[amy.currentIndex+direction].classList.contains('wall') && 
        !squares[amy.currentIndex+direction].classList.contains('army')){

            squares[amy.currentIndex].classList.remove(amy.className);
            squares[amy.currentIndex].classList.remove('army','scarArmy');

            amy.currentIndex+=direction;

            squares[amy.currentIndex].classList.add(amy.className,'army');
            
        }else direction= armyDir[ Math.floor( Math.random()*armyDir.length)];

        if(amy.isScared){

            squares[amy.currentIndex].classList.add('scarArmy');

        }
        if(amy.isScared && squares[amy.currentIndex+direction].classList.contains('pacMan') ){
             music.play;
             squares[amy.currentIndex].classList.remove(amy.classList,'army','scarArmy');
             amy.currentIndex=startIndex;
             score+=100;
             squares[amy.currentIndex].classList.add(amy.classList,'army');
        }

   gameover();
   win();
    } ,amy.speed)
   
}


function gameover(){
    if( squares[pacmanCurrentIndex].classList.contains('army') && 
    ! squares[pacmanCurrentIndex].classList.contains('scarArmy')){

        document.removeEventListener('keyup',movePacman);
        squares[pacmanCurrentIndex].classList.remove('pacMan');
        armys.forEach(amy=>clearInterval(amy.timerId));
        music.play();
        document.getElementById ("voila").innerHTML="you lost";
        setTimeout(function(){
            alert ('game over!!')
            

        },500)


    }
    
            
        }
    

        function win(){
            if( score===274){
                document.removeEventListener('keyup',movePacman);
                armys.forEach(amy=>clearInterval(amy.timerId));
                music.play();
                document.getElementById ("voila").innerHTML="you won";
                setTimeout(function(){
                    alert (' congrats you won!')
                    
                },500)
        
        
            }
            
                    
                }
            