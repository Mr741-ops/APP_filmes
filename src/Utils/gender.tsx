export const Gender = (gender: number, t: (key: string) => string) => {
  switch (gender) {
    case 1:
      return t('Female');
    case 2:
      return t('Male');
    case 3:
      return t('NonBinary');
    default:
      return 'N/A';
  }
};
