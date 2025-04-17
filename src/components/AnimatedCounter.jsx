import { useEffect, useState } from "react";
import CountUp from "react-countup";

function AnimatedCounter({ start, end, duration, delay, separator, suffix }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <span>0</span>;

  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      delay={delay}
      separator={separator}
      suffix={suffix}
    >
      {({ countUpRef }) => (
        <p className="text-primary text-3xl font-bold" ref={countUpRef} />
      )}
    </CountUp>
  );
}

export default AnimatedCounter;
