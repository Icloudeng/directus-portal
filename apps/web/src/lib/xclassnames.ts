export const xclassnames = (...classes: [boolean | string, string]): string => {
  return classes.filter(Boolean).join(' ');
};
