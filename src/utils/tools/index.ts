export const typeX: (x: any) => string = (x: any) => {
  return Object.prototype.toString.call(x);
}