//https://stackoverflow.com/questions/33611812/javascript-es6-export-const-vs-export-default

export default function navigation() {
	console.log("nav");

}

if(module.hot) {
	module.hot.accept();
}
