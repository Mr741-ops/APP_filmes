export const Gender = (gender: number, t: (key: string) => string) => {
  switch (gender) {
    case 1:
      return t('peopleDetails.Female');
    case 2:
      return t('peopleDetails.Male');
    case 3:
      return t('peopleDetails.NonBinary');
    default:
      return 'N/A';
  }
};
