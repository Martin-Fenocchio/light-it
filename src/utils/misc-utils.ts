export const formatDate = (
  date: string | Date | number,
  params?: { noCut?: boolean }
) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${d
    .getFullYear()
    .toString()
    .substring(params?.noCut ? 0 : 2)}`;
};
