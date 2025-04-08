export function getStartDateFromFilter(days: number): string {
  const now = new Date();
  now.setDate(now.getDate() - days);
  return now.toISOString().split("T")[0];
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
}
