import Link from "next/link";
import NavLink from "../navLink";
import utilStyles from "../../styles/utils.module.css";
import styles from "./nav.module.css";
export default function Nav({ activePage }) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBrand}>
        <Link href="/" className={styles.brandLink}>
          <span className={styles.brandText}>MaxsDev</span>
        </Link>
      </div>
      <div className={styles.navMenu}>
        <NavLink path="about" text="About" />
        <NavLink path="work" text="Work" />
        <NavLink path="contact" text="Contact" />
      </div>
    </nav>
  );
}
