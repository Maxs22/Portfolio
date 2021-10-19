import Styles from '../styles/Projects.module.css';
import Image from 'next/image';

export default function ProjectsOption({ title, img, description, tools, live, code }) {
  return (
    <div className={Styles.projects__option}>
      <div className={Styles.projects__optionImage}>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <Image
            src={img}
            layout="fill"
            className={Styles.projects__imageSource}
          />
        </a>
      </div>
      <div className={Styles.projects__optionDescription}>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <p>{tools}</p>
        <div className={Styles.projects__optionButtons}>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <div className={Styles.projects__optionButton}>Live Website</div>
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer">
            <div className={Styles.projects__optionButton}>Github Repo</div>
          </a>
        </div>
      </div>
    </div>
  );
}