// Selecionar as duas sections
const section1 = document.querySelector("section.right");
const section2 = document.querySelector("section.left");

// Obter as alturas das duas sections
const height1 = section1.offsetHeight;
const height2 = section2.offsetHeight;

// Determinar a altura maior
const maxHeight = Math.max(height1, height2);

// Aplicar a maior altura a ambas as sections
section1.style.height = `${maxHeight}px`;
section2.style.height = `${maxHeight}px`;
