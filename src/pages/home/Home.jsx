import Section from './Section';
import MeKhaled from './me-khaled';
import ReactFullpage from '@fullpage/react-fullpage';
import Work from './work';

const Home = () => {
  const homeSectionsData = [
    { id: 1, component: <MeKhaled /> },
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
              <Section key={section.id}>{section.component}</Section>
            ))}
          </div>
        );
      }}
    />
  );
};

export default Home;
