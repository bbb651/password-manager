export function elementIndexInParent(element: Element) {
	let i = 0;
	while ((element = element.previousElementSibling) != null) i++;
	return i;
}
