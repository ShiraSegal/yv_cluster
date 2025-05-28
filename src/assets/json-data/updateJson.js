const fs = require('fs');

// נתיב הקובץ
const filePath = './src/assets/json-data/getAutoCluster.json';

// קריאת הקובץ
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// פונקציה לשינוי שמות המפתחות ל-CamelCase
function toCamelCase(key) {
  return key
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^(.)/, (char) => char.toLowerCase());
}

// פונקציה לעדכון אובייקט
function updateObject(obj) {
  const updatedObj = {};
  for (const key in obj) {
    if (['link', 'Unnamed: 2', 'Unnamed: 1'].includes(key)) {
      // דילוג על שדות שצריך למחוק
      continue;
    }
    const newKey = toCamelCase(key); // שינוי שם המפתח ל-CamelCase
    updatedObj[newKey] = obj[key]; // שמירה של הערך תחת המפתח החדש
  }
  return updatedObj;
}

// פונקציה לעדכון מערך
function updateArray(arr) {
  return arr.map((item) => updateObject(item));
}

// עדכון הנתונים
for (const key in jsonData) {
  if (Array.isArray(jsonData[key])) {
    jsonData[key] = updateArray(jsonData[key]);
  }
}

// כתיבת הקובץ המעודכן
fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');

console.log('JSON file updated successfully!');