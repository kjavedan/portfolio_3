import PropTypes from 'prop-types';
import Image from 'src/components/image';

export default function ProjectDesign({ designImages }) {
  console.log(designImages);
  return (
    <div className="mt-40">
      <h3 className="project-sections__title">Design</h3>
      {designImages?.map((image, index) => (
        <div
          key={index}
          className="h-80vh md:h-75vh min-h-150 mt-4 mb-20 w-full rounded-30px overflow-hidden"
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
