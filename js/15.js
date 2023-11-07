function contarVocales(texto) {
    texto = texto.toLowerCase();
  
    const vocales = ['a', 'e', 'i', 'o', 'u'];
  
    let contadorVocales = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (vocales.includes(texto[i])) {
        contadorVocales++;
      }
    }
  
    return contadorVocales;
  }
  
  const textoUsuario = prompt("Introduce un texto para contar las vocales:");
  
  if (textoUsuario !== null) {
    const numeroDeVocales = contarVocales(textoUsuario);
    document.write(`El texto tiene ${numeroDeVocales} vocales.`);
  } else {
    document.write("No ingresaste ningún texto.");
  }
  