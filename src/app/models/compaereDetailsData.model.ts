export class CompaereDetailsData {
  recordTitle: string; // לדוגמה: record1, record2 וכו'
  values: { key: string; value: string }[]; // מערך של אובייקטים עם key ו-value
  isOpen:boolean;

  constructor(recordTitle: string, values: { [key: string]: string }) {
    this.recordTitle = recordTitle;
    this.values = Object.entries(values).map(([key, value]) => ({ key, value }));
    this.isOpen=true
  }
}


