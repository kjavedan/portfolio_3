import PropTypes from 'prop-types';

export default function ProjectDescription({ description, features }) {
  return (
    <div className="mt-30">
      <h3 className="project-sections__title">Description</h3>
      <div className="mt-4 bg-[--clr-gray-bg] px-4 py-6 lg:p-10 rounded-30px">
        <p className="text-[--clr-text-body] font-300">{description}</p>

        {features?.length && (
          <div>
            <h4 className="mt-4">Features</h4>
            <ul className="mt-2 text-sm flex flex-col gap-1 text-[--clr-text-body]">
              {features?.map((feature, index) => (
                <li key={index} className="list-disc ml-3.5">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

ProjectDescription.propTypes = {
  features: PropTypes.array,
  description: PropTypes.string,
};
