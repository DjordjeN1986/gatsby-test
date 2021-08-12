import Layout from '../../components/Layout';
import styles from '../../styles/projects.module.css';
import React from 'react';

export default function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites</h3>
      </div>
    </Layout>
  );
}
