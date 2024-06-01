import PropTypes from 'prop-types';
import Image from 'src/components/image';

export default function ProjectDesign({ designImages }) {
  return (
    <div className="mt-30">
      <h3 className="project-sections__title">Design</h3>
      {designImages?.map((image, index) => (
        <div
          key={index}
          className="h-80vh md:h-75vh min-h-150 mt-4 mb-10 w-full rounded-30px overflow-hidden"
        >
          <Image src={image} alt={'bomei play'} />
        </div>
      ))}
    </div>
  );
}

ProjectDesign.propTypes = {
  designImages: PropTypes.array,
};
