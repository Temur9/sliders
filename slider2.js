//************************----------------- */ #1 slider

let images = document.querySelector('.images');

let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');

let img = document.querySelectorAll('#img')

let index = 0;

const changeImages = () => {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }
    images.style.transform = `translate(${-index*700}px)`
}


const runSlide = () => {
    index++
    changeImages()
}
let interval = setInterval(runSlide, 2000)

const resetInterval = () => {
    clearInterval(interval)

    interval = setInterval(runSlide, 2000)
}

nextBtn.addEventListener('click', () => {
    index++
    resetInterval()
    changeImages()
})
prevBtn.addEventListener('click', () => {
    index--
    resetInterval()
    changeImages()
})

//***********************--------------*/ #2 slider with tabs

const slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slide'),
    nextBtn2 = document.querySelector('#next'),
    prevBtn2 = document.querySelector('#prev'),
    numbersSlider = document.querySelector('.numbers'),
    numbers = document.querySelectorAll('span')

let index2 = 0
numbers[index2].classList.add('active')

function changeSlide() {
    if (index2 === slide.length) {
        index2 = 0
    } else if (index2 < 0) {
        index2 = slide.length - 1
    }
    numbers.forEach((item, id) => {
        if (index2 === id) {
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
    slides.style.transform = `translateX(${-index2*700}px)`
}

function tabSlider(idx = 0) {
    index2 = idx
    resetInterval2(interval2)
    slides.style.transform = `translateX(${-index2*700}px)`
    numbers.forEach((item, id) => {
        if (index2 === id) {
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
    

}

function nextSlide() {
    index2++
    resetInterval2()
    changeSlide()

}

function prevSlide() {
    index2--
    resetInterval2()
    changeSlide()
}

nextBtn2.addEventListener('click', nextSlide)
prevBtn2.addEventListener('click', prevSlide)

let interval2 = setInterval(nextSlide, 3000)

function resetInterval2() {
    clearInterval(interval2)
    interval2 = setInterval(nextSlide, 3000)
}

numbersSlider.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('number')) {
        numbers.forEach((item, idx) => {
            if (e.target == item) {
                tabSlider(idx)
            }
        })
    }
})