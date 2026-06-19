import { Layout } from '../../components/Layout/Layout';
import { ConnectButton } from '../../components/ConnectForm/ConnectButton';
import heroImage from '../../assets/hero.png';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.mainContainerInfo}>
          <span className={styles.mainRectangle} aria-hidden="true" />
          <div className={styles.h1Container}>
            <h1 className={styles.mainH1}>My Name is Aleksandra,</h1>
            <h1 className={styles.mainH2}>I'm a QA Engineer and Web Development student</h1>
          </div>
          <p className={styles.mainP}>
            Currently, I'm expanding my skills in JavaScript and TypeScript to build reliable and
            user-friendly websites.
          </p>
          <ConnectButton />
        </div>
        <img className={styles.mainPhoto} src={heroImage} alt="Оксана" />
      </section>
    </Layout>
  );
};
