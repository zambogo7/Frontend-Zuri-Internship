import zuriLogo from '../../assets/zuri-logo.svg';
import i4g from '../../assets/I4G.svg';

const Footer = () => {
  return (
    <footer className="bg-milk  py-12 flex justify-center">
      <div className="grid justify-center items-center md:grid-cols-3 w-11/12">
        <img src={zuriLogo} alt="Zuri logo" className="md:mb-0 mb-4 w-36" />
        <p className="text-base text-gray justify-self-center md:mb-0 mb-5">
          HNG Internship 9 Frontend Task
        </p>
        <img src={i4g} alt="I4g logo" className="place-self-end w-28" />
      </div>
    </footer>
  );
};
export default Footer;
