import ProductCard from "../components/Card/ProductCard";

function Hero() {
  return (
    <section>
      <div className="gradient-center flex flex-col gap-8 px-8 pb-6 pt-12">
        <h2 className="text-center text-[40px] font-bold leading-[110%] -tracking-wider">
          Buy, rent, or sell your property easily
        </h2>
        <p className="section-description-bold">
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </p>
        <div className="flex justify-evenly gap-4">
          <div className="border-secondary flex flex-col border-l-4 px-6">
            <p className="text-primary text-3xl font-bold">50k+</p>
            <p className="text-font-gray text-base font-medium leading-[150%]">
              renters
            </p>
          </div>
          <div className="border-secondary flex flex-col border-l-4 px-6">
            <p className="text-primary text-3xl font-bold">10k+</p>
            <p className="text-font-gray text-base font-medium leading-[150%]">
              properties
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center pt-4">
        <img className="relative px-12" src="./assets/map.png" />
        <div className="absolute -left-10 scale-[0.6]">
          <ProductCard
            compact
            price="$2,700"
            title="Beverly Springfield"
            address="2821 Lake Sevilla, Palm Harbor, TX"
            imageUrl="./assets/apartments/apartment-3.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
