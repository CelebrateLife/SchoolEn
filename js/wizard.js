const btnRightSlider = document.querySelector('.btn-slider__right');
const paginationItem = document.querySelectorAll('.pagination__item');
const itemPaginationOne = document.querySelector('.pagination__item-one');
const itemPaginationTwo = document.querySelector('.pagination__item-two');
const itemPaginationThree = document.querySelector('.pagination__item-two');
const imgSliders = document.querySelector('.block-slider__img');
const blockTitle = document.querySelector('.block-header__title_width');
const blockSubtitle = document.querySelector('.block-header__subtitle_color');
const paginationStepOne = document.querySelector('.pagination__item_steps-one')
const paginationStepTwo = document.querySelector('.pagination__item_steps-two')


paginationStepOne.onclick = () => {
    paginationStepOne.style.backgroundColor = '#52c3ff';
    paginationStepTwo.style.backgroundColor = 'lavender';
}

paginationStepTwo.onclick = () => {
    paginationStepTwo.style.backgroundColor = '#52c3ff';
    paginationStepOne.style.backgroundColor = 'lavender';
}

const objTitleSubtitne = {
    titleZero: 'Занятия с персональным наставником',
    subtitleZero: 'Вы можете легко связаться с тысячами репетиторов, используя нашу платформу.',
    titleOne: 'Гибкое расписание. Удобно заниматься.',
    subtitleOne: 'Нет никакого установленного расписания. Ты учишься тогда, когда хочешь.',
    titleTwo: 'Заходи скорей. Об остальном мы уже побеспокоились',
    subtitleTwo: 'Наша система обучения позволяем овладеть английским не выходя из дома'
}


const updatePagination = Array.from(paginationItem);

let i = 0;
let iMinus = 0;

const f = btnRightSlider.onclick = () => {
    updatePagination[i].classList.remove('active');
    if(i === 0) {
        imgSliders.setAttribute('src', '../img/spinner1.svg')
        blockTitle.innerHTML = objTitleSubtitne.titleZero;
        blockSubtitle.innerHTML = objTitleSubtitne.subtitleZero;
    } else if(i === 1) {
        imgSliders.setAttribute('src', '../img/spinner2.svg');
        blockTitle.innerHTML = objTitleSubtitne.titleOne;
        blockSubtitle.innerHTML = objTitleSubtitne.subtitleOne;
    } else if(i === 2) {
        imgSliders.setAttribute('src', '../img/spinner3.svg');
        blockTitle.innerHTML = objTitleSubtitne.titleTwo;
        blockSubtitle.innerHTML = objTitleSubtitne.subtitleTwo;
    }
    i+=1;
    if(i === 3) {
        i = 0;
    }
    updatePagination[i].classList.add('active');
    console.log('click');
}






setInterval(f,4000)

