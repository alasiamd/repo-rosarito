import hamacaxlImage from '../images/hamacaxl.png';
import cuadrosMacetaImage from '../images/cuadrosMaceta.png';
import reposerasxlImage from '../images/reposerasxl.png';
import sillonesxlImage from '../images/sillonesxl.png';
import camastrosxlImage from '../images/camastrosxl.png';
import hamacaTImage from '../images/hamacaT.png';
import reposeraDImage from '../images/reposeraD.png';
import sillonfullImage from '../images/sillonfull.png';

export const photoData = [
    { image: hamacaxlImage, text: 'hamaca para dos personas sin techo peso maximo 300kg con tratamiento para el exterior y cadenas' },
    { image: cuadrosMacetaImage, text: 'Cuadros Maceta para pared máximo cinco canteros de eucaliptus y con tratamiento para la humedad' },
    { image: reposerasxlImage, text: 'Reposeras XL de eucaliptus largo:1.70 ancho:0.65 son fijas con mesa ratonera de regalo' },
    { image: sillonesxlImage, text: 'Sillones XL de eucaliptus excelente calidad sillon grande:largo:1.80 ancho:0.80 sillon chico:0.80 x 0.80 con mesa de regalo' },
    { image: camastrosxlImage, text: 'Camastros XL de eucaliptus con mesa de regalo largo:1.80 ancho:0.60 dos posiciones' },
    { image: hamacaTImage, text: 'Hamaca con techo para dos personas largo: 1.80 ancho: 1.50 altura:1.70 canteros al medio y para apoyar vasos al costado' },
    { image: reposeraDImage, text: 'Juego de reposeras con deck de eucaliptus con tratamiento al aceite para la humedad' },
    { image: sillonfullImage, text: 'Glorieta de verano la mejor excelente calidad con canteros techo y parrilla para enredaderas' },
    // Puedes agregar más fotos aquí
  ];
  
  export const findPhotoById = (id) => {
    return photoData[id];
  };
  