import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themes } from '../../styles/themes';

const AxeCard = ({ axe, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={{ borderRadius: themes.borderRadius.md }}>
        <Text style={themes.typography.h2}>{axe.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: themes.colors.secondary,
    borderRadius: themes.borderRadius.md,
    padding: themes.spacing.md,
    marginHorizontal: themes.spacing.md,
    marginVertical: themes.spacing.md,
    alignItems: 'center',
    ...themes.shadows.md
  },
  
});

export default AxeCard;