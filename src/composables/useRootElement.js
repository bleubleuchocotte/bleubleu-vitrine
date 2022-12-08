export function addCSSProperty(name, value){
	document.querySelector(':root').style.setProperty(name, value);
}