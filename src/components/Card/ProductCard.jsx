import { Heart } from "lucide-react";

const ProductCard = ({ compact, price, type, title, address, imageUrl }) => {
  return (
    <div
      className={`border-secondary max-w-sm rounded-2xl ${compact ? "shadow-sm" : "border"} bg-white`}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full rounded-t-2xl object-cover"
        />
        {type && !compact && (
          <span className="absolute bottom-0 -left-2 flex translate-y-1/2 gap-1 rounded-lg bg-indigo-500 px-3 py-2 text-xs font-bold text-white uppercase">
            <img src="./assets/sparkles.svg" /> {type}
          </span>
        )}
      </div>
      <div
        className={`flex flex-col gap-y-2 px-4 ${compact ? "pt-4" : "pt-8"} pb-4`}
      >
        <div className="flex items-center justify-between">
          <p className="text-primary flex items-end gap-1 text-2xl font-extrabold tracking-tight">
            {price}
            <span className="text-font text-base font-medium tracking-normal opacity-50">
              /month
            </span>
          </p>
          {!compact && (
            <button className="text-primary">
              <Heart size={20} />
            </button>
          )}
        </div>
        <h2 className="text-font text-xl font-bold">{title}</h2>
        <p className="text-font truncate text-sm opacity-50">{address}</p>
      </div>
    </div>
  );
};

export default ProductCard;
