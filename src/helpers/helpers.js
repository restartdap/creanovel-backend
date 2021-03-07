const primeraLetraMayuscula = (palabras) => {
    const arregloPalabras = String(palabras).trim().split(" ");
    const palabrasMayuscula = arregloPalabras.map((p) => {
        const palabraConMayuscula = p[0].toUpperCase() + p.substring(1, p.length);
        return palabraConMayuscula;
    });
    const resultado = palabrasMayuscula.join(" ");
    return resultado;
};

module.exports = {
    primeraLetraMayuscula
}