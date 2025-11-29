import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const AxeCard = ({ axe, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.badge, { backgroundColor: axe.color }]}>
        <Text style={styles.badgeText}>{axe.shortName}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{axe.name}</Text>
        <Text style={styles.description}>{axe.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.info}>🕐 {axe.schedules.length} départs</Text>
          <Text style={styles.info}>⏱️ {axe.duration}</Text>
        </View>
      </View>
      
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  badge: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14
  },
  badgeText: {
    color: colors.text.inverse,
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 4
  },
  description: {
    fontSize: 13,
    color: colors.text.secondary,
    marginBottom: 8
  },
  footer: {
    flexDirection: 'row',
    gap: 12
  },
  info: {
    fontSize: 12,
    color: colors.text.tertiary
  },
  arrow: {
    fontSize: 28,
    color: colors.text.tertiary,
    marginLeft: 8
  }
});

export default AxeCard;