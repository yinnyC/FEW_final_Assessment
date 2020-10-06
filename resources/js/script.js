const display_info_container = document.getElementById('display-info');
const draw_info_container = document.getElementById('draw-info');
const user_input = document.getElementById('user-input');
function display_info() {
	let infoStr = '';
	let width_input = document.getElementById('box-width');
	let height_input = document.getElementById('box-height');
	let color_input = document.getElementById('box-color');
	infoStr += `<h2>Width</h2> <p>${width_input.value} px</p>
    <h2>Height</h2> <p>${height_input.value} px</p>
    <h2>Color</h2> <p>${color_input.value} px</p>`;
	display_info_container.innerHTML = infoStr;
}
display_info();

function draw_info() {
	let infoStr = '';
	let width_input = document.getElementById('box-width');
	let height_input = document.getElementById('box-height');
	let color_input = document.getElementById('box-color');
	infoStr += `<h1>Color</h1> <div style="width:${width_input.value}px; height:${height_input.value}px; background-color:${color_input.value}"></div>`;
	draw_info_container.innerHTML = infoStr;
}
draw_info();

user_input.onchange = function (e) {
	display_info();
	draw_info();
};
