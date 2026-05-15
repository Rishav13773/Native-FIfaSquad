import { colors } from '../assets/color';

export const ratingColor = r =>
  r >= 88 ? colors.primary : r >= 84 ? colors.warning : colors.info;

export const chemColor = c =>
  c >= 90
    ? colors.chemistryStrong
    : c >= 75
    ? colors.chemistryMedium
    : colors.chemistryWeak;
