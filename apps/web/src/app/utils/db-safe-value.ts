export function dbSafeValue(value: string) {
  value = value.replace(/\s/g, '_');
  // prevent pasting of non dbSafeCharacters from bypassing the keydown checks
  value = value.replace(/[^a-zA-Z0-9_]/g, '');
  // Replace é -> e etc
  value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
