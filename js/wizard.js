const btnRightSlider = document.getElementById('sas');
const paginationItem = document.querySelectorAll('.pagination__item');
const itemPaginationOne = document.querySelector('.pagination__item-one');
const itemPaginationTwo = document.querySelector('.pagination__item-two');
const itemPaginationThree = document.querySelector('.pagination__item-two');
const imgSliders = document.querySelector('.block-slider__img');
const blockTitle = document.querySelector('.block-header__title_width');
const blockSubtitle = document.querySelector('.block-header__subtitle_color');


const stepBlock = document.querySelector('.steps');
const btnRegistration = document.querySelector('.wrapper-btn__btn-login_reg');
const stepOneBlock = document.querySelector('.stepTwo');
const blockLogin = document.querySelector('.login');
const btnRegs = document.getElementById('bnt-regi');
const paginationStepOne = document.getElementById('stepTwo-right-btn');
const paginationStepTwo = document.getElementById('stepTwo-left-btn');
const blockStepThree = document.querySelector('.stepThree');
const rejectBtn = document.querySelector('.reject');
const btnLogin = document.getElementById('btn-login');
const btnBackStep = document.getElementById('btn-back-step');
const btnBackStepOne = document.getElementById('btn-back-stepOne');
const btnRegistrationId = document.getElementById('btn-registration');


btnBackStepOne.onclick = () => {
    stepOneBlock.style.display = 'none';
    rejectBtn.style.display = 'none';
    stepBlock.style.display = 'block';
}

btnRegs.onclick = () => {
    rejectBtn.style.display = 'block';
    stepBlock.style.display = 'none';
    stepOneBlock.style.display = 'block';
}

paginationStepOne.onclick = () => {

    paginationStepOne.style.backgroundColor = "#52c3ff";
    paginationStepTwo.style.backgroundColor = "#eaeaea";
    stepOneBlock.style.display = 'block';
    blockStepThree.style.display = 'none';

}

btnLogin.onclick = () => {
    paginationStepTwo.style.backgroundColor = "#52c3ff";
    paginationStepOne.style.backgroundColor = "#eaeaea";
    stepOneBlock.style.display = 'none';
    blockStepThree.style.display = 'block';
    btnLogin.style.display = 'none';
    btnRegistrationId.style.display = 'block';
}


paginationStepTwo.onclick = () => {
    paginationStepTwo.style.backgroundColor = "#52c3ff";
    paginationStepOne.style.backgroundColor = "#eaeaea";
    stepOneBlock.style.display = 'none';
    blockStepThree.style.display = 'block';
}

btnBackStep.onclick = () => {
    paginationStepOne.style.backgroundColor = "#52c3ff";
    paginationStepTwo.style.backgroundColor = "#eaeaea";
    stepOneBlock.style.display = 'block';
    blockStepThree.style.display = 'none';
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
        }



setInterval(f,3000)

const selectStudent = document.getElementById('radio-1');
const selectTeacher = document.getElementById('radio-2');

const registerUser = [
]

selectTeacher.onclick = (e) => {
    selectTeacher.style.borderColor = "#52c3ff"
    registerUser.push({type: e.target.name})
}


console.log(registerUser)