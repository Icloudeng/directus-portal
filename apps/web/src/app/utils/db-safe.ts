export const dbSafe = (value: string) => {
  value = value.replace(/\s/g, '_');
  // Replace é -> e etc
  value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // prevent pasting of non dbSafeCharacters from bypassing the keydown checks
  return value.replace(/[^a-zA-Z0-9_]/g, '');
};
