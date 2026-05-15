import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Rect } from 'react-native-svg';

import Player from '../components/Player';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../assets/color';
import { fontSize } from '../assets/fontSize';

const { width, height } = Dimensions.get('window');

const PLAYERS = [
  { id: 1, name: 'GK', x: '50%', y: '90%' },
  { id: 2, name: 'LB', x: '15%', y: '75%' },
  { id: 3, name: 'CB', x: '38%', y: '78%' },
  { id: 4, name: 'CB', x: '62%', y: '78%' },
  { id: 5, name: 'RB', x: '85%', y: '75%' },

  { id: 6, name: 'CM', x: '30%', y: '55%' },
  { id: 7, name: 'CDM', x: '50%', y: '60%' },
  { id: 8, name: 'CM', x: '70%', y: '55%' },

  { id: 9, name: 'LW', x: '18%', y: '25%' },
  { id: 10, name: 'ST', x: '50%', y: '18%' },
  { id: 11, name: 'RW', x: '82%', y: '25%' },
];

const PitchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pitchContainer}>
        {/* Pitch Background */}
        <View style={styles.pitch}>
          {/* SVG Lines */}
          <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
            {/* Outer Boundary */}
            <Rect
              x="3%"
              y="3%"
              width="94%"
              height="94%"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />

            {/* Mid Line */}
            <Line
              x1="3%"
              y1="50%"
              x2="97%"
              y2="50%"
              stroke="white"
              strokeWidth="2"
            />

            {/* Center Circle */}
            <Circle
              cx="50%"
              cy="50%"
              r="40"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />

            {/* Center Dot */}
            <Circle cx="50%" cy="50%" r="4" fill="white" />

            {/* Top Penalty Box */}
            <Rect
              x="20%"
              y="3%"
              width="60%"
              height="15%"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />

            {/* Bottom Penalty Box */}
            <Rect
              x="20%"
              y="82%"
              width="60%"
              height="15%"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />

            {/* Top Goal Box */}
            <Rect
              x="35%"
              y="3%"
              width="30%"
              height="7%"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />

            {/* Bottom Goal Box */}
            <Rect
              x="35%"
              y="90%"
              width="30%"
              height="7%"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />
          </Svg>

          {/* Players */}
          {PLAYERS.map(player => (
            <Player key={player.id} player={player} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PitchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pitchContainer: {
    width: width * 0.95,
    height: height * 0.85,
    borderRadius: 24,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 10,
  },

  pitch: {
    flex: 1,
    backgroundColor: colors.pitchGreen,
    position: 'relative',
  },
});
