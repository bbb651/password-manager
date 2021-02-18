export function elementIndexInParent(element: Element) {
	let i = 0;
	while ((element = element.previousElementSibling) != null) {
		console.log(element);
		i++;
	};
	return i;
}
