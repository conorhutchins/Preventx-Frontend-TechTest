export function deleteDayOfWeekFromDate(date: string): string {
    if (!date) return "Unknown";
  
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
  
    return new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
  }
  