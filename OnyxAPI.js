// Simple alert
function OnyxAlert(alt) {
    // Parent creation
    const parent = document.createElement('div');
    document.body.appendChild(parent);
    parent.classList.add('onyx-lib-alert');

    // Parent style
    parent.style.fontFamily = 'Segoe UI';
    parent.style.background = '#121212';
    parent.style.width = '25rem';
    parent.style.height = '15rem';
    parent.style.position = 'absolute';
    parent.style.top = '32%';
    parent.style.left = '35.5%';
    parent.style.borderRadius = '8px';
    parent.style.padding = '5px 22px';

    // Title of the panel
    const title = document.createElement('h2');
    title.classList.add('onyx-lib-title');
    document.querySelector('.onyx-lib-alert').appendChild(title);
    title.innerHTML = alt;

    // Button of the panel
    const btn = document.createElement('button');
    document.querySelector('.onyx-lib-alert').appendChild(btn);
    btn.classList.add('onyx-lib-btn');
    btn.innerHTML = 'OK';

    btn.addEventListener('click', () => {
        parent.remove();
    });

    // Button style
    btn.style.fontFamily = 'Segoe UI';
    btn.style.background = '#1e1e1e';
    btn.style.outline = 'none';
    btn.style.border = 'none';
    btn.style.padding = '10px';
    btn.style.borderRadius = '5px';
    btn.style.cursor = 'pointer';
    btn.style.position = 'absolute';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.transition = 'background 200ms ease-in-out';

    // Button mouse-hover
    btn.onmouseover = function () {
        btn.style.background = '#2b2b2b';
    }
    btn.onmouseleave = function () {
        btn.style.background = '#1e1e1e';
    }
}

// Simple Prompt
function OnyxPrompt(pmt, ipt) {
    // Parent creation
    const parent = document.createElement('div');
    document.body.appendChild(parent);
    parent.classList.add('onyx-lib-prompt');

    // Parent style
    parent.style.fontFamily = 'Segoe UI';
    parent.style.background = '#121212';
    parent.style.width = '25rem';
    parent.style.height = '15rem';
    parent.style.position = 'absolute';
    parent.style.top = '32%';
    parent.style.left = '35.5%';
    parent.style.borderRadius = '8px';
    parent.style.padding = '5px 22px';

    // Title of the panel
    const title = document.createElement('h2');
    title.classList.add('onyx-lib-title');
    document.querySelector('.onyx-lib-prompt').appendChild(title);
    title.innerHTML = pmt;

    // Creates text input
    const _input = document.createElement('input');
    _input.classList.add('onyx-lib-input');
    document.querySelector('.onyx-lib-prompt').appendChild(_input);
    _input.placeholder = 'Type...';
    _input.value = ipt;

    // Text input style
    _input.style.fontFamily = 'Segoe UI';
    _input.style.outline = 'none';
    _input.style.border = 'none';
    _input.style.borderRadius = '5px';
    _input.style.padding = '5px';

    // Button of the panel
    const btn = document.createElement('button');
    document.querySelector('.onyx-lib-prompt').appendChild(btn);
    btn.classList.add('onyx-lib-btn');
    btn.innerHTML = 'OK';

    btn.addEventListener('click', () => {
        parent.remove();
    });

    // Button style
    btn.style.fontFamily = 'Segoe UI';
    btn.style.background = '#1e1e1e';
    btn.style.outline = 'none';
    btn.style.border = 'none';
    btn.style.padding = '10px';
    btn.style.borderRadius = '5px';
    btn.style.cursor = 'pointer';
    btn.style.position = 'absolute';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.transition = 'background 200ms ease-in-out';

    // Button mouse-hover
    btn.onmouseover = function () {
        btn.style.background = '#2b2b2b';
    }
    btn.onmouseleave = function () {
        btn.style.background = '#1e1e1e';
    }
}

// Creates elements
function OnyxCreateElement(type, parent, classy, ih, ph) {
    const customElmt = document.createElement(type);
    customElmt.classList.add(classy);
    document.querySelector(parent).appendChild(customElmt);
    customElmt.innerHTML = ih;
    customElmt.style.fontFamily = 'Segoe UI';
    customElmt.placeholder = ph;
}

// Custom console print
function OnyxPrint(print, style) {
    console.log(`%c${print}`, style);
}

// Message from the bottom
function OnyxToast(text) {
    // Toast Creation
    const toast = document.createElement('div');
    document.body.appendChild(toast);
    toast.innerHTML = text;

    // Toast style
    toast.style.fontFamily = 'Segoe UI';
    toast.style.background = '#1e1e1e';
    toast.style.width = 'min-content';
    toast.style.padding = '8px';
    toast.style.borderRadius = '5px';
    toast.style.cursor = 'default';
    toast.style.position = 'absolute';
    toast.style.bottom = '60px';
    toast.style.left = '48.2%';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 200ms ease-in-out, bottom 200ms ease-in-out';

    // Toast show up
    setTimeout(() => {
        toast.style.bottom = '80px';
        toast.style.opacity = '1';
    });

    // Toast hide out
    setTimeout(() => {
        toast.style.bottom = '100px';
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 1501);
    }, 1500);
}