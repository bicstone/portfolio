import { isValid } from "date-fns";
import { format as formatFn, utcToZonedTime } from "date-fns-tz";
import { ja } from "date-fns/locale";

const timeZone = "Asia/Tokyo";

/**
 * Returns formatted dateTime string from ISO dateTime string.
 * Returns empty string when argument is unexpected dateTime.
 * see https://date-fns.org/v2.29.3/docs/format
 */
export const formatDateTime = (value: string, format: string): string => {
  const parsedDate = utcToZonedTime(value, timeZone);

  if (!isValid(parsedDate)) return "";

  return formatFn(parsedDate, format, { locale: ja, timeZone });
};
