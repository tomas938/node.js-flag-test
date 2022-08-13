getFlags();
async function getFlags() {
	const response = await fetch("/flags");
	const data = await response.json();
	const body = document.querySelector("body");
	data.forEach((data) => {
		const html = `
		<a class="${data.cca2}" href=/flags/${data.cca2}>
		<h1>${data.car}</h1>
		<div>${data.name.official}</div>
		<img src=${data.flags.png}>
		</a>
		`;
		body.insertAdjacentHTML("beforeend", html);
	});
}
