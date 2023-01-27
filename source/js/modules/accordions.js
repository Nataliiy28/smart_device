const Accordions = (function () {
  const closeOthers = function (current, parent) {
    // получить все открытые элементы внутри контейнера
    let opened = Array.from(parent.querySelectorAll('.accordion__sections[open]'));
    // закрыть все, кроме того, который должен остаться открытым
    opened.forEach(function (accordion) {
      if (accordion === current) {
        return;
      }
      accordion.removeAttribute('open');
    });
  };

  const toggle = function (event, selector) {
    // запускается только для аккордиона внутри селектора
    let parent = event.target.closest(selector);
    if (!parent) {
      return;
    }
    // запускать только если аккордион раскрыт
    if (!event.target.hasAttribute('open')) {
      return;
    }
    // свернуть все остальные элементы аккордиона
    closeOthers(event.target, parent);
  };

  const Constructor = function (selector) {
    const publicAPIs = {};
    const toggleHandler = function (event) {
      toggle(event, selector);
    };
    publicAPIs.destroy = function () {
      document.removeEventListener('toggle', toggleHandler, true);
    };
    publicAPIs.init = function () {
      if (!selector || typeof selector !== 'string') {
        throw new Error('Please provide a valid selector');
      }
      document.addEventListener('toggle', toggleHandler, true);
    };
    publicAPIs.init();
    return publicAPIs;
  };
  return Constructor;
}
)();

export const initAccordion = function () {

  if (document.documentElement.clientWidth > 767) {
    const sunmaryAccord = document.querySelectorAll('[data-accordion-title]');
    sunmaryAccord.forEach(item => {
      item.setAttribute('tabindex', -1);
    });
  };
  // инициализация плагина
  if (document.documentElement.clientWidth < 768) {
    // получить все открытые элементы внутри контейнера
    let opened = Array.from(document.querySelectorAll('.accordion__sections[open]'));
    if (opened) {
      opened.forEach(function (item) {
        item.removeAttribute('open');
      });
    }
    const accordionSection = new Accordions('[data-accordion]');
  }
};
