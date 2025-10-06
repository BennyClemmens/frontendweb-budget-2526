// src/pages/about/About.jsx
import { faker } from '@faker-js/faker';

const About = () => (
  <div>
    <h1 className="text-4xl mb-4">Over ons</h1>
    <div>
      <p className="mb-4">{faker.lorem.paragraph(10)}</p>
      <p>{faker.lorem.paragraph(10)}</p>
    </div>
  </div>
);

export default About;
