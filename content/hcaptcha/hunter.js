(() => {
    const _intId = setInterval(() => {
		let textarea = document.querySelector("textarea[name=h-captcha-response]");
		if (!textarea) return;
		let container = textarea.parentNode;
		if (!container.id) {
			container.id = "hcaptcha-container-" + Date.now();
		}
		if(container.dataset.sitekey){
			let captchaInfo = {
				containerId: container.id,
				sitekey: container.dataset.sitekey,
				callback: container.dataset.callback || null,
			};
			window.captchaInfoh = captchaInfo;
			clearInterval(_intId);
		}
    }, 3000);

})()