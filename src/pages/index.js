import React from "react";
import styles from "./home.module.scss";
import clsx from "clsx";
import randomInteger from "random-int";

const PARTICLE_COUNT = 64;
const particlesArray = Array.from({ length: PARTICLE_COUNT });

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div className={clsx(styles.leftGroup, styles.petalGroup)}>
        {particlesArray.map((_, i) => (
          <div
            key={i}
            className={clsx(styles.petal, styles.leftPetal)}
            style={{
              left: `${randomInteger(0, 35)}%`,
              bottom: `${randomInteger(0, 75)}%`,
              width: `${8 + Math.random() * 8}px`,
              height: `${8 + Math.random() * 8}px`,
                // animationDelay: `${randomInteger(0, 4)}s`,
              animationDuration: `${randomInteger(6, 12)}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>
      <div className={clsx(styles.rightGroup, styles.petalGroup)}>
        {particlesArray.map((_, i) => (
          <div
            key={i}
            className={clsx(styles.petal, styles.rightPetal)}
            style={{
              right: `${Math.random() * 35}%`,
              top: `${randomInteger(25, 100)}%`,
              width: `${8 + Math.random() * 8}px`,
              height: `${8 + Math.random() * 8}px`,
              // animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${randomInteger(6, 12)}s`,
                opacity: Math.random(),
            }}
          />
        ))}
      </div>
      <div className={styles.page}>
        <section className={styles.content}>
          <h1 className={styles.mainTitle}>Boda Bálint</h1>
          <hr className={styles.titleSeparator} />
          <p className={styles.subtitle}>Fullstack developer</p>
        </section>

        <section>
          <ul className={styles.actionList}>
            <li>
              <button className={styles.item}>Study materials</button>
            </li>
            <li>About</li>
          </ul>
        </section>
        <div className={styles.backgroundOverlay}></div>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </div>
    </div>
  );
}
