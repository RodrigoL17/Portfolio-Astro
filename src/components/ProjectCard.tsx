import type { Projects } from "../types";
import type { IconsPaths } from "./IconsPath";
import { btnStyles, commonStyles } from "../pages/index.astro";
import Icon from "./Icon";
import LinkBtn from "./LinkBtn";
import type { lenguages } from "../types";

interface Props extends Projects{
  lenguage: lenguages
}

export default function ProjectCard({
  title,
  description,
  imgUrl,
  tecnologies,
  gitHubLink,
  urlLink,
  lenguage
}: Props) {
  return (
    <article className={`${commonStyles} text-white flex gap-4 items-center`}>
      <div className="rounded-lg bg-white/50 w-60 h-[135px] aspect-video">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={imgUrl}
          alt={title[lenguage]}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">{title[lenguage]}</h2>
        <ul className="flex gap-3">
          {tecnologies.map((tec: keyof typeof IconsPaths) => (
            <li key={tec}><Icon icon={tec} width="24" /></li>
          ))}
        </ul>
        <p className="text-sm">{description[lenguage]}</p>
        <div className="flex gap-4">
          <LinkBtn
            href={gitHubLink}
            styles={btnStyles}
            target="_blank"
            ariaLabel="Link to GitHub Repository"
            title="GitHub Repository"
          >
            <Icon icon="GitHub" width="20" />
          </LinkBtn>
          {urlLink && (
            <LinkBtn href={urlLink} styles={btnStyles} target="_blank" ariaLabel="Link to Project" title="Project">
              <Icon icon="Globe" width="24" />
            </LinkBtn>
          )}
        </div>
      </div>
    </article>
  );
}
