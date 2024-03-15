import AkhdarApp from "@/components/AkhdarApp";
import Partner from "@/components/Partner";
import Statistics from "@/components/Statistics";
import News from "../../components/News/News";

export default function HomePage() {
  return (
    <>
      <Statistics />
      <AkhdarApp />
      <News />
      <Partner />
    </>
  );
}
