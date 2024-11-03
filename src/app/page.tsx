import styles from "./page.module.css";
import { Home } from '@/pages/home'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
