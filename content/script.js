let scripts = [
	["content/hcaptcha/interceptor.js"],
	["content/hcaptcha/hunter.js"],
	["content/recaptcha/interceptor.js"],
	["content/recaptcha/hunter.js"]
];
scripts.forEach(s => {
	if (s.length > 1 && !s[1]) {return;}
	let script = document.createElement('script');
	script.src = chrome.runtime.getURL(s[0]);
	(document.head||document.documentElement).prepend(script);
});