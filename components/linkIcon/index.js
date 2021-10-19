import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./linkIcon.module.css";
export const GitHubLink = function GitHubLink({ size }) {
  return (
    <a
      className={styles.linkIconPrimary}
      href="https://github.com/Maxs22"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} size={size} />
    </a>
  );
};

export const LinkedInLink = function LinkedInLink({ size }) {
  return (
    <a
      className={styles.linkIconPrimary}
      href="https://www.linkedin.com/in/maximiliano-mendez/"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} size={size} />
    </a>
  );
};

export const ResumeLink = function ResumeLink({ size }) {
  return (
    <a
      className={styles.linkIconPrimary}
      href="https://www.linkedin.com/in/maximiliano-mendez/"
      target="_blank"
    >
      <FontAwesomeIcon icon={faFile} size={size} />
    </a>
  );
};
