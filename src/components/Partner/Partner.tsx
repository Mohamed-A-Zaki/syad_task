import images from "@/utils/images";
import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";

export default function Partner() {
  return (
    <section className="py-10 px-3">
      <Title
        order={2}
        className="!text-3xl border-b-4 w-fit !m-auto pb-2 border-yellow_color"
      >
        شركاء المبادرة
      </Title>

      <Carousel
        withIndicators
        height={200}
        slideSize={{ base: "50%", xs: "25%", sm: "16.66666666666667%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
        dir="ltr"
      >
        <Carousel.Slide className="flex items-center justify-center">
          <img src={images.partner_1} alt="" />
        </Carousel.Slide>
        <Carousel.Slide className="flex items-center justify-center">
          <img src={images.partner_2} alt="" />
        </Carousel.Slide>
        <Carousel.Slide className="flex items-center justify-center">
          <img src={images.partner_3} alt="" />
        </Carousel.Slide>
        <Carousel.Slide className="flex items-center justify-center">
          <img src={images.partner_4} alt="" />
        </Carousel.Slide>
        <Carousel.Slide className="flex items-center justify-center">
          <img src={images.partner_5} alt="" />
        </Carousel.Slide>
        <Carousel.Slide className="flex items-center justify-center">
          <img src={images.partner_6} alt="" />
        </Carousel.Slide>
        <Carousel.Slide className="flex items-center justify-center">
          <img src={images.partner_7} alt="" />
        </Carousel.Slide>
      </Carousel>
    </section>
  );
}
