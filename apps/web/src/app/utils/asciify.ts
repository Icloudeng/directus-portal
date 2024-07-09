export function asciify(str: string) {
  return str
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
