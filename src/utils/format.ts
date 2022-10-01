import { format, isValid, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

/**
 * Returns formatted dateTime string from ISO dateTime string.
 * Returns empty string when argument is unexpected dateTime
 */
export const formatDateTime = (
  value: string,
  options: { format: string }
): string => {
  const parsedDate = parseISO(value);

  if (!isValid(parsedDate)) return "";

  return format(parsedDate, options.format, { locale: ja });
};
