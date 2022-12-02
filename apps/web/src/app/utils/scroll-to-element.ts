export function scrollToElement(rect: DOMRect) {
  return window.scroll({
    top:
      rect.y > 0
        ? rect.y + window.scrollY - 150
        : window.scrollY - Math.abs(rect.y) - 150,
    behavior: 'smooth',
  });
}
