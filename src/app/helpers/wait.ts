/**
 *
  @param  timeout {number} Time you want to stop executing the code, in milliseconds
A simple function to stop the execution of the code.
 */
export const wait = async (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
