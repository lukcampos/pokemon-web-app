/**
 *
  @param  str {string} the string that you want check
A simple function that check if string is Empty
 */
export const isEmpty = (str: string) => {
  return (!str || 0 === str.length);
}
