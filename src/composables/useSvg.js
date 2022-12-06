export function getDataUriFromSvg(svg) {
	// these may not all be needed - used to be for uri-encoded svg in old browsers
	var encoded = svg.replace(/\s+/g, ' ');
	encoded = replaceAll(encoded, '%', '%25');
	encoded = replaceAll(encoded, '> <', '><'); // normalise spaces elements
	encoded = replaceAll(encoded, '; }', ';}'); // normalise spaces css
	encoded = replaceAll(encoded, '<', '%3c');
	encoded = replaceAll(encoded, '>', '%3e');
	encoded = replaceAll(encoded, '"', "'"); // normalise quotes ... possible issues with quotes in <text>
	encoded = replaceAll(encoded, '#', '%23'); // needed for ie and firefox
	encoded = replaceAll(encoded, '{', '%7b');
	encoded = replaceAll(encoded, '}', '%7d');
	encoded = replaceAll(encoded, '|', '%7c');
	encoded = replaceAll(encoded, '^', '%5e');
	encoded = replaceAll(encoded, '`', '%60');
	encoded = replaceAll(encoded, '@', '%40');
	var dataUri = 'data:image/svg+xml;charset=UTF-8,' + encoded.trim();

	return dataUri;
}

/**
 * Return an SVG favicon with dynamic color
 * @param {String} color HEX value of a color
 */
	export function getSvgFavicon(color) {
	const svg = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<style>
				rect {
					fill: ${color};
				}
			</style>
			<rect x="0" y="0" width="30" height="30" rx="5"/>
		</svg>`;

	return svg;
}

function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
}

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}


