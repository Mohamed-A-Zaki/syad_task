import Icons from "@/utils/icons";
import images from "@/utils/images";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { Container, Group, SimpleGrid, Title } from "@mantine/core";

const cites = [
  { id: 1, city: "مكة المكرمة" },
  { id: 2, city: "رنية" },
  { id: 3, city: "الجموم" },
  { id: 4, city: "الكامل" },
  { id: 5, city: "خليص" },
  { id: 6, city: "رابغ" },
  { id: 7, city: "جدة" },
  { id: 8, city: "الليث" },
  { id: 9, city: "القنفذة" },
  { id: 10, city: "العرضيات" },
  { id: 11, city: "أضم" },
  { id: 12, city: "الطائف" },
  { id: 13, city: "ميسان" },
  { id: 14, city: "الخرمة" },
  { id: 15, city: "المويه" },
  { id: 16, city: "تربة" },
  { id: 17, city: "بحرة" },
];

export default function DiscoverMakkah() {
  return (
    <section
      style={{ backgroundImage: `url(${images.maps_bg})` }}
      className="bg-no-repeat bg-cover py-5 text-white"
    >
      <Container size={"lg"}>
        <Title
          order={2}
          className="!text-3xl border-b-4 w-fit !m-auto pb-2 border-yellow_color text-yellow_color"
        >
          اكتشف مكة المكرمة ومحافظتها
        </Title>

        <p className="text-center my-6">
          يوفر مستكشف أخضر مكة للمواطنين و المستخدمين البحث عن الأماكن الخضراء
          المتاحة في قاعدة البيانات الجغرافية
        </p>

        <div className="h-screen w-full rounded-lg overflow-hidden">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={{
              lat: 24.774265,
              lng: 46.738586,
            }}
            defaultZoom={15}
          ></GoogleMapReact>
        </div>

        <SimpleGrid
          className="text-lg my-5"
          cols={{ base: 2, xs: 3, md: 4, lg: 6 }}
        >
          {cites.map(({ id, city }) => {
            return (
              <Group key={id} gap={2} className="p-2">
                <Icons.FaLocationDot
                  className="p-2 rounded-full bg-white text-black"
                  size={35}
                />
                {city}
              </Group>
            );
          })}
        </SimpleGrid>

        <div className="text-center mt-5">
          لاستخدام مستكشف اخضر مكة{" "}
          <Link to={"/"} className="text-yellow_color underline">
            اضغط هنا
          </Link>
        </div>
      </Container>
    </section>
  );
}
