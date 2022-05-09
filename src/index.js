const Keyboard = {
  line1: [
    {
      code: 'Backquote', values: ['ё', 'Ё', '`', '~'], type: 'key',
    },
    {
      code: 'Digit1', values: ['1', '!', '1', '!'], type: 'key',
    },
    {
      code: 'Digit2', values: ['2', "'", '2', '@'], type: 'key',
    },
    {
      code: 'Digit3', values: ['3', '№', '3', '#'], type: 'key',
    },
    {
      code: 'Digit4', values: ['4', ';', '4', '$'], type: 'key',
    },
    {
      code: 'Digit5', values: ['5', '%', '5', '%'], type: 'key',
    },
    {
      code: 'Digit6', values: ['6', ':', '6', '^'], type: 'key',
    },
    {
      code: 'Digit7', values: ['7', '?', '7', '&'], type: 'key',
    },
    {
      code: 'Digit8', values: ['8', '*', '8', '*'], type: 'key',
    },
    {
      code: 'Digit9', values: ['9', '(', '9', '('], type: 'key',
    },
    {
      code: 'Digit0', values: ['0', ')', '0', ')'], type: 'key',
    },
    {
      code: 'Minus', values: ['-', '_', '-', '_'], type: 'key',
    },
    {
      code: 'Equal', values: ['=', '+', '=', '+'], type: 'key',
    },
    {
      code: 'Backspace', values: ['Backspace', 'Backspace', 'Backspace', 'Backspace'], type: 'key backspace',
    },
  ],
  line2: [
    {
      code: 'Tab', values: ['Tab', 'Tab', 'Tab', 'Tab'], type: 'key tab',
    },
    {
      code: 'KeyQ', values: ['й', 'Й', 'q', 'Q'], type: 'key',
    },
    {
      code: 'KeyW', values: ['ц', 'Ц', 'w', 'W'], type: 'key',
    },
    {
      code: 'KeyE', values: ['у', 'У', 'e', 'E'], type: 'key',
    },
    {
      code: 'KeyR', values: ['к', 'К', 'r', 'R'], type: 'key',
    },
    {
      code: 'KeyT', values: ['е', 'Е', 't', 'T'], type: 'key',
    },
    {
      code: 'KeyY', values: ['н', 'Н', 'y', 'Y'], type: 'key',
    },
    {
      code: 'KeyU', values: ['г', 'Г', 'u', 'U'], type: 'key',
    },
    {
      code: 'KeyI', values: ['ш', 'Ш', 'i', 'I'], type: 'key',
    },
    {
      code: 'KeyO', values: ['щ', 'Щ', 'o', 'O'], type: 'key',
    },
    {
      code: 'KeyP', values: ['з', 'З', 'p', 'P'], type: 'key',
    },
    {
      code: 'BracketLeft', values: ['х', 'Х', '[', '{'], type: 'key',
    },
    {
      code: 'BracketRight', values: ['ъ', 'Ъ', ']', ' }'], type: 'key',
    },
    {
      code: 'Backslash', values: ['\\', '/', '\\', '|'], type: 'key',
    },
    {
      code: 'Delete', values: ['DEL', 'DEL', 'DEL', 'DEL'], type: 'key del',
    },
  ],
  line3: [{
    code: 'CapsLock', values: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], type: 'key capslock',
  },
  {
    code: 'KeyA', values: ['ф', 'Ф', 'a', 'A'], type: 'key',
  },
  {
    code: 'KeyS', values: ['ы', 'Ы', 's', 'S'], type: 'key',
  },
  {
    code: 'KeyD', values: ['в', 'В', 'd', 'D'], type: 'key',
  },
  {
    code: 'KeyF', values: ['а', 'А', 'f', 'F'], type: 'key',
  },
  {
    code: 'KeyG', values: ['п', 'П', 'g', 'G'], type: 'key',
  },
  {
    code: 'KeyH', values: ['р', 'Р', 'h', 'H'], type: 'key',
  },
  {
    code: 'KeyJ', values: ['о', 'О', 'j', 'J'], type: 'key',
  },
  {
    code: 'KeyK', values: ['л', 'Л', 'k', 'K'], type: 'key',
  },
  {
    code: 'KeyL', values: ['д', 'Д', 'l', 'L'], type: 'key',
  },
  {
    code: 'Semicolon', values: ['ж', 'Ж', ';', ':'], type: 'key',
  },
  {
    code: 'Quote', values: ['э', 'Э', '\'', '\''], type: 'key',
  },
  {
    code: 'Enter', values: ['ENTER', 'ENTER', 'ENTER', 'ENTER'], type: 'key enter',
  },
  ],
  line4: [{
    code: 'ShiftLeft', values: ['Shift', 'Shift', 'Shift', 'Shift'], type: 'key shift',
  },
  {
    code: 'KeyZ', values: ['я', 'Я', 'z', 'Z'], type: 'key',
  },
  {
    code: 'KeyX', values: ['ч', 'Ч', 'x', 'X'], type: 'key',
  },
  {
    code: 'KeyC', values: ['с', 'С', 'c', 'C'], type: 'key',
  },
  {
    code: 'KeyV', values: ['м', 'М', 'v', 'V'], type: 'key',
  },
  {
    code: 'KeyB', values: ['и', 'И', 'b', 'B'], type: 'key',
  },
  {
    code: 'KeyN', values: ['т', 'Т', 'n', 'N'], type: 'key',
  },
  {
    code: 'KeyM', values: ['ь', 'Ь', 'm', 'M'], type: 'key',
  },
  {
    code: 'Comma', values: ['б', 'Б', ',', '<'], type: 'key',
  },
  {
    code: 'Period', values: ['ю', 'Ю', '.', '>'], type: 'key',
  },
  {
    code: 'Slash', values: ['.', ', ', '/', '?'], type: 'key',
  },
  {
    code: 'ArrowUp', values: ['▲', '▲', '▲', '▲'], type: 'key arrow',
  },
  {
    code: 'ShiftRight', values: ['Shift', 'Shift', 'Shift', 'Shift'], type: 'key shift-right',
  },
  ],
  line5: [{
    code: 'ControlLeft', values: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], type: 'key ctrl',
  },
  {
    code: 'MetaLeft', values: ['Win', 'Win', 'Win', 'Win'], type: 'key win',
  },
  {
    code: 'AltLeft', values: ['Alt', 'Alt', 'Alt', 'Alt'], type: 'key alt',
  },
  {
    code: 'Space', values: [' ', ' ', ' ', ' '], type: 'key space',
  },
  {
    code: 'AltRight', values: ['Alt', 'Alt', 'Alt', 'Alt'], type: 'key alt',
  },
  {
    code: 'ArrowLeft', values: ['◄', '◄', '◄', '◄'], type: 'key arrow',
  },
  {
    code: 'ArrowDown', values: ['▼', '▼', '▼', '▼'], type: 'key arrow',
  },
  {
    code: 'ArrowRight', values: ['►', '►', '►', '►'], type: 'key arrow',
  },
  {
    code: 'ControlRight', values: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], type: 'key ctrl',
  },
  ],
};

