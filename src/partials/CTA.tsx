import { Newsletter, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <span style={{ color: '#0a3859' }}>联系我们 Contact Information</span>
      }
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate."
    />
  </Section>
);

export { CTA };
