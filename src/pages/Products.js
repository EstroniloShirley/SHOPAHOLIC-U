import { NavBar } from '../components';
import Banner2 from '../assets/images/banner2  nyx.jpg';

export const Products = () => {
  return (
    <main>
      <img
        src={Banner2}
        alt="2nd Banner"
        className="pb-5 pt-3"
      />
      <NavBar />
    </main>
  );
};
