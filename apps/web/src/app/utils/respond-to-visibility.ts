export const respondToVisibility = (
  element: Element | HTMLElement,
  callback: (value: boolean) => void
) => {
  const options = {
    root: document.documentElement,
  } as IntersectionObserverInit;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.intersectionRatio > 0);
    });
  }, options);
  observer.observe(element);
  return () => observer.unobserve(element);
};
