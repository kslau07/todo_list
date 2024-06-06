import { localData } from "./index";

export const todosFilteredByView = function (timeframe) {
  const foo = localData.projects.filter((project) => true);
  console.log(foo);
};
