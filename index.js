let togle = document.querySelector('.toogle');
let git = document.querySelector('#giticon');
let tg = document.querySelector('#tgicon');
let gm = document.querySelector('#gmicon');
let theme = document.body;
function toogle(){
    if(togle.id === 'moon'){
        togle.setAttribute('id', 'sun');
        togle.setAttribute('src', 'sun.svg');
        theme.classList.toggle("dark");
        tg.setAttribute('src', 'telegramwhite.svg');
        git.setAttribute('src', 'githubwhite.svg');
        gm.setAttribute('src', 'gmailwhite.svg');
    }
    else if(togle.id == 'sun'){
        togle.setAttribute('id', 'moon');
        togle.setAttribute('src', 'moon.svg');
        theme.classList.toggle('dark');
        tg.setAttribute('src', 'telegram.svg');
        git.setAttribute('src', 'github.png');
        gm.setAttribute('src', 'email.png');
    }
    else{
        return 0;
    }
}