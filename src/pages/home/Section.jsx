import PropTypes from 'prop-types';

export default function Section({ children }) {
  return (
    <div className="section">
      <div className="h-screen w-full flex items-center justify-center lg:p-0 ">
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};
