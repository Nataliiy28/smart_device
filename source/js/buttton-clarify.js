// let buttonClarify = document.getElementsByClassName('about-company__button');
// for (var i=0; i < buttonClarify.length; ++i) {
//     buttonClarify[i].onclick = function () {
//         var child = this.childNodes;
//         for (var cI in child) {
//             console.log(child[cI])
//             if (child[cI].className == 'content') {
//                 var d = child[cI].style.display;
//                 child[cI].style.display = d === 'block' ? 'none' : 'block';
//             }
//         }
//     }
// }
//-----------------------------------кнопка подробнее

const button = document.querySelector('.about-company__button');
const youdiv = document.querySelector('.about-company__text-detalied');
button.addEventListener('click', function () {
  youdiv.style.display = youdiv.style.display === 'none' ? 'block' : 'none';
});

//----------------------------------смена текста в кнопке подробнее-свернуть
const btn = document.querySelector('.about-company__button');
btn.addEventListener('click', function () {
  btn.innerHTML =
    (btn.innerHTML === 'Подробнее') ? btn.innerHTML = 'Скрыть всё' : btn.innerHTML = 'Свернуть';
})
