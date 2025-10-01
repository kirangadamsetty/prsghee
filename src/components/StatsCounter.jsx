import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "../styles/statsCounter.css";

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

 const stats = [
  { label: "Total Purchases", value: 4550 },
  { label: "Happy Customers", value: 980 },
  { label: "Daily Deliveries", value: 200 },
];

  return (
    <div ref={ref} className="stats-section bg-body-secondary">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <h2 className="stat-number" data-aos="fade-up">
            {inView ? <CountUp end={stat.value} duration={2} /> : 0}
          </h2>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
