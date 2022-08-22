
let screen = document.getElementById("screen");

let btns = document.getElementById("buttons");

function clickEvnt(val) {
    if (screen.value.length < 15) {
       let num = val;
       if(/[+.\/*-]$/.test(screen.value) && /[+.\/*-]/.test(num)) {
           screen.value = (screen.value + "");
       } else {
       screen.value = (screen.value + num);
       }
    } else {
        screen.value = (screen.value + "");
    };

};

function result() {
  return screen.value = eval(screen.value);
};

document.addEventListener('keydown', (ev) => {
    let key = ev.code;
    if(key === "Backspace" || key === "Delete") {
        let w = screen.value;
       return screen.value = w.substr(0,w.length - 1);
    }
});
 
