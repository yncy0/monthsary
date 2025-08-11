import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

export function monthlyIncrement() {
  dayjs.extend(isLeapYear);

  const startOfMonth = dayjs("2024-11-30");
  const endOfMonth = dayjs().endOf("month");

  let monthCount: number = 0;

  for (
    let month = dayjs(startOfMonth);
    month.isBefore(endOfMonth) || month.isSame(endOfMonth, "month");
    month = month.add(1, "month").endOf("month")
  ) {
    monthCount++
  }

  return monthCount - 1
}
