import ProductCard from "../components/Card/ProductCard";
import Tabs from "../components/Tabs";

function Offer() {
  const houses = [
    {
      price: "$2,700",
      title: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
      imageUrl: "./assets/houses/house-1.png",
    },
    {
      price: "$6,550",
      title: "St. Crystal",
      address: "210 US Highway, Highland Lake, FL",
      imageUrl: "./assets/houses/house-2.png",
    },
    {
      price: "$4,950",
      title: "Faulkner Ave",
      address: "909 Woodland St, Michigan, IN",
      imageUrl: "./assets/houses/house-3.png",
    },
  ];

  return (
    <section className="mt-12 flex flex-col gap-12">
      <div className="flex justify-center">
        <Tabs />
      </div>
      <div className="flex flex-col gap-6 px-8 text-center">
        <h2 className="text-3xl font-bold leading-[125%] tracking-[-0.01rem]">
          We make it easy for houses and apartments.
        </h2>
        <p className="text-font-gray text-base font-medium leading-[160%]">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </div>
      <div className="scrollbar-hide scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pl-8 pr-8">
        {houses.map((house) => (
          <ProductCard
            key={house.title}
            price={house.price}
            type="house"
            title={house.title}
            address={house.address}
            imageUrl={house.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Offer;
