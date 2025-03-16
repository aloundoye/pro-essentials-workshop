interface Scores {
  [index: string]: number;
  math: number;
  english: number;
}


const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
