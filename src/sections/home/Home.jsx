import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <Hero />
      <Info />
    </section>
  );
};

export default Home;
