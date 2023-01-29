import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { initAccordion } from './modules/accordions';
//  Скрипты должны лежать в папке modules, а не modals
// Каждая задача должна быть в отдельном модуле
// import './modules/modals/button-hidden';
// import './modules/modals/phone-mask';
import { initMask } from './modules/phone-mask';
import { initTextShow } from './modules/button-hidden';

// В файле main не должно быть ни какого кода, только подключение модулей. Так же внимательно читаем комментарии которые были в изначальной сборке, в них как раз было написано про data атрибуты

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initMask();
    initTextShow();
    initAccordion();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

