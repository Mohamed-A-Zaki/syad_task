import images from "@/utils/images";
import { Container, SimpleGrid, Stack } from "@mantine/core";

export default function Statistics() {
  return (
    <section className="py-10 text-white text-center bg-[#C5D8D3]">
      <Container size={"lg"}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
          <div className="relative group">
            <img
              src={images.stats_1}
              alt=""
              className="group-hover:scale-110 transition duration-300"
            />
            <Stack
              gap={5}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img src={images.stats_icon_1} alt="" />
              <div className="text-2xl font-semibold">5871.32 كم2</div>
              <div>المساحات الخضراء</div>
            </Stack>
          </div>

          <div className="relative mt-16 group">
            <img
              src={images.stats_2}
              alt=""
              className="group-hover:scale-110 transition duration-300"
            />
            <Stack
              gap={5}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img src={images.stats_icon_2} alt="" />
              <div className="text-2xl font-semibold">132615.26 كم2</div>
              <div>المناطق الصحراوية</div>
            </Stack>
          </div>

          <div className="relative group">
            <img
              src={images.stats_3}
              alt=""
              className="group-hover:scale-110 transition duration-300"
            />
            <Stack
              gap={5}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img src={images.stats_icon_3} alt="" />
              <div className="text-2xl font-semibold">174.85 كم2</div>
              <div>المسطحات المائية</div>
            </Stack>
          </div>

          <div className="relative mt-16 group">
            <img
              src={images.stats_4}
              alt=""
              className="group-hover:scale-110 transition duration-300"
            />
            <Stack
              gap={5}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img src={images.stats_icon_4} alt="" />
              <div className="text-2xl font-semibold">7.02 كم2</div>
              <div>الأراضي الرطبة</div>
            </Stack>
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}
