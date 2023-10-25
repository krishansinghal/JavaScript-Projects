const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    //generating random color.
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
let back;
let next;
let bcolor = document.querySelector('.colordiv');

//function for changing the color.
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);

    }

    function changeBgColor() {
        bcolor.style.backgroundColor = randomColor();
        //printing color name.
        back = randomColor();
        next = document.querySelector('.displaycolor');
        next.innerText = `The color is:- ${back}`;
    }

};


//function for stop the changing color.
const stopChangingColor = function () {
    clearInterval(intervalId);
    bcolor.style.backgroundColor = "";
    intervalId = null;
    next.innerText= '';
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
