let scoreIntro;
let scoreGit;
let scoreJs;
let averageScore;
let studentName;

scoreIntro = 70;
scoreGit = 90;
scoreJs = 121;

averageScore = (scoreIntro + scoreGit + scoreJs) / 3;

studentName = "Антон Антонов";
let initial = studentName.slice(0, 1);
let surname = studentName.slice(6);

console.log(
  `Средний балл за модули "Введение", "Git" и "JS" студента по имени ${initial}. ${surname} составил ${averageScore}.`
);
