import images from "@/utils/images";
import { Container, Group, Stack, Title } from "@mantine/core";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function AkhdarApp() {
  return (
    <section
      style={{ backgroundImage: `url(${images.app_bg})` }}
      className="bg-no-repeat bg-cover py-10 text-white"
    >
      <Container size={"lg"}>
        <Group wrap="nowrap" gap={100} className="!flex-col md:!flex-row">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img src={images.app} alt="app" />
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <Stack gap={"lg"} className="text-center md:text-start">
              <Title order={2} className="!text-4xl">
                تطبيق أخضر مكة
              </Title>
              <p className="text-xl font-semibold">
                يوفر مستكشف أخضر مكة علي الجوال ﻟﻠﻤﻮاﻃﻨﻴﻦ واﻟﻤﺴﺘﺨﺪﻣﻴﻦ البحث عن
                الأماكن الخضراء المتاحة في قاعدة البيانات الجغرافية
              </p>
              <img
                src={images.google_play}
                alt=""
                className="w-40 m-auto md:m-0"
              />
            </Stack>
          </AnimationOnScroll>
        </Group>
      </Container>
    </section>
  );
}
