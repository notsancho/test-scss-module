export const firstLetters = (target: string): string =>
  target
    ? target
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substr(0, 2)
    : '';

export const truncate = (str: string, limit = 5): string =>
  str && str.length > limit ? `${str.substring(0, limit)} ...` : str;

export const makeId = (length = 20): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const capitalize = (s: string): string => {
  if (typeof s !== 'string') return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
};
