import Image from "next/image";
import styles from "./page.module.scss";
import Aside from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <div>
      <div className={styles.mainContent}>
        <Aside />
        <Header />
      </div>
    </div>
  );
}
