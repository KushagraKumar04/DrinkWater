const smallCups = document.querySelectorAll('.small-cup');
const litres = document.getElementById('litres')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')

updateBigCup();

smallCups.forEach((cup, idx) => {

    cup.addEventListener('click', () => {highlightCups(idx)});
})

function highlightCups(idx) {

    if(idx === 7 && smallCups[idx].classList.contains('full') ) idx--;

    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) idx--;
   
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.small-cup.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility='hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility='visible';
        percentage.style.height = `${fullCups/totalCups * 330}px`;
        percentage.innerText= `${fullCups/totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility= 'hidden';
        remained.style.height = 0;
    }else{
         remained.style.visibility= 'visible';
         litres.innerText = `${5 - (250 * fullCups / 1000)}L`
    }
}