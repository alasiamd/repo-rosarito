import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { findPhotoById } from '../photoData/photoData';
import './Detail.css'; // Importa tu archivo CSS personalizado

function Detail() {
  const { id } = useParams(); // Obtén el id de los parámetros de la ruta
  const photo = findPhotoById(id);

  if (!photo) {
    // Manejar el caso en el que no se encuentra la foto con el id dado
    return <div>La foto no se encontró.</div>;
  }

  return (
    <div className="detail-container">
      <Link to='/home' className="back-link">Volver a home</Link>
      <h1 className="detail-title">Detalle del producto</h1>
      <img src={photo.image} alt={`Foto ${id}`} width="400" height="400" />
      <p className="detail-text">{photo.text}</p>
    </div>
  );
}

export default Detail;
