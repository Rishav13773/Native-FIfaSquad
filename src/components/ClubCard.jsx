import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { chemColor, ratingColor } from '../utils/helpers';

import ChemBar from './ChemBar';
import React from 'react';
import { colors } from '../assets/color';
import { fontSize } from '../assets/fontSize';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 16 * 2 - 10) / 2;

const ClubCard = ({ club, isSelected, onPress }) => (
  <TouchableOpacity
    style={[
      clubCardStyles.container,
      isSelected && clubCardStyles.containerSelected,
    ]}
    onPress={() => onPress(club)}
    activeOpacity={0.75}
  >
    {/* Top colour stripe */}
    <View style={[clubCardStyles.stripe, { backgroundColor: club.color }]} />

    {/* Header row: club badge + rating */}
    <View style={clubCardStyles.headerRow}>
      <View
        style={[clubCardStyles.badge, { backgroundColor: club.color + '20' }]}
      >
        <Text style={[clubCardStyles.badgeText, { color: club.color }]}>
          {club.shortName}
        </Text>
      </View>
      <View
        style={[
          clubCardStyles.ratingPill,
          { backgroundColor: ratingColor(club.rating) + '20' },
        ]}
      >
        <Text
          style={[
            clubCardStyles.ratingText,
            { color: ratingColor(club.rating) },
          ]}
        >
          {club.rating}
        </Text>
      </View>
    </View>

    {/* Club name + formation */}
    <Text style={clubCardStyles.clubName} numberOfLines={1}>
      {club.name}
    </Text>
    <Text style={clubCardStyles.formation}>{club.formation}</Text>

    {/* Chemistry */}
    <View style={clubCardStyles.chemRow}>
      <Text style={clubCardStyles.chemLabel}>Chemistry</Text>
      <Text
        style={[clubCardStyles.chemValue, { color: chemColor(club.chemistry) }]}
      >
        {club.chemistry}
      </Text>
    </View>
    <ChemBar value={club.chemistry} />

    {/* Selected checkmark */}
    {isSelected && (
      <View style={clubCardStyles.check}>
        <Text style={clubCardStyles.checkText}>✓</Text>
      </View>
    )}
  </TouchableOpacity>
);

const clubCardStyles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: colors.cardBackground,
    borderRadius: 14,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    paddingTop: 0,
  },
  containerSelected: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  stripe: { height: 4, marginHorizontal: -12, marginBottom: 10 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeText: { fontSize: fontSize.tiny, fontWeight: '800', letterSpacing: 1 },
  ratingPill: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  ratingText: { fontSize: fontSize.small, fontWeight: '800' },
  clubName: {
    fontSize: fontSize.normal,
    fontWeight: '700',
    color: colors.primaryText,
    marginBottom: 2,
  },
  formation: {
    fontSize: fontSize.small,
    color: colors.mutedText,
    marginBottom: 6,
  },
  chemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  chemLabel: { fontSize: fontSize.tiny, color: colors.mutedText },
  chemValue: { fontSize: fontSize.tiny, fontWeight: '700' },
  check: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    color: '#fff',
    fontSize: fontSize.small,
    fontWeight: '800',
  },
});

export default ClubCard;
