import Link from "./link";

import styles from "./menu-item.styles";

export default ({
  onHover = () => {},
  children,
  slug,
  href,
  middleware,
  sameRouteFallback,
  modifier,
}) => (
  <li className={`menu-item ${modifier}`} onMouseEnter={() => onHover(slug)}>
    <Link {...{ href, sameRouteFallback }} middleware={middleware} delay={1400}>
      <h2 className="title">{children}</h2>
    </Link>
    <style jsx>{styles}</style>
    <style jsx>{`
      .menu-item :global(a) {
        display: block;
        height: 100%;
      }
    `}</style>
  </li>
);
