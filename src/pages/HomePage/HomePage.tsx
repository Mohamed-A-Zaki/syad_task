import AkhdarApp from "@/components/AkhdarApp";
import Partner from "@/components/Partner";
import Statistics from "@/components/Statistics";
import News from "../../components/News/News";
import Events from "@/components/Events";
import Slider from "@/components/Slider";
import DiscoverMakkah from "@/components/DiscoverMakkah";

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
