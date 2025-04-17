import HeartButton from "./HeartButton";

const ProductCard = ({ compact, price, type, title, address, imageUrl }) => {
  return (
    <div
      className={`w-[300px] rounded-2xl ${
        compact ? "shadow-sm" : ""
      } shrink-0 bg-white`}
    >
      <div className="relative w-full rounded-t-2xl">
        <div className="h-48 w-full overflow-hidden rounded-t-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        {type && !compact && (
          <span className="bg-primary before:border-r-primary ribbon absolute -left-3 bottom-0 flex translate-y-1/2 gap-1 rounded-lg px-4 py-2 text-xs font-bold uppercase text-white">
            <img src="./assets/sparkles.svg" /> {type}
          </span>
        )}
      </div>
      <div
        className={`border-secondary flex flex-col gap-y-2 rounded-lg rounded-t-none border border-t-0 px-4 ${
          compact ? "pt-4" : "pt-8"
        } pb-4`}
      >
        <div className="flex items-center justify-between">
          <p className="text-primary flex items-end gap-1 text-2xl font-extrabold tracking-tight">
            {price}
            <span className="text-font text-base font-medium tracking-normal opacity-50">
              /month
            </span>
          </p>
          {!compact && <HeartButton />}
        </div>
        <h2 className="text-font text-xl font-bold">{title}</h2>
        <p className="text-font truncate text-sm opacity-50">{address}</p>
      </div>
    </div>
  );
};

export default ProductCard;
