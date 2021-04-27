let word = document.querySelector('.word');

let italicStyle = document.querySelector('#btnItalic');
let boldStyle = document.querySelector('#btnBold');
let colorStyle = document.querySelector('#btnColor');
let Size = document.querySelector('#btnSize');

/* Italic style */
italicStyle.addEventListener('click', function() {
    word.classList.toggle('italic');
});

/*Bold style */
boldStyle.addEventListener('click', function() {
    word.classList.toggle('bold');
});

/* --- Style Color --- */

let temp = 1;
colorStyle.addEventListener('click', function() {
    if(temp == 1) {
        word.classList.add('red');
        colorStyle.classList.add('red');
        this.innerHTML = 'Red';
        temp++;
    }
    else if(temp == 2) {
        word.classList.remove('red');
        colorStyle.classList.remove('red');
        this.innerHTML = 'Green';
        word.classList.add('green');
        colorStyle.classList.add('green');
        temp++;
    }
    else if(temp == 3) {
        word.classList.remove('green');
        colorStyle.classList.remove('green');
        this.innerHTML = 'Blue';
        word.classList.add('blue');
        colorStyle.classList.add('blue');
        temp=0;
    }
    else if(temp == 0) {
        word.classList.remove('blue');
        colorStyle.classList.remove('blue');
        this.innerHTML = 'Black';
        temp++;
    }
});

/* ./--- Style Color --- */

/* --- Size text ---- */

let count = 1;
Size.addEventListener('click', function() {
    if(count == 1) {
        word.style.fontSize = '28px';
        this.innerHTML = '28px';
        count++;
    }
    else if(count == 2) {
        word.style.fontSize = '36px';
        this.innerHTML = '36px';
        count++;
    }
    else if(count == 3) {
        word.style.fontSize = '72px';
        this.innerHTML = '72px';
        count=0;
    }
    else if(count == 0) {
        word.style.fontSize = '12px';
        this.innerHTML = '12px';
        count++;
    }
});

/* ./--- Size text ---- */