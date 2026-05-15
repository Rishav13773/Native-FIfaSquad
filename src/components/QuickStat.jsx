import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { colors } from '../assets/color';
import { fontSize } from '../assets/fontSize';

const QuickStat = ({ label, value, accentColor }) => (
  <View style={quickStatStyles.card}>
    <Text style={[quickStatStyles.value, { color: accentColor }]}>{value}</Text>
    <Text style={quickStatStyles.label}>{label}</Text>
  </View>
);

const quickStatStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  value: {
    fontSize: fontSize.largeMedium,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  label: {
    fontSize: fontSize.tiny,
    color: colors.mutedText,
    marginTop: 2,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});

export default QuickStat;
