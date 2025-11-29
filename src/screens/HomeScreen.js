import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { busAxes } from '../data/busAxe';
import AxeCard from '../components/home/AxeCard';
import { colors } from '../styles/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>🚌</Text>
        </View>
        <View>
          <Text style={styles.headerTitle}>TransportU</Text>
          <Text style={styles.headerSubtitle}>Gare Universitaire UAM - Niamey</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Choisissez votre destination</Text>
          <Text style={styles.welcomeSubtitle}>4 axes disponibles depuis la gare UAM</Text>
        </View>
        
        {busAxes.map(axe => (
          <AxeCard
            key={axe.id}
            axe={axe}
            onPress={() => navigation.navigate('AxeDetail', { axe })}
          />
        ))} 

        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: 20,
    paddingVertical: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  headerIconText: {
    fontSize: 24
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text.primary
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.text.secondary,
    marginTop: 2
  },
  content: {
    flex: 1
  },
  welcomeCard: {
    margin: 16,
    marginBottom: 8,
    padding: 20,
    backgroundColor: colors.surface,
    borderRadius: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 6
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: colors.text.secondary
  },
  footer: {
    height: 20
  }
});

export default HomeScreen;