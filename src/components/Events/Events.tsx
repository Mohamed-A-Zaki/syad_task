import Icons from "@/utils/icons";
import images from "@/utils/images";
import { Carousel } from "@mantine/carousel";
import { Container, SimpleGrid, Stack, Title } from "@mantine/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <section
      style={{ backgroundImage: `url(${images.events_bg})` }}
      className="py-10 bg-no-repeat bg-cover"
    >
      <Container size={"lg"}>
        <Title
          order={2}
          className="text-white w-fit font-bold border-b-[3px] border-yellow_color"
        >
          الفعاليات والأحداث
        </Title>

        <Carousel dir="ltr" loop>
          <Carousel.Slide>
            <SimpleGrid cols={{ base: 1, md: 2 }}>
              <AnimationOnScroll animateIn="animate__fadeInDown">
                <img
                  src={images.events_1}
                  alt="events_1"
                  className="rounded-md"
                />
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeInUp">
                <Stack>
                  <div className="bg-white p-5 rounded-md my-5 text-right rounded-tr-[50px]">
                    <Title order={3}>ملتقى صناع العقار بغرفة مكة</Title>
                    <p className="text-text_color my-5">
                      هيئة تطوير منطقة مكة المكرمة تشارك بجناح تعريفي في ملتقى
                      صناع العقار بغرفة مكة
                    </p>
                    <Link
                      to={"/"}
                      className="flex flex-row-reverse items-center text-sm"
                    >
                      اكتشف المزيد <Icons.IoIosArrowBack />
                    </Link>
                  </div>

                  <img
                    src={images.events_2}
                    alt="events_2"
                    className="w-48 rounded-md"
                  />
                </Stack>
              </AnimationOnScroll>
            </SimpleGrid>
          </Carousel.Slide>

          <Carousel.Slide>
            <SimpleGrid cols={{ base: 1, md: 2 }}>
              <AnimationOnScroll animateIn="animate__fadeInDown">
                <img
                  src={images.events_2}
                  alt="events_1"
                  className="rounded-md"
                />
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeInUp">
                <Stack>
                  <div className="bg-white p-5 rounded-md my-5 text-right rounded-tr-[50px]">
                    <Title order={3}>مؤتمر الأمن الغذائي المستدام</Title>
                    <p className="text-text_color my-5">
                      برعاية من #هيئة_تطوير_منطقة_مكة وبحضور الرئيس التنفيذي م.
                      أحمد العارضي نظمت جامعة الملك عبدالله للعلوم والتقنية
                      #كاوست
                    </p>
                    <Link
                      to={"/"}
                      className="flex flex-row-reverse items-center text-sm"
                    >
                      اكتشف المزيد <Icons.IoIosArrowBack />
                    </Link>
                  </div>

                  <img
                    src={images.events_1}
                    alt="events_2"
                    className="w-48 rounded-md"
                  />
                </Stack>
              </AnimationOnScroll>
            </SimpleGrid>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </section>
  );
}
