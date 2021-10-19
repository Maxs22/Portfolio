import Link from "next/link";
import styles from "./navLink.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function NavLink({ path, text }) {
  return (
      <Link href= {"/" + path}>
        <a className={styles.navlink}>.<span className={utilStyles.lightYellow}>{text || path}</span>()</a>
      </Link>

  );
}
