import dayjs from "dayjs";

export function formatRelativeDate(inputDate?: string | number | Date | null): string | null {
  if (!inputDate) return null;

  let dateVal: dayjs.Dayjs;
  if (typeof inputDate === "string" && !isNaN(Number(inputDate)) && inputDate.trim() !== "") {
    dateVal = dayjs(Number(inputDate));
  } else {
    dateVal = dayjs(inputDate);
  }

  if (!dateVal.isValid()) {
    return typeof inputDate === "string" ? inputDate : null;
  }

  const now = dayjs();
  const diffInMinutes = now.diff(dateVal, "minute");
  const diffInHours = now.diff(dateVal, "hour");
  const diffInDays = now.diff(dateVal, "day");

  if (diffInMinutes < 1) {
    return "1 min ago";
  }

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  }

  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }

  const isSameYear = dateVal.year() === now.year();
  return isSameYear ? dateVal.format("D MMM") : dateVal.format("D MMM YYYY");
}