const activeKeys = new Set();
let capslock = false;

class VirtualKeyboard {
  static init() {
    const lang = (localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'ru';
    const wrapper = document.createElement('div');
    const input = document.createElement('textarea');
    const keyboardDiv = document.createElement('div');
    const changeCaseNotice = document.createElement('div');
    const windowsNotice = document.createElement('div');

    changeCaseNotice.className = 'case-notice';
    changeCaseNotice.innerHTML = 'Change language shift + alt';

    windowsNotice.className = 'windows-notice';
    windowsNotice.innerHTML = 'Keyboard was crated on windows os';

    wrapper.className = 'container';
    document.body.append(wrapper);
    wrapper.appendChild(changeCaseNotice);
    wrapper.appendChild(windowsNotice);

    input.setAttribute('cols', 50);
    input.setAttribute('rows', 6);
    wrapper.appendChild(input);
    keyboardDiv.className = 'keyboard';
    wrapper.appendChild(keyboardDiv);
    VirtualKeyboard.renderKeyBoard(Keyboard, lang, 'down');
  }

  static renderKey(key, lang = 'ru', casetype = 'down', activeKeysKey = '') {
    let keyType;

    if (lang === 'ru' && casetype === 'down') {
      keyType = 0;
    } else if (lang === 'ru' && casetype === 'up') {
      keyType = 1;
    } else if (lang === 'en' && casetype === 'down') {
      keyType = 2;
    } else {
      keyType = 3;
    }

    const wrapper = document.createElement('div');

    wrapper.className = key.type;

    if (activeKeysKey.indexOf(key.code) !== -1) {
      wrapper.className += ' pressed';
    }

    wrapper.innerHTML = `<span data-code="${key.code}" class='case ${casetype}'>${key.values[keyType]}</span>`;

    return wrapper;
  }

  static renderKeyBoard(keyboard, lang, caseType, activeKeysKey = '') {
    document.querySelector('div.keyboard').innerHTML = '';
    Object.keys(keyboard).forEach((key) => {
      const line = document.createElement('div');
      line.className = 'row';
      document.querySelector('div.keyboard').appendChild(line);
      for (let i = 0; i < keyboard[key].length; i += 1) {
        line.appendChild(this.renderKey(keyboard[key][i], lang, caseType, activeKeysKey));
      }
    });
  }

  static updateTextAction(value) {
    const textarea = document.querySelector('textarea');
    const lang = (localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'ru';
    let keyboardCapsCase;
    let keyboardShiftCase;
    let keyboardShiftPressed;
    let keboardSymbol;

    switch (value) {
      case 'ControlRight':
      case 'ControlLeft':
      case 'AltRight':
      case 'AltLeft':
      case 'MetaLeft':
        break;
      case 'Delete':
        VirtualKeyboard.typeInTextarea('', textarea, -1);
        break;
      case 'CapsLock':
        if (capslock) {
          keyboardCapsCase = 'down';
        } else {
          keyboardCapsCase = 'up';
        }

        VirtualKeyboard.renderKeyBoard(Keyboard, lang, keyboardCapsCase, value);
        capslock = !capslock;
        break;
      case 'Tab':
        VirtualKeyboard.typeInTextarea('\t', textarea);
        break;
      case 'Backspace':
        VirtualKeyboard.typeInTextarea('', textarea);
        break;
      case ' ':
        VirtualKeyboard.typeInTextarea(' ', textarea);
        break;
      case 'Enter':
        VirtualKeyboard.typeInTextarea('\n', textarea);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (capslock) {
          keyboardShiftCase = 'down';
          keyboardShiftPressed = `${value} CapsLock`;
        } else {
          keyboardShiftCase = 'up';
          keyboardShiftPressed = value;
        }
        VirtualKeyboard.renderKeyBoard(Keyboard, lang, keyboardShiftCase, keyboardShiftPressed);
        break;
      default:
        Object.keys(Keyboard).forEach((el) => {
          const keyboardLine = Keyboard[el];
          for (let i = 0; i < keyboardLine.length; i += 1) {
            const keyboardKey = keyboardLine[i];
            if (value === keyboardKey.code) {
              if (((!activeKeys.has('ShiftLeft') && !activeKeys.has('ShiftRight')) && capslock) || ((activeKeys.has('ShiftLeft') || activeKeys.has('ShiftRight')) && !capslock)) {
                keboardSymbol = (lang === 'en') ? keyboardKey.values[3] : keyboardKey.values[1];
              } else if (((!activeKeys.has('ShiftLeft') && !activeKeys.has('ShiftRight')) && !capslock) || (((activeKeys.has('ShiftLeft') || activeKeys.has('ShiftRight')) && capslock))) {
                keboardSymbol = (lang === 'en') ? keyboardKey.values[2] : keyboardKey.values[0];
              }
              VirtualKeyboard.typeInTextarea(keboardSymbol, textarea);
            }
          }
        });
        break;
    }
  }

  static typeInTextarea(newText, $element, delettionType = 1) {
    const start = $element.selectionStart;
    const end = $element.selectionEnd;
    const text = $element.value;
    let before = '';
    let after = '';

    if (newText.length === 0) {
      const deletionStart = (start === end && delettionType === 1) ? 1 : 0;
      const deletionEnd = (start === end && delettionType === -1) ? 1 : 0;

      before = text.substring(0, start - deletionStart);
      after = text.substring(end + deletionEnd, text.length);
      $element.value = before + after;
      if (start >= 1) {
        $element.selectionStart = start - deletionStart + newText.length;
        $element.selectionEnd = start - deletionStart + newText.length;
      } else {
        $element.selectionStart = 0;
        $element.selectionEnd = 0;
      }
    } else {
      before = text.substring(0, start);
      after = text.substring(end, text.length);
      $element.value = before + newText + after;
      $element.selectionStart = start + newText.length;
      $element.selectionEnd = start + newText.length;
    }
    $element.focus();
  }

  static focusTextarea() {
    document.querySelector('textarea').focus();
  }
}

const VKeyboard = new VirtualKeyboard();
VKeyboard.constructor.init();

'load keyup keydown'.split(' ').forEach((e) => {
  window.addEventListener(e, VirtualKeyboard.focusTextarea, false);
});

window.addEventListener('keydown', (event) => {
  event.preventDefault();

  let lang = localStorage.getItem('lang');

  activeKeys.add(event.code);
  if ((activeKeys.has('ShiftLeft') && activeKeys.has('AltLeft')) || (activeKeys.has('ShiftRight') && activeKeys.has('AltRight'))) {
    lang = (lang === 'en') ? 'ru' : 'en';
    localStorage.setItem('lang', lang);
    VKeyboard.constructor.renderKeyBoard(Keyboard, lang, 'down');
  }

  VKeyboard.constructor.updateTextAction(event.code);

  const currentKey = document.querySelector(`[data-code=${event.code}]`);
  if (currentKey) {
    const currentKeyParent = currentKey.parentNode;
    if (currentKeyParent.className.indexOf('pressed') === -1) {
      currentKeyParent.className += ' pressed';
    }
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  const lang = localStorage.getItem('lang');
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    const keyboardShiftCase = (capslock) ? 'up' : 'down';
    const keyboardShiftPressed = (capslock) ? 'Shift CapsLock' : 'Shift';
    VKeyboard.constructor.renderKeyBoard(Keyboard, lang, keyboardShiftCase, keyboardShiftPressed);
  }

  if ((event.code !== 'ShiftLeft' && event.code !== 'ShiftRight') && (activeKeys.has('ShiftLeft') || activeKeys.has('ShiftRight'))) {
    activeKeys.clear();
    activeKeys.add('ShiftLeft');
  } else {
    activeKeys.clear();
  }

  if (((event.code === 'CapsLock' || event.code === 'LeftShift') && !capslock) || (event.code !== 'CapsLock')) {
    const currentKey = document.querySelector(`[data-code=${event.code}]`);
    if (currentKey) {
      const currentKeyParent = currentKey.parentNode;
      currentKey.parentNode.className = currentKeyParent.className.replace(' pressed', '');
    }
  }
});

document.addEventListener('mousedown', (event) => {
  if (event.target.parentNode.className.indexOf('key') !== -1 && event.target.className.indexOf('keyboard') === -1 && event.target.className.indexOf('row') === -1) {
    const currentKey = event.target;
    if (currentKey) {
      const currentKeyParent = currentKey.parentNode;
      if (currentKeyParent.className.indexOf('pressed') === -1) {
        currentKeyParent.className += ' pressed';
      }
    }

    VKeyboard.constructor.updateTextAction(event.target.dataset.code);
  }
});

document.addEventListener('mouseup', (event) => {
  event.preventDefault();

  const lang = localStorage.getItem('lang');
  if (event.target.parentNode.className.indexOf('key') !== -1 && event.target.className.indexOf('keyboard') === -1 && event.target.className.indexOf('row') === -1) {
    if (event.target.dataset.code === 'ShiftLeft' || event.target.dataset.code === 'ShiftRight') {
      const keyboardShiftCase = (capslock) ? 'up' : 'down';
      const keyboardShiftPressed = (capslock) ? `${event.target.dataset.code} CapsLock` : event.target.dataset.code;
      VKeyboard.constructor.renderKeyBoard(Keyboard, lang, keyboardShiftCase, keyboardShiftPressed);
    }

    if (event.target.innerText !== 'Shift' && activeKeys.has('Shift')) {
      activeKeys.clear();
      activeKeys.add('Shift');
    } else {
      activeKeys.clear();
    }

    if (((event.target.dataset.code === 'CapsLock' || event.target.dataset.code === 'LeftShift') && !capslock) || (event.target.dataset.code !== 'CapsLock')) {
      const currentKey = document.querySelector(`[data-code=${event.target.dataset.code}]`);
      const currentKeyParent = currentKey.parentNode;
      currentKey.parentNode.className = currentKeyParent.className.replace(' pressed', '');
    }
  }
});
