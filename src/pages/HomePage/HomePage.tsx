import AkhdarApp from "@/components/home/AkhdarApp";
import Partner from "@/components/home/Partner";
import Statistics from "@/components/home/Statistics";
import News from "../../components/home/News/News";
import Events from "@/components/home/Events";
import Slider from "@/components/home/Slider";
import DiscoverMakkah from "@/components/home/DiscoverMakkah";

export default function HomePage() {
  return (
    <>
      <Slider />
      <Statistics />
      <DiscoverMakkah />
      <AkhdarApp />
      <News />
      <Events />
      <Partner />
    </>
  );
}
