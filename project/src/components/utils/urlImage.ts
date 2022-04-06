export const urlImage = (name: string) => {
  return name.split('_').slice(3).join('_');
};