import Head from "next/head";
import Layout, { name } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GitHubLink, LinkedInLink, ResumeLink } from "../components/linkIcon";
import NavLink from "../components/navLink";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name} - Portfolio</title>
        <meta name="description" content="Maximiliano Mendez - Front-End Developer Portfolio" />
      </Head>
      <section className={utilStyles.heroSection}>
        <div className={utilStyles.heroContent}>
          <h1 className={utilStyles.heroTitle}>
            <span className={utilStyles.gradientText}>Maximiliano Mendez</span>
          </h1>
          <p className={utilStyles.heroSubtitle}>
            Front-End Developer
          </p>
          <p className={utilStyles.heroDescription}>
            Especializado en React, Next.js y tecnologías modernas
          </p>
          <div className={utilStyles.socialLinks}>
            <GitHubLink size="2x" />
            <LinkedInLink size="2x" />
          </div>
          <div className={utilStyles.ctaSection}>
            <NavLink path="resume.pdf" text="Descargar CV" />
          </div>
        </div>
        <div className={utilStyles.codeSection}>
          <p className={utilStyles.lightText}>map(), filter(), reduce() fan</p>
          <p className={utilStyles.comment}>// If the code works, don't touch it...</p>
        </div>
        
        <div className={utilStyles.techStack}>
          <h2 className={utilStyles.techTitle}>Tecnologías</h2>
          <div className={utilStyles.techGrid}>
            <div className={utilStyles.techItem}>
              <span className={utilStyles.techIcon}>⚛️</span>
              <span className={utilStyles.techName}>React</span>
            </div>
            <div className={utilStyles.techItem}>
              <span className={utilStyles.techIcon}>🚀</span>
              <span className={utilStyles.techName}>Next.js</span>
            </div>
            <div className={utilStyles.techItem}>
              <span className={utilStyles.techIcon}>📱</span>
              <span className={utilStyles.techName}>Flutter</span>
            </div>
            <div className={utilStyles.techItem}>
              <span className={utilStyles.techIcon}>🎯</span>
              <span className={utilStyles.techName}>Dart</span>
            </div>
            <div className={utilStyles.techItem}>
              <span className={utilStyles.techIcon}>⚡</span>
              <span className={utilStyles.techName}>TypeScript</span>
            </div>
            <div className={utilStyles.techItem}>
              <span className={utilStyles.techIcon}>🎨</span>
              <span className={utilStyles.techName}>CSS</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
