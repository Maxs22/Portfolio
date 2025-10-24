import Link from "next/link";
import styles from "./navLink.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function NavLink({ path, text }) {
  return (
    <Link href={"/" + path} className={styles.navlink}>
      {text || path}
    </Link>
  );
}
