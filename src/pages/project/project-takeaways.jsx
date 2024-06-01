import PropTypes from 'prop-types';

export default function ProjectTakeaway({ takeaway }) {
  return (
    <div className="mt-40">
      <h3 className="project-sections__title">Takeaway</h3>
      <div className="mt-4 bg-[--clr-gray-bg] px-4 py-6 lg:p-10 rounded-30px">
        <p className="text-[--clr-text-body] font-300">{takeaway}</p>
      </div>
    </div>
  );
}

ProjectTakeaway.propTypes = {
  takeaway: PropTypes.string,
};
