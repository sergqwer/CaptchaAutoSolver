﻿(() => {
    let hCaptchaInstance;
    Object.defineProperty(window, "hcaptcha", {
        get: function () {
            return hCaptchaInstance;
        },
        set: function (e) {
            hCaptchaInstance = e;

            let originalRenderFunc = e.render;

            hCaptchaInstance.render = function (container, opts) {
                createHCaptchaWidget(container, opts);
                return originalRenderFunc(container, opts);
            };

            hcaptcha.getResponse = () => document.querySelector('[name=h-captcha-response]').value;
        },
    });
    let createHCaptchaWidget = function (container, opts) {
        if (typeof container !== 'string') {
            if (!container.id) {
                container.id = "hcaptcha-container-" + Date.now();
            }
            container = container.id;
        }
        if (opts.callback !== undefined && typeof opts.callback === "function") {
            let key = "hcaptchaCallback" + Date.now();
            window[key] = opts.callback;
            opts.callback = key;
        }
        let captchaInfo = {
			containerId: container,
            sitekey: opts.sitekey,
            callback: opts.callback,
        };
		window.captchaInfoh = captchaInfo;
    }
})()