const fs = require('fs');

// נתיב הקובץ
const filePath = './getAutoCluster.json';

// קריאת הקובץ
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// פונקציה ליצירת ערך אקראי עבור score
function getRandomScore(min = 1, max = 5) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// פונקציה לעדכון מערך ItemsForCheckList
function addScoreToItemsForCheckList(items) {
  return items.map((item) => ({
    ...item,
    score: getRandomScore(), // הוספת שדה score עם ערך אקראי
  }));
}

// עדכון הנתונים
if (Array.isArray(jsonData.ItemsForCheckList)) {
  jsonData.ItemsForCheckList = addScoreToItemsForCheckList(jsonData.ItemsForCheckList);
}

// כתיבת הקובץ המעודכן
fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');

console.log('Score field with random values added to ItemsForCheckList successfully!');