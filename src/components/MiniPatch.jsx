import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { colors } from '../assets/color';

const MiniPitch = ({ accentColor }) => (
  <View style={[miniStyles.pitch, { borderColor: accentColor + '44' }]}>
    <View style={miniStyles.stripe} />
    <View style={miniStyles.stripe} />
    <View style={miniStyles.midLine} />
    <View style={miniStyles.circle} />
  </View>
);

const miniStyles = StyleSheet.create({
  pitch: {
    width: 52,
    height: 38,
    borderRadius: 7,
    backgroundColor: colors.pitchGreen,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  stripe: {
    position: 'absolute',
    width: '100%',
    height: '33%',
    backgroundColor: colors.pitchGreenDark,
    opacity: 0.45,
  },
  midLine: {
    position: 'absolute',
    width: '90%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    top: '50%',
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
});

export default MiniPitch;
