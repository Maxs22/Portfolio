import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Nav from "../../components/nav";
import ReactTypingEffect from "react-typing-effect";

export const name = "Maxs-Dev";
export const siteTitle = "Portfolio";

export default function Layout({ children, activePage }) {
  return (
    <div className={styles.container}>
      {/* <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="MaximiliaN Developer Portfolio"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={name + "'s " + siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Nav activePage={activePage}></Nav>
      </header>
      <main className={styles.main}>
      <h1> <ReactTypingEffect className="typingeffect" text={['Welcome, I´m' , '{ Maximiliano Mendez };']} speed={100} eraseDelay={900} />
          </h1>
     {children}
      </main>
      {activePage && (
        <footer className={styles.footer}>
          <Link href="/">
            <a>
              <span className={utilStyles.maxsclass}>return</span>;
            </a>
          </Link>
        </footer>
      )}
    </div>
  );
}
