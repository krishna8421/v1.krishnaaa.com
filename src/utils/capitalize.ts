export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const capitalizeFirstLetterOfEveryWord = (text: string) => {
  // return text.replace(/\w\S*/g, (txt) => {
  //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  // });
  return text
    .split(" ")
    .map((_) => _[0].toUpperCase() + _.slice(1))
    .join(" ");
};
