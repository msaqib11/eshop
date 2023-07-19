import Image from "next/image";
import event1 from "public/images/event1.webp";
import event2 from "public/images/event2.webp";
import event3 from "public/images/event3.webp";
import { Badge } from "@/components/ui/badge";

const Promotion = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center gap-4  w-full mx-auto">
        <div className="uppercase text-sm font-extrabold tracking-wide text-blue-600">
          PROMOTIONS
        </div>
        <h1 className="scroll-m-20 text-3xl font-extrabold">
          Our Promotions Events
        </h1>
      </div>
      {/* left section */}
      <div className="flex flex-col md:flex-row mt-6">
        <div className="flex flex-col gap-3  md:w-1/2">
          <div className="bg-gray-300 flex justify-between items-center px-6">
            <div>
              <h1 className="text-sm md:text-2xl font-extrabold">GET UP TO 60%</h1>
              <p className="text-xs  md:text-lg">For the summer season</p>
            </div>
            <Image src={event1} alt="" />
          </div>
          <div className="bg-[#212121] flex flex-col justify-center items-center gap-y-4 py-6">
            <h1 className="text-white text-3xl font-extrabold">GET 30% Off</h1>
            <p className="text-white">USE PROMO CODE</p>
            <div>
              <Badge className="bg-[#474747] text-lg px-6 py-1 rounded-lg">
                DINEWEEKENDSALE
              </Badge>
            </div>
          </div>
        </div>
        {/* left section end */}
        {/* rigt section */}
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 md:gap-x-4 md:w-1/2 md:ml-4">
            {/* box 1 */}
          <div className="flex flex-col justify-center items-center  bg-[#efe1c7]">
            <h1>Flex Sweatshirt</h1>
            <div><span className="line-through">$100.00</span> <span>$75.00</span></div>
            <Image src={event2} alt="" />
          </div>
          {/* box 2 */}
          <div className="flex flex-col justify-center mt-4 md:mt-0 items-center bg-[#d7d7d9]">
            <h1>Flex Sweatshirt</h1>
            <div><span className="line-through">$100.00</span> <span>$75.00</span></div>
            <Image src={event3} alt="" />
          </div>
        </div>
        {/* right section end */}
      </div>
    </div>
  );
};

export default Promotion;
