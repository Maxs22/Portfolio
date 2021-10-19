import Head from "next/head";
import Layout, { name } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <Layout activePage="about">
      <Head>
        <title>{name} - About</title>
      </Head>
      <section>
        <p>I am a full stack developer from Buenos Aires, Argentina</p>
        <p className={utilStyles.lightText}>
        I started my journey in the world of computers from an early age, I am now 28 years old, 
        pursuing my degree in Information Technology Analyst and Communication. Web development is my center of interest, 
        I have always liked the idea of ​​multiplatform development, 
        what web technology like Javascript allows me to do. I also like creating interactive UI components for better UX
        </p>
        <article>
          <h2>Front End Development</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              <div>JavaScript</div>
              <div>CSS3</div>
              <div>HTML5</div>
            </div>
            <div>
              <div>React / Next JS</div>
              <div>Kendo UI, FusionCharts</div>
            </div>
            <div>
              <div>Bootstrap</div>
              <div>SASS/SCSS</div>
            </div>
          </div>
        </article>
        <article>
          <h2>Back End Development</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              <div>PHP</div>
              <div>Node.js</div>
            </div>
            <div>
              <div>T-SQL</div>
              <div>MySQL</div>
              <div>MongoDB</div>
            </div>
            <div>
              <div>WAMP</div>
              <div>IIS</div>
              <div>Heroku</div>
              <div>Vercel</div>
            </div>
          </div>
        </article>
        <article>
          <h2>Other Tools / Skills</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              <div>Git / GitHub</div>
              <div>Node.js</div>
            </div>
            <div>
              <div>VS Code</div>
              <div>Visual Studio</div>
            </div>
            <div>
              <div>Jira</div>
              <div>Bitbucket</div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}
