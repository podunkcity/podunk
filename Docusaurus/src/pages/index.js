import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickAccess from '@site/src/components/QuickAccess';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/appendix-a/">
            Cheat Sheet: 1 - 60; minutes ⏱️     
          </Link>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            // to="/docs/intro">
            to="https://docusaurus.io/">
            Docusaurus Central: 1 - &infin; minutes ⏱️
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
        <HomepageFeatures />
        <QuickAccess />
      </main>
    </Layout>
  );
}

// ZCZC
// REV04: Wed 14 Jun 2023 14:00
// REV03: Tue 30 May 2023 08:00
// REV02: Tue 23 May 2023 20:00
// REV01: Tue 09 May 2023 10:00
// START: Sun 07 May 2023 21:00

