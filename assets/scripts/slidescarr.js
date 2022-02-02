(function() {

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;


        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('testimony__body--show');

    }

})();

(function() {

    const sliders2 = [...document.querySelectorAll('.testimony__body2')];
    const buttonNext2 = document.querySelector('#next2');
    const buttonBefore2 = document.querySelector('#before2');
    let value2;

    buttonNext2.addEventListener('click', () => {
        changePosition2(1);
    });

    buttonBefore2.addEventListener('click', () => {
        changePosition2(-1);
    });

    const changePosition2 = (add) => {
        const currentTestimony2 = document.querySelector('.testimony__body--show2').dataset.id2;
        value2 = Number(currentTestimony2);
        value2 += add;


        sliders2[Number(currentTestimony2) - 1].classList.remove('testimony__body--show2');
        if (value2 === sliders2.length + 1 || value2 === 0) {
            value2 = value2 === 0 ? sliders2.length : 1;
        }

        sliders2[value2 - 1].classList.add('testimony__body--show2');

    }

})();

(function() {

    const sliders4 = [...document.querySelectorAll('.testimony__body4')];
    const buttonNext4 = document.querySelector('#next4');
    const buttonBefore4 = document.querySelector('#before4');
    let value4;

    buttonNext4.addEventListener('click', () => {
        changePosition4(1);
    });

    buttonBefore4.addEventListener('click', () => {
        changePosition4(-1);
    });

    const changePosition4 = (add) => {
        const currentTestimony4 = document.querySelector('.testimony__body--show4').dataset.id4;
        value4 = Number(currentTestimony4);
        value4 += add;


        sliders4[Number(currentTestimony4) - 1].classList.remove('testimony__body--show4');
        if (value4 === sliders4.length + 1 || value4 === 0) {
            value4 = value4 === 0 ? sliders4.length : 1;
        }

        sliders4[value4 - 1].classList.add('testimony__body--show4');

    }

})();