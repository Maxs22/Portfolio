import Head from "next/head";
import Layout, { name } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import GitHubLink from "../components/githubLink";
// import LinkedInLink from "../components/linkedInLink";
import { GitHubLink, LinkedInLink, ResumeLink } from "../components/linkIcon";
import NavLink from "../components/navLink";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <section>
        {/* <p>Download resume: <ResumeLink size="2x"/></p> */}
        <p>
          <GitHubLink size="2x" /> <LinkedInLink size="2x" />
        </p>
        {/* <p><FontAwesomeIcon icon={faCoffee}/></p> */}
        {/* <p>
          &#123; Full stack developer &#125;
        </p> */}
        <p>Front-End Web Developer</p>
        <p className={utilStyles.lightText}>map(), filter(), reduce() fan</p>
        <p className={utilStyles.comment}>// If the code works, don't touch it...</p>
        <p>
          <NavLink path="resume.pdf" text="downloadCV" />
        </p>
      </section>
    </Layout>
  );
}
