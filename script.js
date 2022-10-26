// Slider
const swiper = new Swiper(".slider-main-block", {
  // Optional parameters
  loop: true,
// autoplay
autoplay: {
deplay: 10000,
},
  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },
});

/* ============================== */

// Таби
const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item_tabs");
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest(".tabs-deals__button")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index;
        tabNavItem.classList.remove("active");
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});

/* ============================== */

// Відправка форми у телеграм

const TOKEN = '5513962657:AAFqDfBgMa_oWtyXOtz2RtLpESrjy4_2T_0';
const CHAT_ID ='-1001608351723';
const URI_API =`https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('tg_message').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let message = `<b>Заява із сайту! </b>\n`
  message += `<b>Номер телефону: </b> ${ this.phone.value } \n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    this.phone.value = '';
  })

  .catch((err) => {
    console.warn(err);
  })

  .finally(() => {
    console.log('final');
  })
})

// alert при нажатті на кнопку - відправити телефон

document.getElementById('button_phone').onclick = function(){
  alert('Заявку відправлено! Ми Вам зателефонуємо найближчим часом')
}
