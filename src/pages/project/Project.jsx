import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../data';
import { useResponsive } from 'src/hooks/use-responsive';

import ProjectDesign from './project-design';
import ProjectTakeaway from './project-takeaways';
import ProjectHeroMobile from './project-hero-mobile';
import ProjectHeroDesktop from './project-hero-desktop';
import ProjectDescription from './project-description';
import ProjectProblemSolution from './project-problem-solution';

export default function Project() {
  const params = useParams();
  const { isDesktop } = useResponsive();

  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    const currProject = projectsData.find(
      (project) => project.path === params.projectName
    );
    setProjectData(currProject);
  }, [params]);

  return (
    <div className="p-4 lg:px-0 pb-50">
      {isDesktop ? (
        <ProjectHeroDesktop
          title={projectData.title}
          siteUrl={projectData.siteUrl}
          videoSrc={projectData.videoSrcDesktop}
          techStack={projectData.techStack}
        />
      ) : (
        <ProjectHeroMobile
          title={projectData.title}
          siteUrl={projectData.siteUrl}
          videoSrc={projectData.videoSrcMobile}
          techStack={projectData.techStack}
        />
      )}

      <ProjectTakeaway takeaway={projectData.takeaway} />

      <ProjectDesign designImages={projectData.designImages} />

      <ProjectDescription
        description={projectData.description}
        features={projectData?.features}
      />

      <ProjectProblemSolution
        problem={projectData.problemAndSolution?.problem}
        solution={projectData.problemAndSolution?.solution}
      />
    </div>
  );
}
