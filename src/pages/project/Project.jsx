import { useResponsive } from 'src/hooks/use-responsive';

import ProjectHeroMobile from './project-hero-mobile';
import ProjectHeroDesktop from './project-hero-desktop';
import ProjectDesign from './project-design';
import ProjectDescription from './project-description';
import ProjectProblemSolution from './project-problem-solution';

export default function Project() {
  const { isDesktop } = useResponsive();

  return (
    <div className="p-4 lg:px-0 pb-50">
      {isDesktop ? <ProjectHeroDesktop /> : <ProjectHeroMobile />}

      <ProjectDesign />
      <ProjectDescription />
      <ProjectProblemSolution />
    </div>
  );
}
