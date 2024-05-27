import SectionWrapper from './section-wrapper';
import ReactFullpage from '@fullpage/react-fullpage';

import Hero from './hero';
import Work from './work';
import AboutMe from './me';

// ----------------------------------------------

const Home = () => {
  const homeSectionsData = [
    { id: 1, component: <Hero /> },
    { id: 2, component: <Work /> },
    { id: 3, component: <AboutMe /> },
  ];

  return (
    <ReactFullpage
      navigation
      credits={{ label: '© 2024 KJ. All rights reserved.' }}
      render={() => {
        return (
          <div className="">
            {homeSectionsData.map((section) => (
              <SectionWrapper key={section.id}>
                {section.component}
              </SectionWrapper>
            ))}
          </div>
        );
      }}
    />
  );
};

export default Home;
