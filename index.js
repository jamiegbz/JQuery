// giving all boxes a varaibale
let box1 = $(`#box1`);
let box2 = $(`#box2`);
let box3 = $(`#box3`);
let box4 = $(`#box4`);
let box5 = $(`#box5`);
let box6 = $(`#box6`);
let box7 = $(`#box7`);
let box8 = $(`#box8`);
let box9 = $(`#box9`);

// Assigning players their Letter 
let player1 = "X"
let player2 = "O"

/*keep track of turns*/
let turn = 0;
// set winner to false (game has not started) 
let winner = false;

/*hide alerts */
$(`#start`).hide();
$(`#winner`).hide();
$(`#draw`).hide();

/*keeping track of current player*/
let currentPlayer = '';

/* 8 possible winning outcomes*/
const winningOutComes = [
    [box1, box2, box3],[box4, box5, box6], [box7, box8, box9],
    [box1, box4, box7], [box2,box5, box8], [box3,box6,box9],
    [box1,box5,box9], [box3,box5,box7]
];

//end game function shows up when game is over
const endGame = () =>{
    console.log('GAME OCVER!')
    $(".box").css("pointer-events", "none");
};



//check who the winner is
const checkWinner = (currentPlayer, a, b, c) => {
    if(a.text() === currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer){
        winner = true;
        console.log(`${currentPlayer} has won!`);


        $('#winner').text(`GAME OVER... ${currentPlayer} WINS!`)
        $('#winner').show();

        endGame();
    }
};

//check the outcomes 8 possible outcomes
const checkOutComes = () =>{
    checkWinner(currentPlayer, ...winningOutComes[0]);
    checkWinner(currentPlayer, ...winningOutComes[1]);
    checkWinner(currentPlayer, ...winningOutComes[2]);
    checkWinner(currentPlayer, ...winningOutComes[3]);
    checkWinner(currentPlayer, ...winningOutComes[4]);
    checkWinner(currentPlayer, ...winningOutComes[5]);
    checkWinner(currentPlayer, ...winningOutComes[6]);
    checkWinner(currentPlayer, ...winningOutComes[7]);

    //if game ends in draw the end game function will pop up
    if(turn === 9 && winner === false){
        endGame();
        $('#draw').show();
    }
};

//function for start of the game
const startGame = () =>{
    console.log("Start Game!");
    console.log(turn++)
    currentPlayer = player1;
    console.log("currentPlayer");

    //change class of current player
    $(`#p1`).addClass("bg-primary border border-info");

    //show start alert
    $(`#start`).show();

$(`.box`).on('click', function(){
     $(`#start`).hide();

     $(this).text(currentPlayer);

     if(turn > 4){
        //check winner
        checkOutComes();
     }

     if(winner === false){

     if(currentPlayer === player1){
        currentPlayer = player2;
        console.log(turn++);
        $(`#p2`).addClass("bg-primary border border-info");
        $(`#p1`).removeClass("bg-primary border border-info");


     }else{
        currentPlayer = player1;
        console.log(turn++);
        $(`#p1`).addClass("bg-primary border border-info");
        $(`#p2`).removeClass("bg-primary border border-info");
     }
    }

    })

};

//start button
document.getElementById(`startBtn`).addEventListener('click',() => startGame());

//rest button 
document.getElementById(`restartBtn`).addEventListener('click',() => document.location.reload(true));




