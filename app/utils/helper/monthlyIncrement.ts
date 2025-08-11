import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

/** 
 * Increment the value per 30 days based on the starting year
 * @param year - Gets year based on the YYYY format
 * @param month - Gets month based on the MM format
 * @param day - Gets day based on the DD format
*/

export function monthlyIncrement(year: string, month: string, day: string) {
  dayjs.extend(isLeapYear);

  const startOfMonth = dayjs(`${year}-${month}-${day}`);
  const endOfMonth = dayjs().endOf("month");

  let monthCount: number = 0;

  for (
    let month = dayjs(startOfMonth);
    month.isBefore(endOfMonth) || month.isSame(endOfMonth, "month");
    month = month.add(1, "month").endOf("month")
  ) {
    monthCount++
  }

  // minus 2 because for now I can't figure it out how can I increment it exactly 30 days every month
  return monthCount - 2
}
