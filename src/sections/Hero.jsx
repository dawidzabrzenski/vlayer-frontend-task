import ProductCard from "../components/Card/ProductCard";

function Hero() {
  return (
    <section>
      <div className="gradient-center flex flex-col gap-8 px-8 pt-12 pb-6">
        <h2 className="text-center text-[40px] leading-[110%] font-bold -tracking-wider">
          Buy, rent, or sell your property easily
        </h2>
        <p className="text-center text-xl leading-[160%] font-medium tracking-[0.015em]">
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </p>
        <div className="flex justify-evenly gap-4">
          <div className="border-secondary flex flex-col border-l-4 px-6">
            <p className="text-primary text-3xl font-bold">50k+</p>
            <p>renters</p>
          </div>
          <div className="border-secondary flex flex-col border-l-4 px-6">
            <p className="text-primary text-3xl font-bold">10k+</p>
            <p>properties</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center pt-4">
        <img className="relative px-12" src="./assets/map.png" />
        <div className="absolute -left-10 scale-[0.6]">
          <ProductCard
            compact
            price="$3,440"
            title="Palm Harbor"
            address="2699 Green Valley, Highland..."
            imageUrl="./assets/apartments/apartment-1.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
