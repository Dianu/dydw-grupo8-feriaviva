// Coordenadas plazas y parques feria
const PLAZA_MORENO = [-34.921346, -57.954467]; // Plaza Moreno, La Plata
const PARQUE_CENTENARIO = [-34.606087, -58.435319]; // Parque Centenario, CABA
const PLAZA_MITRE = [-34.466264, -58.509596]; // Plaza Mitre, San Isidro
const PARQUE_LUJAN = [-34.568343, -59.126238]; // Parque Luján
const PARQUE_PEREYRA = [-34.843947, -58.179982]; // Parque Peréyra, Berazategui
const RIBERA_QUILMES = [-34.706601, -58.229983]; // Ribera de Quilmes

// Inicializar mapa
const mapa = L.map("mapa-feria").setView(PARQUE_CENTENARIO, 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapa);

// Marcadores feria
const ubicacionesFeria = [
  {
    nombre: "Feria Viva CABA",
    coordenadas: PARQUE_CENTENARIO,
    descripcion: "Parque Centenario, CABA",
  },
  {
    nombre: "Feria Viva La Plata",
    coordenadas: PLAZA_MORENO,
    descripcion: "Plaza Moreno, La Plata",
  },
  {
    nombre: "Feria Viva San Isidro",
    coordenadas: PLAZA_MITRE,
    descripcion: "Parque Municipal, San Isidro",
  },
  {
    nombre: "Feria Viva Luján",
    coordenadas: PARQUE_LUJAN,
    descripcion: "Parque Luján",
  },
  {
    nombre: "Feria Viva Berazategui",
    coordenadas: PARQUE_PEREYRA,
    descripcion: "Parque Peréyra, Berazategui",
  },
  {
    nombre: "Feria Viva Quilmes",
    coordenadas: RIBERA_QUILMES,
    descripcion: "Ribera de Quilmes",
  },
];

// Agregar marcadores para cada ubicación
ubicacionesFeria.forEach((ubicacion) => {
  const marcador = L.marker(ubicacion.coordenadas).addTo(mapa);
  marcador.bindPopup(`<b>${ubicacion.nombre}</b><br>${ubicacion.descripcion}`);
});

// Puntos de interés para Parque Centenario (ubicación actual)
const puntosInteres = [
  {
    nombre: "Stands de Emprendedores",
    coordenadas: [-34.60575, -58.43485],
    descripcion: "Zona de stands de emprendedores",
  },
  {
    nombre: "Área de Talleres",
    coordenadas: [-34.606, -58.4347],
    descripcion: "Zona de talleres y actividades",
  },
  {
    nombre: "Puestos de Comida",
    coordenadas: [-34.60635, -58.4345],
    descripcion: "Área gastronómica",
  },
];

// Agregar marcadores Parque Centenario (ubicación actual)
puntosInteres.forEach((punto) => {
  const marcador = L.marker(punto.coordenadas).addTo(mapa);
  marcador.bindPopup(`<b>${punto.nombre}</b><br>${punto.descripcion}`);
});

L.circle(PARQUE_CENTENARIO, {
  color: "#F89B77",
  fillColor: "#F89B77",
  fillOpacity: 0.2,
  radius: 100,
}).addTo(mapa);
