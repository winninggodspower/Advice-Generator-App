const MobilePlayBtn = './images/pattern-divider-mobile.svg';
const DesktopPlayBtn = './images/pattern-divider-desktop.svg';
const PlayBtnImg = document.getElementById('play-btn')

const Dice = document.querySelector('span.dice')
const AdviceText = document.querySelector('div.advice-text')

// changing the play icon on small screen
// mediaQueries
enquire.register("screen and (max-width: 450px)", {
    match: function(){
        PlayBtnImg.setAttribute('src',MobilePlayBtn)
    },
    unmatch: function(){
        PlayBtnImg.setAttribute('src',DesktopPlayBtn)
    }
})

// adding new quote on btn click
function getAdvice() {
    fetch('https://api.adviceslip.com/advice', {method: 'GET'})
    .then(response => {
       return response.json()
    })
    .then(data => {
        const Adviceobj = data.slip;
        AdviceText.innerHTML = Adviceobj.advice;
    })
    .catch(error => {
        console.log(error);
        alert('unable to fetch quotes. check your internet connection')
    })
}
window.onload = getAdvice
Dice.addEventListener('click', getAdvice)
