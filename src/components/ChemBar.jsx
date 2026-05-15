import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { chemColor } from '../utils/helpers';
import { colors } from '../assets/color';

const ChemBar = ({ value }) => {
  const barColor = chemColor(value);
  return (
    <View style={chemStyles.track}>
      <View
        style={[
          chemStyles.fill,
          { width: `${value}%`, backgroundColor: barColor },
        ]}
      />
    </View>
  );
};

const chemStyles = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    overflow: 'hidden',
    marginTop: 4,
  },
  fill: { height: '100%', borderRadius: 2 },
});

export default ChemBar;
