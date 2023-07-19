import { Facebook, Linkedin, Twitter} from "lucide-react";
import Image from "next/image";
import Logo from "public/images/Logo.svg";

const QuickLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mt-16 md:gap-x-20">
      {/* social links */}
      <div className="flex flex-col gap-y-8 md:col-span-2">
        <Image src={Logo} alt="" />
        <p className="leading-7 text-sm text-justify">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <ul className="flex gap-x-3">
          <li className="bg-gray-300 hover:bg-gray-200 px-3 py-3 rounded-lg  cursor-pointer">
            <Twitter className="fill-black" />
          </li>
          <li className="bg-gray-300 hover:bg-gray-200 px-3 py-3 rounded-lg cursor-pointer">
            <Facebook className="fill-black" />
          </li>
          <li className="bg-gray-300 hover:bg-gray-200 px-3 py-3 rounded-lg cursor-pointer">
            <Linkedin  className="fill-black "/>
          </li>
        </ul>
      </div>
        {/* site links sec 1  */}
      <div className="">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-slate-600 mb-4">
        Company
        </h3>
        <ul className="flex flex-col gap-4 text-gray-700 text-xs">
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-slate-600 mb-4">
        Support
        </h3>
        <ul className="flex flex-col gap-4 text-gray-700 text-xs">
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
        </ul>
      </div>

      <div>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-slate-600 mb-4">
        Contact
        </h3>
        <ul className="flex flex-col gap-4 text-gray-700 text-xs">
            <li>Whatsapp</li>
            <li>Support 24h</li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
