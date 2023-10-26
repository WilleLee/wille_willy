import styles from "./page.module.scss";
import Home from "./Home";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
