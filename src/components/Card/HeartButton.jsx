import { Heart } from "lucide-react";

function HeartButton() {
  return (
    <button className="text-primary active:outline-primary-hover active:bg-primary hover:text-primary-active outline-secondary focus:outline-primary-active focus:text-primary-active hover:outline-primary-active focus:bg-primary-active/20 rounded-full p-2 outline-[1.5px] transition-all duration-200 hover:outline-1 active:text-white">
      <Heart size={20} />
    </button>
  );
}

export default HeartButton;
