interface Props {
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    styles?: string;
    content?: string;
    filename?: string;
    ariaLabel?: string;
    title?: string;
    children?: React.ReactNode;
  }

  export default function LinkBtn({children, href, target, styles, content, filename, ariaLabel, title}: Props) {
    return (
      <a
        href={href}
        target={target}
        className={styles}
        download={filename}
        aria-label={ariaLabel}
        title={title}
      >
        {children || content}
      </a>
    );
  }