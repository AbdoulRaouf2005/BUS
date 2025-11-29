
export const busAxes = [
  {
    id: 1,
    name: "Axe A - Centre-Ville",
    shortName: "A",
    color: "#10B981",
    description: "Gare UAM → Grand Marché → Kennedy",
    stops: [
      { id: 1, name: "Gare Universitaire UAM", lat: 13.5137, lng: 2.1098, order: 1 },
      { id: 2, name: "Rond-Point Maourey", lat: 13.5115, lng: 2.1125, order: 2 },
      { id: 3, name: "Grand Marché", lat: 13.5116, lng: 2.1191, order: 3 },
      { id: 4, name: "Petit Marché", lat: 13.5089, lng: 2.1254, order: 4 },
      { id: 5, name: "Rond-Point Kennedy", lat: 13.5067, lng: 2.1298, order: 5 }
    ],
    schedules: ["06:30", "07:30", "08:30", "10:00", "12:00", "14:00", "16:00", "18:00", "19:30"],
    duration: "25 min"
  },
  {
    id: 2,
    name: "Axe B - Plateau",
    shortName: "B",
    color: "#3B82F6",
    description: "Gare UAM → Yantala → Plateau",
    stops: [
      { id: 6, name: "Gare Universitaire UAM", lat: 13.5137, lng: 2.1098, order: 1 },
      { id: 7, name: "Yantala Haut", lat: 13.5178, lng: 2.1045, order: 2 },
      { id: 8, name: "Hôpital National", lat: 13.5203, lng: 2.1012, order: 3 },
      { id: 9, name: "Palais des Congrès", lat: 13.5245, lng: 2.0989, order: 4 },
      { id: 10, name: "Plateau", lat: 13.5278, lng: 2.0956, order: 5 }
    ],
    schedules: ["06:00", "07:00", "08:00", "09:30", "11:30", "13:30", "15:30", "17:30", "19:00"],
    duration: "30 min"
  },
  {
    id: 3,
    name: "Axe C - Aéroport",
    shortName: "C",
    color: "#F59E0B",
    description: "Gare UAM → Route Filingué → Aéroport",
    stops: [
      { id: 11, name: "Gare Universitaire UAM", lat: 13.5137, lng: 2.1098, order: 1 },
      { id: 12, name: "Wadata", lat: 13.5056, lng: 2.0934, order: 2 },
      { id: 13, name: "Route Filingué", lat: 13.4989, lng: 2.0823, order: 3 },
      { id: 14, name: "Aéroport Diori Hamani", lat: 13.4815, lng: 2.1836, order: 4 }
    ],
    schedules: ["05:30", "07:00", "09:00", "11:00", "14:00", "16:00", "18:00", "20:00"],
    duration: "40 min"
  },
  {
    id: 4,
    name: "Axe D - Kirkissoye",
    shortName: "D",
    color: "#8B5CF6",
    description: "Gare UAM → Lamordé → Kirkissoye",
    stops: [
      { id: 15, name: "Gare Universitaire UAM", lat: 13.5137, lng: 2.1098, order: 1 },
      { id: 16, name: "Lamordé", lat: 13.5234, lng: 2.1234, order: 2 },
      { id: 17, name: "Dar Es Salam", lat: 13.5312, lng: 2.1345, order: 3 },
      { id: 18, name: "Kirkissoye Centre", lat: 13.5456, lng: 2.1489, order: 4 }
    ],
    schedules: ["06:45", "08:00", "09:30", "11:30", "13:30", "15:30", "17:30", "19:00"],
    duration: "35 min"
  }
];