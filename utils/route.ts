export const isActiveRoute = (path: string) => {
  const route = useRoute();
  return route.fullPath === path;
};
