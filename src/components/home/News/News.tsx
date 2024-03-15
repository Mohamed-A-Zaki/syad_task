import Icons from "@/utils/icons";
import images from "@/utils/images";
import { Carousel } from "@mantine/carousel";
import { Container, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <section className="py-10">
      <Container size={"lg"}>
        <Title order={2} className="!text-3xl !mb-10 text-center">
          الأخبار
        </Title>

        <Carousel dir="ltr" loop>
          <Carousel.Slide>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={"xl"}>
              <AnimationOnScroll animateIn="animate__fadeInDown">
                <Stack className="text-right">
                  <div>
                    <div className="border-b-[3px] border-yellow_color pb-1 w-fit text-text_color ml-auto">
                      المستجدات
                    </div>
                    <p className="text-[#00B6BB] text-2xl font-semibold my-5">
                      السعودية الخضراء .. حلم يتحقق
                    </p>
                    <p className="text-text_color">
                      أعطى سمو ولي العهد الأمير محمد بن سلمان أولوية خاصة للجانب
                      البيئي ومكافحة التصحر اهتمامًا كبيرًا، توجه سموه بإعلان
                      «مبادرة السعودية الخضراء»، و»مبادرة الشرق الأوسط الأخضر»
                      اللتين سيتم إطلاقهما قريبًا
                    </p>
                  </div>

                  <Link to={"/"}>
                    <Group className="!flex-row-reverse text-[#00B6BB]" gap={0}>
                      التفاصيل
                      <Icons.IoIosArrowBack />
                    </Group>
                  </Link>

                  <div>1 - 2</div>
                </Stack>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeInUp">
                <img
                  src={images.news_1}
                  alt="news_1"
                  className="rounded-tr-[60px] rounded-md"
                />
              </AnimationOnScroll>
            </SimpleGrid>
          </Carousel.Slide>

          <Carousel.Slide>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={"xl"}>
              <AnimationOnScroll animateIn="animate__fadeInDown">
                <Stack className="text-right">
                  <div>
                    <div className="border-b-[3px] border-yellow_color pb-1 w-fit text-text_color ml-auto">
                      المستجدات
                    </div>
                    <p className="text-[#00B6BB] text-2xl font-semibold my-5">
                      الفيصل يستعرض مبادرة (أخضر مكة) وآليات التوسع في المسطحات
                      الخضراء بالمنطقة
                    </p>
                    <p className="text-text_color">
                      رأس صاحب السمو الملكي الأمير خالد الفيصل مستشار خادم
                      الحرمين الشريفين أمير منطقة مكة المكرمة رئيس هيئة تطوير
                      المنطقة في الإمارة بجدة، اجتماعاً لاستعراض أهداف مبادرة
                      (اخضر مكة)، تم خلاله مناقشة آليات التوسع في المسطحات
                      الخضراء بالمنطقة
                    </p>
                  </div>

                  <Link to={"/"}>
                    <Group className="!flex-row-reverse text-[#00B6BB]" gap={0}>
                      التفاصيل
                      <Icons.IoIosArrowBack />
                    </Group>
                  </Link>

                  <div>2 - 2</div>
                </Stack>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeInUp">
                <img
                  src={images.news_2}
                  alt="news_2"
                  className="rounded-tr-[60px] rounded-md"
                />
              </AnimationOnScroll>
            </SimpleGrid>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </section>
  );
}
