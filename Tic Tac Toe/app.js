const square = document.querySelectorAll('.box');
const reset = document.getElementById('btn');
const newbtn = document.getElementById('btn1');
const message = document.querySelector('#msg1');
const parabox = document.querySelector('.msg');

let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const Resetgame = () =>
{
    turn0 = true;
    enableboxes();
    parabox.classList.add ('hide');
}

square.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = 'O'
            turn0 = false;
        }

        else {
            box.innerText = 'X'
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes = () =>
{
    for (let box of square)
    {
        box.disabled = true;
    }
}

const enableboxes = () =>
{
    for (let box of square)
    {
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) =>
{
  message.innerText = `Congratulation You are Winner ${winner} `
  parabox.classList.remove('hide');
  disableboxes();
}

const checkwinner = () => {
    for (let pattern of winpatterns) {

        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(square[pattern[0]].innerText, square[pattern[1]].innerText, square[pattern[2]].innerText);
        let pos1 = square[pattern[0]].innerText;
        let pos2 = square[pattern[1]].innerText;
        let pos3 = square[pattern[2]].innerText;

        if(pos1!= "" && pos2!= "" && pos3!= "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                // console.log("winner",pos1);
                showWinner(pos1);
            }

            // else
            // {
            //     message.innerText = `Congratulation You are Winner ${winner} `
            // }
        }
    }
}
btn1.addEventListener('click',Resetgame);
reset.addEventListener('click',Resetgame);


