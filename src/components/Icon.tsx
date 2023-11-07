import { IconsPaths, ViewBoxes } from "./IconsPath";

interface Props {
  icon?: keyof typeof IconsPaths;
  fill?: string;
  width?: string;
  height?: string;
  styles?: string;
  title?: string;
}

export default function Icon({
  icon,
  fill = "currentColor",
  width = "32",
  height = width,
  styles,
  title,
}: Props) {
  const iconPath = IconsPaths[icon];
  const viewBox = ViewBoxes[icon];

  return (
    <div title={title}>
      <svg
        className={styles}
        width={width}
        height={height}
        fill={fill}
        viewBox={viewBox}
      >
        <g dangerouslySetInnerHTML={{__html:iconPath}} />
      </svg>
    </div>
  );
}
