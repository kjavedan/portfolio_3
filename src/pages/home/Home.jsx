import Hero from './hero';
import SectionWrapper from './section-wrapper';
import ReactFullpage from '@fullpage/react-fullpage';
import Work from './work';

const Home = () => {
  const homeSectionsData = [
    { id: 1, component: <Hero /> },
    { id: 2, component: <Work /> },
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
