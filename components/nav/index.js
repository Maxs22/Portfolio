import Link from "next/link";
import NavLink from "../navLink";
import utilStyles from "../../styles/utils.module.css";
import styles from "./nav.module.css";
export default function Nav({ activePage }) {
  return (
    <nav className={styles.navBar}>
      <h1 className={utilStyles.headingXl}>
        <Link href="/" className={utilStyles.maxsclass}>
          MaxsDev
        </Link>
        .<span className={utilStyles.lightYellow}>{activePage || "is"}</span>()
      </h1>
      <div className={styles.navMenu}>
        <NavLink path="about" />
        <NavLink path="work" />
        <NavLink path="contact" />
      </div>
    </nav>
  );
}
