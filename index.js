/**
 * Ajusta a altura de duas seções (`section.right` e `section.left`) para que ambas
 * tenham a mesma altura, baseada na maior altura entre elas.
 * 
 * @function ajustarAlturaSecoes
 * @returns {void}
 */
function ajustarAlturaSecoes() {
    const section1 = document.querySelector("section.right");
    const section2 = document.querySelector("section.left");

    if (section1 && section2) {
        if (window.innerWidth < 800) {
            section1.style.height = "auto";
            section2.style.height = "auto";
        } else {
            const height1 = section1.offsetHeight;
            const height2 = section2.offsetHeight;

            const maxHeight = Math.max(height1, height2);
            section1.style.height = `${maxHeight}px`;
            section2.style.height = `${maxHeight}px`;
        }
    }
}
window.addEventListener("load", ajustarAlturaSecoes);
window.addEventListener("resize", ajustarAlturaSecoes);