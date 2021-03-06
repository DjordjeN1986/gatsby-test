import Layout from '../components/Layout.js';
import styles from '../styles/home.module.css';
import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>ReactJS based in Belgrade.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio
          </Link>
        </div>
        <img src="/banner.png" alt="site-banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  );
}
