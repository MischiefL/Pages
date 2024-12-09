// Seleccionar el elemento con el ID 'curved-text'
document.addEventListener('DOMContentLoaded', () => {
    const circleType = new CircleType(document.getElementById('curved-text'));
  
    // Configurar el radio de curvatura
    circleType.radius(500); // Cambia el valor del radio si es necesario
  });
  // Seleccionar el elemento con el ID 'curved-text'
document.addEventListener('DOMContentLoaded', () => {
    const circleType = new CircleType(document.getElementById('curved-text2'));
  
    // Configurar el radio de curvatura
    circleType.radius(700); // Cambia el valor del radio si es necesario
    circleType.dir(-1);
  });
  