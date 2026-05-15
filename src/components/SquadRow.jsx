import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MiniPitch from './MiniPatch';
import React from 'react';
import { chemColor } from '../utils/helpers';
import { colors } from '../assets/color';
import { fontSize } from '../assets/fontSize';

const SquadRow = ({ squad, onPress }) => (
  <TouchableOpacity style={sqStyles.row} onPress={onPress} activeOpacity={0.75}>
    <MiniPitch accentColor={colors.primary} />
    <View style={sqStyles.info}>
      <Text style={sqStyles.name}>{squad.name}</Text>
      <Text style={sqStyles.sub}>
        {squad.formation} · {squad.rating} OVR
      </Text>
    </View>
    <View style={sqStyles.right}>
      <Text style={[sqStyles.chem, { color: chemColor(squad.chemistry) }]}>
        {squad.chemistry}
      </Text>
      <Text style={sqStyles.chemLabel}>CHEM</Text>
    </View>
    <Text style={sqStyles.arrow}>›</Text>
  </TouchableOpacity>
);

const sqStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  info: { flex: 1, marginLeft: 12 },
  name: {
    fontSize: fontSize.normal,
    fontWeight: '700',
    color: colors.primaryText,
  },
  sub: { fontSize: fontSize.small, color: colors.mutedText, marginTop: 2 },
  right: { alignItems: 'center', marginRight: 12 },
  chem: { fontSize: fontSize.largeMedium, fontWeight: '800' },
  chemLabel: {
    fontSize: fontSize.tiny,
    color: colors.mutedText,
    letterSpacing: 0.5,
  },
  arrow: { fontSize: fontSize.large, color: colors.mutedText },
});

export default SquadRow;
