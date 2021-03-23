export const isNumber = (val: string): boolean => {
  const pattern = /^\d+$/;
  return pattern.test(val);
};
