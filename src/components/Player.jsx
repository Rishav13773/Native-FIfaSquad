import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { colors } from '../assets/color';
import { fontSize } from '../assets/fontSize';

const Player = ({ player }) => {
  return (
    <View
      style={[
        styles.playerContainer,
        {
          left: player.x,
          top: player.y,
        },
      ]}
    >
      <View style={styles.playerCircle}>
        <Text style={styles.playerText}>{player.name}</Text>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  playerContainer: {
    position: 'absolute',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },

  playerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,

    backgroundColor: colors.playerCard,

    borderWidth: 2,
    borderColor: colors.playerBorder,

    justifyContent: 'center',
    alignItems: 'center',
  },

  playerText: {
    color: colors.primaryText,
    fontWeight: '700',
    fontSize: fontSize.small,
  },
});
