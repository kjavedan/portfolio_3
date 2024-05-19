import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

export default function MainLayout({ children }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
