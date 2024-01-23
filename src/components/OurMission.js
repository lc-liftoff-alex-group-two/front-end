import React from 'react';
import './OurMission.css';

const OurMission = () => {
  return (
    <div className="our-mission">
    <h2 className="heading-primary">Our Mission</h2>
    <div className="mission-text-container">
      <p>Giving creates connection, evokes gratitude, and has been shown to promote health benefits. In a series of studies conducted by Harvard, it was found that people are in fact happier when they spend their money on others vs. themselves.
Within today's society we are seeing a rapid growth in consumerism. Our team believes that adding avenues for us to give back through our consumerism will provide increased effort and change.
Our website was built to create greater access to consumer goods that donate towards important initiatives. We only feature products that give back with every purchase you make. Our hope is that people 
will choose these types of products over others and join our mission to further aid and develop our communities around the world. Each product is tied
to organizations and companies that aim to make the world a better place. We are always welcoming new products to our site, so if you have questions or would like to be featured please reach out to us by filling out the "contact us" form on the Contact Us page. Together we can make a difference in the lives of many. </p>
    </div>
    <div className="contributors-container">
        <h3>Our Contributors</h3>
        <div className="contributors">
          <div className="contributor">
            <img src="/images/ContributorA.jpg" alt="Contributor 1" />
            <p>Haripriya</p>
          </div>
          <div className="contributor">
            <img src="/images/ContributorB.jpg" alt="Contributor 2" />
            <p>Samantha</p>
          </div>
          <div className="contributor">
            <img src="/images/ContributorC.jpg" alt="Contributor 3" />
            <p>Lavanya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;