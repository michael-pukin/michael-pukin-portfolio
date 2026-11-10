import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs-as-Code Workflows',
    Svg: require('@site/static/img/tech-tool-knowledge.svg').default,
    description: (
      <>
Experience with Git, GitHub, Markdown, CI/CD-integrated documentation workflows, and modern Docs-as-Code practices.      </>
    ),
  },
  {
    title: 'Software & API Documentation',
    Svg: require('@site/static/img/diverse-experience.svg').default,
    description: (
      <>
         Developed API documentation, user guides, online help systems, procedures, and technical content for complex software products.
      </>
    ),
  },
  {
    title: 'Content Strategy',
    Svg: require('@site/static/img/love-to-learn.svg').default,
    description: (
      <>
       Organizing content for clarity, usability, and maintainability while collaborating with developers, SMEs, and business stakeholders.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
