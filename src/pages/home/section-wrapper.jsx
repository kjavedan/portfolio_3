import PropTypes from 'prop-types';

export default function SectionWrapper({ children }) {
  return (
    <div className="section">
      <div className="h-screen w-full flex items-center justify-center p-4 lg:p-0 ">
        {children}
      </div>
    </div>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
};
