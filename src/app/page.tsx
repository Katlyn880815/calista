import Image from "next/image";
import styles from "./page.module.css";

import Navigation from "@/components/common/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.main}></main>
    </>
  );
}
