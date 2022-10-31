export function addStyle(styles: string, id?: string) {
  /* Create style document */
  const style = document.createElement('style');
  if (id) style.id = id;
  style.appendChild(document.createTextNode(styles));
  document.head.appendChild(style);
}
