import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Guias de ayuda</h1>
        <p className="hero__subtitle">Bievenidos, estas guias tienen el objetivo de ayudarlos en la cursada.</p>
        <p>Les habla Santiago, si quieres que estemos en contacto, puedes seguirme en mi <a style={{color: "#FFF"}} target='_blank' href='https://www.linkedin.com/in/santiago-quipildorjs/'>LinkedIn</a></p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/arquitectuta-de-computadoras">
            Quiero ver las guias
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
