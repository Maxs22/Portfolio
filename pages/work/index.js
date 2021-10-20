import Head from "next/head";
import Styles from '../../styles/Projects.module.css';
import Layout, { name } from "../../components/layout";
import ProjectsOption from "../../components/Projects";
import memorama from "../../public/images/ImageProjects/memorama.png";
import Heroes from "../../public/images/ImageProjects/Heroes.png";
import Juego from "../../public/images/ImageProjects/Juego.png";
import Aerolab from "../../public/images/ImageProjects/Aerolab.png";
import Portfolio from "../../public/images/ImageProjects/Portfolio.png";
import pokemon from "../../public/images/ImageProjects/pokemon.png";




export default function Experience() {
  return (
    <Layout activePage="work">
      <Head>
        <title>{name}</title>
      </Head>
      <div className={Styles.projects__options}>
        <ProjectsOption
              title="Challenge-Pokedex"
              img={pokemon}
              description="pokedex app."
              tools="HTML, SCSS, JavaScript, React.js, Next.js  "
              live="https://pokedex-challenge-jemersoft.vercel.app/"
              code="https://github.com/Maxs22/pokedex-challenge-Jemersoft"
            />
        <ProjectsOption
            title="Portfolio"
            img={Portfolio}
            description="personal portfolio showing about me and my work."
            tools="HTML, CSS, JavaScript,React.js, Next.js  "
            live="https://portfolio-maxs.vercel.app/"
            code="https://github.com/Maxs22/Portfolio"
          />
          <ProjectsOption
          title="Team of heroes"
          img={Heroes}
          description="create your team of heroes or villains."
          tools="HTML, CSS, JavaScript, React, API-Fetch"
          live="https://heroes-one.vercel.app/home"
          code="https://github.com/Maxs22/heroes"
        />
        <ProjectsOption
          title="Aerolab"
          img={Aerolab}
          description="Aerolab company challenge - fake shop."
          tools="HTML, SCSS, JavaScript, React, API-Fetch"
          live="http://aerolab-challenge.surge.sh/"
          code="https://github.com/Maxs22/Aerolab-Challenge"
        />
        <ProjectsOption
          title="Play"
          img={Juego}
          description="Rock paper scissors game."
          tools="HTML, CSS, JavaScript"
          live="https://juego-seven.vercel.app/"
          code="https://github.com/Maxs22/juego"
        />
        <ProjectsOption
          title="Memorama"
          img={memorama}
          description="Memory game - find the match."
          tools="HTML, CSS, JavaScript"
          live="https://memorama-five.vercel.app/"
          code="https://github.com/Maxs22/memorama"
        />
        </div>
    </Layout>
  );
}
