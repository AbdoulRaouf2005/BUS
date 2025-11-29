# 👥 Répartition des Tâches (2 Personnes)

## 🟦 Développeur 1 - Frontend & UI/UX

### Responsabilités principales

- Design et interface utilisateur
- Composants visuels
- Navigation
- Animations

### Tâches détaillées

#### Semaine 1-2: Setup & Page d'accueil

- Initialiser le projet React Native
- Configurer React Navigation
- Créer les composants communs (Button, Card, Header)
- Développer `HomeScreen` avec la carte de la gare
- Créer `AxeCard` avec animations
- Définir la palette de couleurs (`styles/colors.js`)

#### Semaine 3-4: Écran Détail Axe

- Développer `AxeDetailScreen`
- Créer `ScheduleGrid` (grille horaires)
- Créer `StopList` (liste arrêts avec timeline)
- Ajouter animations de transition
- Implémenter navigation entre écrans

#### Semaine 5-6: Écran Trajet

- Développer `TrajectoryScreen`
- Intégrer `react-native-maps`
- Créer `BusMarker` (marqueur animé)
- Créer `NextStopCard`
- Animations de progression

### Fichiers principaux

src/components/
src/screens/
src/styles/
src/navigation/

---

## 🟩 Développeur 2 - Backend & Fonctionnalités

### Responsabilités principales

- Gestion des données
- Services (GPS, stockage, notifications)
- Logique métier
- Optimisation hors ligne

### Tâches détaillées

#### Semaine 1-2: Structure des données

- Créer la structure de données (`data/`)
- Implémenter `busAxes.js` avec tous les axes
- Créer `schedules.js` avec horaires
- Définir `stops.js` avec coordonnées GPS
- Créer `routes.js` avec trajets complets
- Configurer `AsyncStorage`

#### Semaine 3-4: Services Core

- **`storageService.js`**
  - Sauvegarde/lecture données locales
  - Gestion des favoris
- **`locationService.js`**
  - Configuration GPS
  - Suivi position en temps réel
  - Calcul distance entre points
- **`utils/mapHelpers.js`**
  - Calculs géographiques
  - Détection proximité arrêt

#### Semaine 5-6: Fonctionnalités avancées

- **`notificationService.js`**
  - Alertes approche arrêt
  - Notifications départ bus
- Créer custom hooks (`useLocation`, `useStorage`)
- Optimiser performances
- Tester fonctionnement hors ligne
- Gérer états de chargement et erreurs

### Fichiers principaux

```
src/data/
src/services/
src/utils/
src/hooks/
```
---

## 🔄 Points de Synchronisation

### 1. Format des données (Développeur 2 → Développeur 1)

```javascript
// Exemple de structure d'axe
{
  id: 1,
  name: "Axe A - Centre Ville",
  color: "#10B981",
  stops: [...],
  schedules: [...],
  coordinates: [...]
}

// locationService.js
getCurrentPosition() → {latitude, longitude}
watchPosition(callback) → void
calculateDistance(point1, point2) → number

// storageService.js
saveData(key, data) → Promise
getData(key) → Promise
```
