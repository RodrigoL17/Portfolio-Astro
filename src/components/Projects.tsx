import ProjectCard from "./ProjectCard.tsx";
import { useState } from "react";
import type { Projects } from "../types";
import type { lenguages } from "../types";
import { useGetTechs } from "../hooks/useGetTechs";
import { PROJECTS } from "../const/projects";
import { btnStyles } from "../pages/index.astro";
import Icon from "./Icon.tsx";
import LinkBtn from "./LinkBtn.tsx";

export default function Projects({ lenguage = "es" }: { lenguage: lenguages }) {
  const initialState = PROJECTS;
  const filteredTechs = useGetTechs();
  const [projects, setProjects] = useState<Projects[]>(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const [search, ...checkboxes] = event.target;
    const checkedboxes: HTMLInputElement[] = checkboxes.filter(
      (checkbox: HTMLInputElement) => checkbox.checked === true
    );

    // Obtén una copia de los proyectos iniciales para trabajar con ellos
    let filteredProjects = [...initialState];

    // Aplica filtros solo si hay algo en el campo de búsqueda o se han marcado checkboxes
    if (search.value !== "" || checkedboxes.length > 0) {
      filteredProjects = filteredProjects.filter((project) => {
        // Filtro por cadena de búsqueda
        const matchesSearch = project.title[lenguage]
          .toLowerCase()
          .includes(search.value.toLowerCase());
        console.log("matchesSearch", matchesSearch);

        // Filtro por tecnologías seleccionadas
        const matchesTechs = checkedboxes.every((checkbox) =>
          project.tecnologies.includes(checkbox.value)
        );
        console.log("matchesTechs", matchesTechs);

        // Devuelve true si coincide con la cadena de búsqueda y todas las tecnologías seleccionadas
        return matchesSearch && matchesTechs;
      });
    }

    // Actualiza el estado de los proyectos filtrados
    setProjects(filteredProjects);
  };

  return (
    <main className="h-full grid grid-cols-9 grid-rows-6 text-white">
      <LinkBtn
        styles="absolute top-12 left-6"
        href={lenguage === "en" ? "/en" : "/"}
        ariaLabel="Home"
        title="Inicio"
      >
        <Icon icon="Home" width="32" />
      </LinkBtn>
      <h1 className="text-5xl col-span-10 row-span-1 leading-none text-center self-center">
        {lenguage === "en" ? "Projects" : "Proyectos"}
      </h1>
      <aside className="col-span-2 row-span-5 px-6 py-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" action="">
          <div className="flex flex-col gap-4">
            <label htmlFor="search" className="uppercase">
              {lenguage === "en" ? "Search" : "Buscar"}
            </label>
            <input className="text-black py-1 px-2" type="text" id="search" />
          </div>
          <label className="uppercase">
            {lenguage === "en" ? "Technologies" : "Tecnologías"}
          </label>
          <div className="flex flex-col gap-2">
            {filteredTechs.map((tec) => {
              return (
                <div
                  key={tec}
                  className="flex items-center w-full justify-between"
                >
                  <label className="cursor-pointer" htmlFor={tec}>- {tec}</label>
                  <input type="checkbox" name={tec} id={tec} value={tec} />
                </div>
              );
            })}
          </div>
          <button className={btnStyles}>
            {lenguage === "en" ? "Search" : "Buscar"}
          </button>
        </form>
      </aside>
      <section
        id="scrollbar-section"
        className="overflow-y-auto col-span-7 row-span-5 px-20 py-6 flex flex-col gap-6 "
      >
        {projects.length >0 ? projects.map(
          ({
            title,
            description,
            imgUrl,
            tecnologies,
            gitHubLink,
            urlLink,
          }) => {
            return (
              <ProjectCard
                key={title[lenguage]}
                title={title}
                description={description}
                imgUrl={imgUrl}
                tecnologies={tecnologies}
                gitHubLink={gitHubLink}
                urlLink={urlLink}
                lenguage={lenguage}
              />
            );
          }
        ):
          <div className="text-center text-2xl flex flex-col gap-8 items-center">
            <Icon icon="SadEmoji" width="80" />
            {lenguage === "en" ? "No projects found" : "No hay proyectos"}
          </div>}
      </section>
    </main>
  );
}
