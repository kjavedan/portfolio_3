import PropTypes from 'prop-types';
import Header from './header';

export default function MainLayout({ children }) {
  return (
    <div className="relative lg:container mx-auto">
      <Header />
      {children}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
