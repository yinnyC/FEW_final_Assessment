// Add headline
const headline_display_container = document.getElementById('headline-display');
function add_headline() {
	let headlineStr = '';
	const headline_input = document.getElementById('enter-text');
	headlineStr += `<h1 id="headline">${headline_input.value}</h1>`;
	headline_display_container.innerHTML = headlineStr;
}
add_headline();
// Handling form input
const display_target = document.getElementById('headline');
function update_font_size() {
	const sizeInput = document.getElementById('input-size');
	display_target.style.fontSize = parseInt(sizeInput.value) + 'px';
}
function update_letter_spacing() {
	const spacingInput = document.getElementById('input-spacing');
	display_target.style.letterSpacing = parseInt(spacingInput.value) + 'px';
}
function update_fontfamily() {
	const fontfamily_input = document.getElementById('select-font');
	display_target.style['font-family'] = fontfamily_input.value;
}
function update_fontWeight() {
	const fontWeight_input = document.getElementById('select-font-weight');
	display_target.style.fontWeight = fontWeight_input.value;
}
function update_fontStyle() {
	const fontStyle_input = document.getElementById('select-font-style');
	display_target.style.fontStyle = fontStyle_input.value;
}
function update_color() {
	const color_input = document.getElementById('input-color');
	display_target.style.color = color_input.value;
}
function update_bg_color() {
	const bg_color_input = document.getElementById('input-bg-color');
	display_target.style.backgroundColor = bg_color_input.value;
}
function update_padding() {
	const paddingInput = document.getElementById('input-padding');
	display_target.style.padding = parseInt(paddingInput.value) + 'px';
}
function update_headline() {
	const headline_input = document.getElementById('enter-text');
	display_target.innerHTML = headline_input.value;
}

update_font_size();
update_letter_spacing();
update_fontfamily();
update_fontWeight();
update_fontStyle();
update_color();
update_bg_color();
update_padding();

// Handling the dymatic update
const data_input = document.getElementById('data-input');
data_input.onchange = function (e) {
	show_data_output();
	if (e.target && e.target.id === 'input-size') {
		update_font_size();
	} else if (e.target && e.target.id === 'input-spacing') {
		update_letter_spacing();
	} else if (e.target && e.target.id === 'select-font') {
		update_fontfamily();
	} else if (e.target && e.target.id === 'select-font-weight') {
		update_fontWeight();
	} else if (e.target && e.target.id === 'select-font-style') {
		update_fontStyle();
	} else if (e.target && e.target.id === 'input-color') {
		update_color();
	} else if (e.target && e.target.id === 'input-bg-color') {
		update_bg_color();
	} else if (e.target && e.target.id === 'input-padding') {
		update_padding();
	}
};
const headline_input = document.getElementById('enter-text');
headline_input.addEventListener('input', update_headline);

// Handling data output
const data_output = document.getElementById('data-output');

function show_data_output() {
	let outputStr = '';
	const sizeInput = document.getElementById('input-size');
	const spacingInput = document.getElementById('input-spacing');
	const fontfamily_input = document.getElementById('select-font');
	const fontWeight_input = document.getElementById('select-font-weight');
	const fontStyle_input = document.getElementById('select-font-style');
	const color_input = document.getElementById('input-color');
	const bg_color_input = document.getElementById('input-bg-color');
	const paddingInput = document.getElementById('input-padding');

	outputStr += `<h1>Font Settings</h1>
	<pre><code>.headline {
		font-size: <span id="show-size">${sizeInput.value}</span>px;
		letter-spacing: <span id="show-spacing">${spacingInput.value}</span>px;
		font-family: <span id="show-font">${fontfamily_input.value}</span>;
		font-weight: <span id="show-font-weight">${fontWeight_input.value}</span>;
		font-style: <span id="show-font-style">${fontStyle_input.value}</span>;
		color: <span id="show-color">${color_input.value}</span>;
		background-color: <span id="show-bg-color">${bg_color_input.value}</span>;
		padding: <span id="show-padding">${paddingInput.value}</span>px;
	}</code></pre>`;
	data_output.innerHTML = outputStr;
}
show_data_output();
