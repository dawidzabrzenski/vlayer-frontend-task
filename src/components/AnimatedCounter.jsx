import { useCountUp } from "use-count-up";

function AnimatedCounter({ start, end, duration }) {
  const { value } = useCountUp({
    isCounting: true,
    start,
    end,
    duration,
  });

  return <p className="text-primary text-3xl font-bold">{value}k+</p>;
}

export default AnimatedCounter;
