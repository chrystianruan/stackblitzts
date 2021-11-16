const m1 = +prompt('Módulo 1 (entre 0 e 100): ');
const m2 = +prompt('Módulo 2 (entre 0 e 100): ');

if (m1 >= 0 && m1 <= 100 && m2 >= 0 && m2 <= 100) {
  let media = (m1 * 4 + m2 * 6) / 10;
  document.write('Média: ' + media);
} else {
  document.write('Algumas das notas não estão entre 0 e 100.');
}
