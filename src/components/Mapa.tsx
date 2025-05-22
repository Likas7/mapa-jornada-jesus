import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([31.7683, 35.2137], 8); // Coordenadas de Jerusalém

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adicionar marcadores aqui
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
};

export default Mapa;