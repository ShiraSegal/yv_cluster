export class CompaereDetailsData {
  title: string;
  records: { [key: string]: string };

  constructor(title: string, records: { [key: string]: string }) {
    this.title = title;
    this.records = records;
  }
}


