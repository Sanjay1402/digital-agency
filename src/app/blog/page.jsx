import React from "react";
import styles from "./page.module.css";
import Link from "next/link";



export default function Blog () {
  return (
    <div className={styles.mainContainer}>
          <div className={styles.imageContainer}>
          
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>First Blog</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, magnam architecto fugiat voluptatem ipsum iure libero error laudantium aliquid incidunt.</p>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Second Blog</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, magnam architecto fugiat voluptatem ipsum iure libero error laudantium aliquid incidunt.</p>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Third Blog</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, magnam architecto fugiat voluptatem ipsum iure libero error laudantium aliquid incidunt.</p>
          </div>
    </div>
  );
};