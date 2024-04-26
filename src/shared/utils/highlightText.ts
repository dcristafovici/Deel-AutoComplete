export const highlightText = (text: string, query: string) => {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<i>$1</i>");
};
