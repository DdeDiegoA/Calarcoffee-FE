/* eslint-disable no-unused-vars */
let baseScore = 0;
let score = 0;
let num = {
  Upper: 0,
  Numbers: 0,
  Symbols: 0,
  Excess: 0,
};
let bonus = {
  Excess: 3,
  Upper: 4,
  Numbers: 5,
  Symbols: 5,
  Combo: 0,
  FlatLower: 0,
  FlatNumber: 0,
};
const minPasswordLength = 8;

function checkPasswordStrength(password) {
  if (password === '') {
    baseScore = 0;
    score = 0;
    num = {
      Upper: 0,
      Numbers: 0,
      Symbols: 0,
      Excess: 0,
    };
    bonus = {
      Excess: 3,
      Upper: 4,
      Numbers: 5,
      Symbols: 5,
      Combo: 0,
      FlatLower: 0,
      FlatNumber: 0,
    };
  }
  if (password.length >= minPasswordLength) {
    baseScore = 50;
    analyzeString(password);
    calcComplexity();
  } else {
    baseScore = 0;
  }

  return outputResult(password, baseScore, score, num, bonus);
}

function analyzeString(password) {
  for (let i = 0; i < password.length; i++) {
    let numUpper = 0;
    let numNumbers = 0;
    let numSymbols = 0;

    if (password[i].match(/[A-Z]/g)) {
      numUpper++;
      num.Upper = numUpper;
    }
    if (password[i].match(/[0-9]/g)) {
      numNumbers++;
      num.Numbers = numNumbers;
    }
    if (password[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {
      numSymbols++;
      num.Symbols = numSymbols;
    }
  }

  num.Excess = password.length - minPasswordLength;

  if (num.Upper && num.Numbers && num.Symbols) {
    bonus.Combo = 25;
  } else if (
    (num.Upper && num.Numbers) ||
    (num.Upper && num.Symbols) ||
    (num.Numbers && num.Symbols)
  ) {
    bonus.Combo = 15;
  }

  if (password.match(/^[\sa-z]+$/)) {
    bonus.FlatLower = -15;
  }

  if (password.match(/^[\s0-9]+$/)) {
    bonus.FlatNumber = -35;
  }
}

function calcComplexity() {
  score =
    baseScore +
    num.Excess * bonus.Excess +
    num.Upper * bonus.Upper +
    num.Numbers * bonus.Numbers +
    num.Symbols * bonus.Symbols +
    bonus.Combo +
    bonus.FlatLower +
    bonus.FlatNumber;
}

function outputResult(password, baseScore, score, num, bonus) {
  if (!password) {
    return { result: 'Ingresa tu contraseña', class: 'error' };
  }

  if (password.length < minPasswordLength) {
    return {
      result: `Necesita al menos ${minPasswordLength} caracteres!`,
      class: 'error',
    };
  }
  if (num.Upper < 1) {
    return {
      result: `Necesita al menos una letra Mayuscula`,
      class: 'error',
    };
  }

  if (score < 75) {
    return { result: 'Debil!', class: 'weak' };
  }

  if (score >= 75 && score < 120) {
    return { result: 'Promedio!', class: 'strong' };
  }

  if (score >= 120 && score < 200) {
    return { result: 'Fuerte!', class: 'stronger' };
  }

  if (score >= 201) {
    return { result: 'Segura!', class: 'strongest' };
  }
}

export default checkPasswordStrength;
