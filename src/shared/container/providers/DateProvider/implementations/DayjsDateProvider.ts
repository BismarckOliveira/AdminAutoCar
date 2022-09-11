import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const startDateFormatToUtc = this.convertToUTC(start_date);
    const endDateFormatToUtc = this.convertToUTC(end_date);
    const hours = dayjs(endDateFormatToUtc).diff(startDateFormatToUtc, "hours");
    return hours;
  }
  dateNow(): Date {
    return dayjs().toDate();
  }
  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }
}

export { DayjsDateProvider };
