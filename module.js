export function createElement(block, [...cssClass], {...attrs}) {
    const element = document.createElement(block);
    element.classList.add(...cssClass);
    for (const key in attrs) {
        element.setAttribute(key, attrs[key]);
    }
    return element;
}
