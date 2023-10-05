import React from 'react';
import './About.css'; // Importa los estilos si es necesario
import { Link } from 'react-router-dom';

function About() {
 
  return (
    <div className="about-container">
      <Link to='/'>volver a la pagina de inicio</Link>
      <h2>Acerca de Muebles Rosarito</h2>
      <p>
      Fundada en el año 2018,somos una empresa familiar, Cordoba Argentina, nuestra empresa nació de la visión de un grupo de artesanos dedicados a preservar la belleza de los muebles de madera y a darles una nueva vida. A lo largo de los años, hemos perfeccionado nuestras habilidades y ampliado nuestro alcance para convertirnos en un referente en la creación de muebles rústicos y la restauración de piezas antiguas..
      </p>

      <h3>Nuestra Historia</h3>
      <p>
        Restauramos muebles con ansias de preservar la belleza de los muebles de madera y a darles una nueva vida. A lo largo de los años, hemos perfeccionado nuestras habilidades y ampliado nuestro alcance para convertirnos en un referente en la creación de muebles rústicos y la restauración de piezas antiguas.
      </p>

      <h3>Nuestros Productos</h3>
      <p>
      En Muebles Rosarito, ofrecemos una amplia gama de muebles rústicos diseñados para embellecer tu jardín y crear un espacio acogedor al aire libre. Desde sillas y mesas hasta pérgolas y bancos, nuestros muebles están hechos para resistir las inclemencias del tiempo y enriquecer tus momentos al aire libre.
      </p>

      <h3>Únete a Nuestra Historia</h3>
      <p>
      En Muebles Rosarito, estamos emocionados de compartir nuestra pasión por la carpintería y la belleza de los muebles rústicos contigo. Te invitamos a explorar nuestra colección y a descubrir cómo nuestros muebles pueden transformar tu espacio al aire libre en un oasis de tranquilidad y estilo.

Gracias por considerar Muebles Rosarito para tus necesidades de mobiliario y restauración de muebles. Esperamos ser parte de tu historia y ayudarte a crear un ambiente único y acogedor en tu hogar y jardín..
      </p>
      <Link to="/navbar">Volver a la Barra de Navegación</Link>
    </div>
  );
}

export default About;
