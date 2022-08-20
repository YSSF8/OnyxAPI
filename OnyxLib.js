// Simple alert box
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
    parent.style.color = '#fff';
    parent.style.transform = 'scale(0)';
    parent.style.transition = 'transform 200ms ease-in-out';

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

    // Appearing transition
    setTimeout(() => {
        parent.style.transform = 'scale(1)';
    });

    // Removes the alert after clicking "OK"
    btn.addEventListener('click', () => {
        parent.style.transform = 'scale(0)';
        setTimeout(() => {
            parent.remove();
        }, 201);
    });

    // Button style
    btn.style.fontFamily = 'Segoe UI';
    btn.style.background = '#1e1e1e';
    btn.style.outline = 'none';
    btn.style.border = 'none';
    btn.style.color = '#fff';
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

// Simple prompt box
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
    parent.style.color = '#fff';
    parent.style.top = '32%';
    parent.style.left = '35.5%';
    parent.style.borderRadius = '8px';
    parent.style.padding = '5px 22px';
    parent.style.transform = 'scale(0)';
    parent.style.transition = 'transform 200ms ease-in-out';

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
    _input.style.color = '#fff';
    _input.style.background = '#1e1e1e';

    if (_input.value == 'undefined') {
        _input.value = '';
    }

    // Button of the panel
    const btn = document.createElement('button');
    document.querySelector('.onyx-lib-prompt').appendChild(btn);
    btn.classList.add('onyx-lib-btn');
    btn.innerHTML = 'OK';

    // Appearing transition
    setTimeout(() => {
        parent.style.transform = 'scale(1)';
    });

    // Removes the prompt after clicking "OK"
    btn.addEventListener('click', () => {
        parent.style.transform = 'scale(0)';
        setTimeout(() => {
            parent.remove();
        }, 201);
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
    btn.style.color = '#fff';
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

// Simpte confirm box
function OnyxConfirm(alt) {
    // Parent creation
    const parent = document.createElement('div');
    parent.classList.add('onyx-lib-confirm');
    document.body.appendChild(parent);

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
    parent.style.color = '#fff';
    parent.style.transform = 'scale(0)';
    parent.style.transition = 'transform 200ms ease-in-out';

    // Title creation
    const title = document.createElement('h2');
    title.classList.add('onyx-lib-title');
    document.querySelector('.onyx-lib-confirm').appendChild(title);
    title.innerHTML = alt;

    // OK Button of the panel
    const okBtn = document.createElement('button');
    document.querySelector('.onyx-lib-confirm').appendChild(okBtn);
    okBtn.classList.add('onyx-lib-btn');
    okBtn.innerHTML = 'OK';

    // OK Button style
    okBtn.style.fontFamily = 'Segoe UI';
    okBtn.style.background = '#1e1e1e';
    okBtn.style.outline = 'none';
    okBtn.style.border = 'none';
    okBtn.style.color = '#fff';
    okBtn.style.padding = '10px';
    okBtn.style.borderRadius = '5px';
    okBtn.style.cursor = 'pointer';
    okBtn.style.position = 'absolute';
    okBtn.style.bottom = '20px';
    okBtn.style.right = '20px';
    okBtn.style.transition = 'background 200ms ease-in-out';

    // OK Button mouse-hover
    okBtn.onmouseover = function () {
        okBtn.style.background = '#2b2b2b';
    }
    okBtn.onmouseleave = function () {
        okBtn.style.background = '#1e1e1e';
    }

    // Cancel Button of the panel
    const cBtn = document.createElement('button');
    document.querySelector('.onyx-lib-confirm').appendChild(cBtn);
    cBtn.classList.add('onyx-lib-btn');
    cBtn.innerHTML = 'Cancel';

    // OK Button style
    cBtn.style.fontFamily = 'Segoe UI';
    cBtn.style.background = '#1e1e1e';
    cBtn.style.outline = 'none';
    cBtn.style.border = 'none';
    cBtn.style.color = '#fff';
    cBtn.style.padding = '10px';
    cBtn.style.borderRadius = '5px';
    cBtn.style.cursor = 'pointer';
    cBtn.style.position = 'absolute';
    cBtn.style.bottom = '20px';
    cBtn.style.right = '65px';
    cBtn.style.transition = 'background 200ms ease-in-out';

    // OK Button mouse-hover
    cBtn.onmouseover = function () {
        cBtn.style.background = '#2b2b2b';
    }
    cBtn.onmouseleave = function () {
        cBtn.style.background = '#1e1e1e';
    }

    // Appearing transition
    setTimeout(() => {
        parent.style.transform = 'scale(1)';
    });

    // Removes the confirm after clicking "OK"
    okBtn.addEventListener('click', () => {
        parent.style.transform = 'scale(0)';
        console.log('OK button pressed!');
        setTimeout(() => {
            parent.remove();
        }, 201);
    });

    // Removes the confirm after clicking "OK"
    cBtn.addEventListener('click', () => {
        console.log('Cancel button pressed!');
        parent.style.transform = 'scale(0)';
        setTimeout(() => {
            parent.remove();
        }, 201);
    });
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
    toast.style.width = 'max-content';
    toast.style.padding = '8px';
    toast.style.borderRadius = '5px';
    toast.style.cursor = 'default';
    toast.style.position = 'absolute';
    toast.style.bottom = '60px';
    toast.style.left = '47%';
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

// Message from the top
function OnyxNotice(text) {
    // Notice creation
    const nts = document.createElement('div');
    document.body.appendChild(nts);
    nts.innerHTML = text;
    nts.classList.add('onyx-lib-notice');

    // Notice style
    nts.style.fontFamily = 'Segoe UI';
    nts.style.background = '#1e1e1e';
    nts.style.padding = '8px 50px';
    nts.style.position = 'fixed';
    nts.style.width = '93.78%';
    nts.style.left = '0';
    nts.style.color = '#fff';
    nts.style.top = '-3rem';
    nts.style.transition = 'top 200ms ease-in-out';

    // Disappear button creation
    const da = document.createElement('div');
    document.querySelector('.onyx-lib-notice').appendChild(da);
    da.classList.add('onyx-lib-da-notice');
    da.innerHTML = 'X';

    // Disappear button style
    da.style.fontFamily = 'Comic Sans MS';
    da.style.float = 'right';
    da.style.cursor = 'pointer';

    // Appearing transition
    setTimeout(() => {
        nts.style.top = '0';
    });

    // Click event to the disappear button
    da.addEventListener('click', () => {
        // Makes the notice go back to the top
        nts.style.top = '-3rem';

        // Removes the element
        setTimeout(() => {
            nts.remove();
        }, 201);
    });
}

// Message from the bottom, right
function OnyxSysNotif(title, ncontent) {
    // System Notification creation
    const wn = document.createElement('div');
    document.body.appendChild(wn);
    wn.classList.add('onyx-lib-sysnotif');

    // Header creation
    const header = document.createElement('div');
    document.querySelector('.onyx-lib-sysnotif').appendChild(header);
    header.innerHTML = title;
    header.style.fontSize = '20px';
    const br = document.createElement('br')
    document.querySelector('.onyx-lib-sysnotif').appendChild(br);

    // System Notification style
    wn.style.fontFamily = 'Segoe UI';
    wn.style.position = 'fixed';
    wn.style.background = '#1e1e1e';
    wn.style.padding = '10px';
    wn.style.borderRadius = '8px';
    wn.style.bottom = '20px';
    wn.style.right = '-25rem';
    wn.style.color = '#fff';
    wn.style.transition = 'right 200ms ease-in-out';

    // Appearing transition
    setTimeout(() => {
        wn.style.right = '20px';
    });

    // Remove the notification
    function Remove() {
        wn.style.right = '-25rem';
        setTimeout(() => {
            wn.remove();
        }, 201);
    }

    // Removes the notification after 3 seconds by calling the function "Remove()"
    setTimeout(Remove, 3000);

    // Content creation
    const content = document.createElement('div');
    document.querySelector('.onyx-lib-sysnotif').appendChild(content);
    content.innerHTML = ncontent;

    // Disappear button creation
    const xbtn = document.createElement('div');
    document.querySelector('.onyx-lib-sysnotif').appendChild(xbtn);
    xbtn.innerHTML = 'X';

    // Disappear button style
    xbtn.style.fontFamily = 'Comic Sans MS';
    xbtn.style.position = 'absolute';
    xbtn.style.top = '5px';
    xbtn.style.right = '11px';
    xbtn.style.cursor = 'pointer';

    // Removes the notification after clicking on the "X" button by calling the function "Remove()"
    xbtn.addEventListener('click', () => {
        Remove();
    });
}