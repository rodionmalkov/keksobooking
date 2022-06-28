// Первая задача

const getRandomNum = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(`Первая задача ${getRandomNum(3, 1)}`);

// Вторая задача: Куксобукинг

const getRange = (from, to, signAfter) => {
  if (to < from) {
    [from, to] = [to, from];
  }

  if (signAfter) {
    return Math.random() * (to - from + 1) + from;
  } else {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
};

console.log(`Вторая задача ${getRange(1, 10, 1)}`);

// Третья задача: Кексограм

const checkStringlength = (string, maxLength) => {
  return string.length <= maxLength;
};

console.log(`Третья задача ${checkStringlength("Привет мир", 140)}`);
