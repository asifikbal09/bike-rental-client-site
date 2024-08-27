import {
  FaDivide,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import footerLogo from "../../assets/footerLogo.png";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialIconStyle =
    "text-md text-slate-400 hover:border-[#f4364f] hover:text-[#f4364f] border  rounded-full btn-outline p-2";
  return (
    <div className="bg-[#121418]  text-white font-rajdhani py-10">
      {/* Logo and social link part */}
      <div className="container mx-auto py-10 md:grid md:grid-cols-7 gap-10">
        <div className="col-span-2">
          <img className="w-[10rem] mb-10" src={footerLogo} alt="Rediox" />
          <p>
            Aliquet natoque, dolorum nascetur, commodi varius, rutrum accusamus
            molestias egestas. Facilisi incidunt? Intege quam consectetur
            magnisrisus magna! Duis?Facmollitia.
          </p>
          <div className="flex gap-3 mt-5 mb-5">
            <button className={socialIconStyle}>
              <FaFacebookF />
            </button>
            <button className={socialIconStyle}>
              <FaTwitter />
            </button>
            <button className={socialIconStyle}>
              <FaInstagram />
            </button>
            <button className={socialIconStyle}>
              <FaYoutube />
            </button>
            <button className={socialIconStyle}>
              <FaPinterestP />
            </button>
          </div>
        </div>

        {/* Location part */}
        <div className="col-span-2">
          <h2 className="text-3xl font-bold mb-10">Our Location</h2>
          <div>
            <h3 className="text-xl font-medium mb-3">New York City</h3>
            <p>908 Acacia St. Elizabeth, NJ 07202</p>
            <p className=" hover:text-[#f4364f]">+602-215-5874</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 mt-5">Gentle Park USA</h3>
            <p>8191 Lincoln St. Arlington, MA 02474</p>
            <p className=" hover:text-[#f4364f]">+802-205-9815</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 mt-5">
              Times Square Avenue
            </h3>
            <p>125 Manhattan, NY 10036, USA</p>
            <p className=" hover:text-[#f4364f] mb-5">+812-192-4569</p>
          </div>
        </div>
        {/* About us part */}
        <div>
          <h2 className="text-3xl font-bold mb-10">About Us</h2>
          <div className="flex flex-col gap-3 mb-5">
            <Link className=" hover:text-[#f4364f]" to={""}>
              Contact us
            </Link>
            <Link className=" hover:text-[#f4364f]" to={""}>
              Services
            </Link>
            <Link className=" hover:text-[#f4364f]" to={""}>
              Rent a Bike
            </Link>
            <Link className=" hover:text-[#f4364f]" to={""}>
              Read FAQs
            </Link>
            <Link className=" hover:text-[#f4364f]" to={""}>
              Our Pricing
            </Link>
          </div>
        </div>
        {/* Newsletter part */}
        <div className="col-span-2">
          <h2 className="text-3xl font-bold mb-10">Newsletter</h2>
          <p>Subscribe us and you won't miss the new arrivals.</p>
          <div className="flex relative mt-5">
            <input
              className="input input-ghost w-full "
              placeholder="Your Email"
              type="text"
            />
            <p className="absolute text-[#f4364f] text-2xl right-2 top-3">
              <MdEmail />
            </p>
          </div>
        </div>
      </div>
      <p className="divider"></p>
      <div className="md:flex items-center container mx-auto text-center justify-between">
        <p className="">© 2024 Ridexo - Bikes Rental. All rights reserved.</p>
        <p>Trams & Conditions Privacy Policy Site Map</p>
      </div>
    </div>
  );
};
export default Footer;
