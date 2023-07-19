import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center mt-24 gap-y-5 relative">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
        Subscribe Our Newsletter
      </h1>
      <p className="leading-7 text-sm">
        Get the latest information and promo offers directly
      </p>
      <div className="flex gap-y-2 md:gap-x-4 flex-col md:flex-row">
        <Input type="email" className="w-72" placeholder="Input Email Address" />
        <Button>Get Started</Button>
      </div>
      <div className="absolute flex items-center justify-center top-10 -z-10">
        <h1 className="text-[#f2f3f7] md:text-9xl">Newsletter</h1>
      </div>
    </div>
  );
};

export default NewsLetter;
