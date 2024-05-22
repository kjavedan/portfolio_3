import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

export default function MainLayout({ children }) {
  return (
    <div className="relative  lg:container mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
