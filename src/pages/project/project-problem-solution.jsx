import PropTypes from 'prop-types';

export default function ProjectProblemSolution({ problem, solution }) {
  return (
    <div className="mt-30">
      <h3 className="project-sections__title">What it does?</h3>

      <div className="mt-4 bg-[--clr-gray-bg] px-4 pb-6 pt-4 lg:pt-3 lg:p- rounded-30px lg:flex items-center gap-30">
        <div className="lg:p-4 xl:p-6 xl:pt-4">
          <h4 className="text-[--clr-text-subtitle] font-600 my-3 text-xl">
            Problem
          </h4>
          <p className="text-[--clr-text-body] font-300">{problem}</p>
        </div>
        <div className="mt-8 lg:mt-0 lg:p-4 xl:p-6 xl:pt-4">
          <h4 className="text-[--clr-text-subtitle] font-600 my-3 text-xl">
            Solution
          </h4>
          <p className="text-[--clr-text-body] font-300">{solution}</p>
        </div>
      </div>
    </div>
  );
}

ProjectProblemSolution.propTypes = {
  problem: PropTypes.string,
  solution: PropTypes.string,
};
