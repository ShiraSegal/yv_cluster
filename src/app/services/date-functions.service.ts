import { DatePipe, Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DateFunctionsService {
  constructor(private datePipe: DatePipe) {}

  public getStringDateWithoutTime(date: Date) {
   return this.datePipe.transform(date, environment.dateFormat)!;
  }
public getDateFromString(strDate: string){
  const [day, month, year] = strDate.split('/');
  return new Date(+year, (+month)-1, +day);
}
  public getTimeFromString(timeStr: string) {
    if (timeStr.indexOf(':') > -1) {
      const splitTime = timeStr.split(':');
      return { hours: +splitTime[0], minutes: +splitTime[1] };
    } else {
      return { hours: +timeStr.slice(0, 2), minutes: +timeStr.slice(-2) };
    }
  }

  public getStringFromTime(hours: number, minutes: number) {
    return (
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0')
    );
  }
  public addTimeToDate(date: string | Date, time: Time) {
    const newDate = new Date(date);
    newDate.setHours(time.hours);
    newDate.setMinutes(time.minutes);
    return newDate;
  }
}
