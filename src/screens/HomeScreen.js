import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { busAxes } from '../data/busAxe';
import AxeCard from '../components/home/AxeCard';
import themes from '../styles/themes';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
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
    backgroundColor: themes.colors.primary
  },
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themes.colors.primaryDark,
    padding: themes.spacing.md,
    paddingBottom: themes.spacing.lg,
    marginBottom: themes.spacing.md,
    ...themes.shadows.md
  },
  headerTitle: {
    fontSize: themes.typography.h2.fontSize,
    fontWeight: 'bold',
    color: themes.colors.text
  },
  headerSubtitle: {
    fontSize: themes.typography.bodySmall.fontSize,
    color: themes.colors.text,
    marginTop: themes.spacing.xs
  },
  content: {
    flex: 1
  },
  welcomeCard: {
    margin: 16,
    marginBottom: 8,
    padding: 20,
    backgroundColor: themes.colors.primary,
    borderRadius: 20,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: themes.colors.text,
    marginBottom: 6
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: themes.colors.text
  },
  footer: {
    height: 20
  }
});

export default HomeScreen;