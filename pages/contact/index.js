import Head from "next/head";
import Layout, { name } from "../../components/layout";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact({size}) {
  return (
    <Layout activePage="contact">
      <Head>
        <title>{name} - Contact</title>
      </Head>
      <section>
        <a 
        className={styles.linkIconPrimary}
        href="mailto:maximilianomendez@hotmail.com.ar"
        >
          <FontAwesomeIcon icon={faEnvelope} size={size} />
        </a> 
        <a
          className={styles.linkIconPrimary}
          href="https://github.com/Maxs22"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size={size} />
        </a>
        <a
          className={styles.linkIconPrimary}
          href="https://www.linkedin.com/in/maximiliano-mendez/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size={size} />
        </a>
      </section>
    </Layout>
  );
}
