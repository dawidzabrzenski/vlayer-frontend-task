import Logo from "../components/Navbar/Logo";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
  FaLinkedin as Linkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <section className="flex flex-col gap-6 px-6 py-8">
      <div className="flex flex-col gap-6">
        <Logo />
        <ul className="flex flex-wrap justify-center gap-x-24 gap-y-6 px-4 text-center text-base font-medium leading-[160%] opacity-50">
          <li className="cursor-pointer">HELP CENTER</li>
          <li className="cursor-pointer">FAQ</li>
          <li className="cursor-pointer">TERMS & PRIVACY</li>
        </ul>
      </div>
      <div className="bg-font-gray h-[1px] opacity-20"></div>
      <div className="flex flex-col justify-center gap-6">
        <p className="text-center text-base font-medium opacity-50">
          ©2021 Estatery. All rights reserved
        </p>
        <div className="flex justify-center gap-10 text-2xl opacity-30">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </section>
  );
}

export default Footer;
