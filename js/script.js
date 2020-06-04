
/*ТОЧКИ ДЛЯ СЛАЙДЕРА на Jquery*/
$(function() {
class SiemaWithDots extends Siema {
      addDots() {
        /*кнопки для слайдера */
        document.querySelector('.slider__button--feedback-left').addEventListener('click', () => mySiemaWithDots.prev());
        document.querySelector('.slider__button--feedback-right').addEventListener('click', () => mySiemaWithDots.next());

        // create a contnier for all dots
        // add a class 'dots' for styling reason
        this.dots = document.createElement('div');
        this.dots.classList.add('slider__paginator', 'paginator');

        // loop through slides to create a number of dots
        for(let i = 0; i < this.innerElements.length; i++) {
          // create a dot
          const dot = document.createElement('button');

          // add a class to dot
          dot.classList.add('paginator__item');

          // add an event handler to each of them
          dot.addEventListener('click', () => {
            this.goTo(i);
          })

          // append dot to a container for all of them
          this.dots.appendChild(dot);
        }

        // add the container full of dots after selector
        this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
      }

      updateDots() {
        // loop through all dots
        for(let i = 0; i < this.dots.querySelectorAll('button').length; i++) {
          // if current dot matches currentSlide prop, add a class to it, remove otherwise
          const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
          this.dots.querySelectorAll('button')[i].classList[addOrRemove]('paginator__item--active');
        }
      }
    }

    // instantiate new extended Siema
    const mySiemaWithDots = new SiemaWithDots({

      // on init trigger method created above // на какой ширине сколько элементов
      perPage: {
          1201:3,
          320:1},
        loop: true,

      onInit: function(){
        this.addDots();
        this.updateDots();
      },

      // on change trigger method created above
      onChange: function(){
        this.updateDots()
      },
    });
  });



  //кнопки в хедере
  //кнопка 'подобрать' и 'примерить' и кнопка 'Отправить' в попапе
  let btnTryOn = document.querySelectorAll('.header-btn')
  let popupBG = document.querySelector('.popup-bg-deactive')
  let popupWindow = document.querySelector('.popup-window')
  let buttonSend = document.querySelector('.popup-call__button')
  let body = document.querySelector('body')

  for (var i = 0; i < btnTryOn.length; i++) {
    btnTryOn[i].addEventListener('click', ()=> {
        popupBG.classList.add('popup-bg')
        body.style.overflowY = 'hidden'
      }
    )
  }

  popupBG.addEventListener('click', (e)=> {
    if (e.target.className == 'popup-window' || e.target.className == 'popup-window__input' || e.target.className == 'popup-window__label') {
      return
    }
    popupBG.classList.remove('popup-bg')
    body.style.overflowY = 'auto'
    }
  )
