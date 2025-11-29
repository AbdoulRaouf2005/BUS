# Structure du projet BUS TRACKER

```text
TransportU/
├── src/
│   ├── assets/                    # Ressources statiques
│   │   ├── images/                # Images, logos
│   │   ├── icons/                 # Icônes personnalisées
│   │   └── fonts/                 # Polices personnalisées
│   │
│   ├── components/                # Composants réutilisables
│   │   ├── common/                # Composants génériques
│   │   │   ├── Button.js
│   │   │   ├── Card.js
│   │   │   ├── Header.js
│   │   │   └── LoadingSpinner.js
│   │   │
│   │   ├── home/                  # Composants page d'accueil
│   │   │   ├── GareMap.js
│   │   │   └── AxeCard.js
│   │   │
│   │   ├── axeDetail/             # Composants détail axe
│   │   │   ├── ScheduleGrid.js
│   │   │   └── StopList.js
│   │   │
│   │   └── trajectory/            # Composants trajet
│   │       ├── TrajectoryMap.js
│   │       ├── BusMarker.js
│   │       └── NextStopCard.js
│   │
│   ├── screens/                   # Écrans de l'application
│   │   ├── HomeScreen.js          # Page d'accueil
│   │   ├── AxeDetailScreen.js     # Détails d'un axe
│   │   ├── TrajectoryScreen.js    # Suivi du trajet
│   │   └── SettingsScreen.js      # Paramètres (optionnel)
│   │
│   ├── navigation/                # Configuration navigation
│   │   └── AppNavigator.js        # Stack Navigator
│   │
│   ├── data/                      # Données de l'application
│   │   ├── busAxes.js             # Données des axes
│   │   ├── schedules.js           # Horaires
│   │   ├── stops.js               # Arrêts
│   │   └── routes.js              # Coordonnées des trajets
│   │
│   ├── services/                  # Services et logique métier
│   │   ├── storageService.js      # Gestion AsyncStorage
│   │   ├── locationService.js     # Gestion GPS
│   │   └── notificationService.js # Notifications
│   │
│   ├── utils/                     # Fonctions utilitaires
│   │   ├── dateHelpers.js         # Formatage dates/heures
│   │   ├── mapHelpers.js          # Calculs géographiques
│   │   └── constants.js           # Constantes globales
│   │
│   ├── hooks/                     # Custom React Hooks
│   │   ├── useLocation.js         # Hook pour GPS
│   │   └── useStorage.js          # Hook pour stockage
│   │
│   ├── styles/                    # Styles globaux
│   │   ├── colors.js              # Palette de couleurs
│   │   ├── typography.js          # Styles de texte
│   │   └── spacing.js             # Marges et padding
│   │
│   └── App.js                     # Point d'entrée principal
│
├── android/                       # Configuration Android
├── ios/                           # Configuration iOS
├── .gitignore
├── package.json
├── babel.config.js
├── metro.config.js
└── README.md
