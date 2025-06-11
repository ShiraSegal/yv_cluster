const fs = require('fs');

// נתיב הקובץ
const filePath = './getAutoCluster.json';

// קריאת הקובץ
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// פונקציה להסרת שדה assignee מתוך ClustersForSapir
function removeAssigneeFromClustersForSapir(data) {
  if (data.ClustersForSapir && Array.isArray(data.ClustersForSapir)) {
    data.ClustersForSapir = data.ClustersForSapir.map((item) => {
      const { assignee, ...rest } = item; // הסרת השדה assignee
      return rest; // מחזיר את המידע ללא assignee
    });
  }
}

// הסרת השדה assignee
removeAssigneeFromClustersForSapir(jsonData);

// כתיבת הקובץ המעודכן
fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');

console.log('Assignee fields removed from ClustersForSapir in the JSON successfully!');
