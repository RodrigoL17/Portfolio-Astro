
import { PROJECTS } from "../const/projects";
export const useGetTechs = () => {
    const allTecs = PROJECTS.map((project) => {
        return project.tecnologies;
      });
      const flattedAllTecs = allTecs.flat();
      const filteredTecs = [...new Set(flattedAllTecs)];
      return filteredTecs
}