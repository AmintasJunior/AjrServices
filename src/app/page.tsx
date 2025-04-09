
import { CardsServices } from "./components/CarrdsServices";
import { HeaderPage } from "./components/HeaderPage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderPage></HeaderPage>
      <CardsServices></CardsServices>
    </div>
  );
}