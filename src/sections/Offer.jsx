import ProductCard from "../components/Card/ProductCard";

function Offer() {
  return (
    <section className="mt-12 flex flex-col gap-12 px-8">
      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-3xl font-bold leading-[125%] tracking-[-0.01rem]">
          We make it easy for houses and apartments.
        </h2>
        <p className="text-font-gray text-base font-medium leading-[160%]">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </div>
      <div>
        <ProductCard />
      </div>
    </section>
  );
}

export default Offer;
