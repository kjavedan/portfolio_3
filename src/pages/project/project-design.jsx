import Image from 'src/components/image';
import bomei from 'src/assets/bomei.png';
export default function ProjectDesign() {
  return (
    <div className="mt-40">
      <h3 className="project-sections__title">Design</h3>

      <div className="h-80vh  md:h-75vh min-h-150 mt-4 w-full rounded-30px overflow-hidden">
        <Image src={bomei} alt={'bomei play'} />
      </div>
    </div>
  );
}
