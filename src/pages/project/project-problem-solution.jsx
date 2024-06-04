import PropTypes from 'prop-types';

export default function ProjectProblemSolution({
  intro,
  stages,
  problems,
  solution,
  problemsIntro,
}) {
  return (
    <div className="mt-30">
      <h3 className="project-sections__title">What it does?</h3>

      <div className="mt-4 bg-[--clr-gray-bg] px-4 pb-6 pt-4 lg:pt-3 rounded-30px">
        <div className="lg:p-4 xl:p-6 xl:pt-4">
          <p className="mb-7">{intro}</p>
          {stages.map((stage) => (
            <div key={stage.stage}>
              <div className="mb-2 mt-6">
                <h5>Stage {stage.stage}</h5>
                <span className="block text-sm">{stage.title}</span>
              </div>
              {stage.questions && (
                <ul>
                  {stage.questions.map((question, index) => (
                    <li
                      key={index}
                      className="list-disc ml-4 text-sm text-[--clr-text-body] mt-2"
                    >
                      {question}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p>{problemsIntro}</p>
          <h3 className="mt-10">
            Common Problems and chikrice solution to them
          </h3>
          <ul>
            {problems.map((item, index) => (
              <li
                key={index}
                className="list-decimal-inside ml-1 text-sm text-[--clr-text-body] mt-4 "
              >
                <span className=" block text-[--clr-text-subtitle] lowercase">
                  problem: {item.problem}
                </span>
                <span className="block mt-1 lowercase">
                  solution: {item.answer}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 lg:p-4 xl:p-6 xl:pt-4">
          <h4 className="text-[--clr-text-subtitle] font-600 my-3 text-xl">
            Conclusion
          </h4>
          <p className="text-[--clr-text-body] font-300">{solution}</p>
        </div>
      </div>
    </div>
  );
}

ProjectProblemSolution.propTypes = {
  intro: PropTypes.string,
  stages: PropTypes.array,
  problems: PropTypes.array,
  solution: PropTypes.string,
  problemsIntro: PropTypes.string,
};
