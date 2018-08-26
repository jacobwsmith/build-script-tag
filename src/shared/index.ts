export function component(str: string) {
  const element = document.createElement('div');
  element.innerHTML = str;
  return element;
}
