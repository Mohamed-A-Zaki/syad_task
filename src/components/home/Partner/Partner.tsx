import images from "@/utils/images";
import { Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const images_list = [
  { id: 1, image: images.partner_1 },
  { id: 2, image: images.partner_2 },
  { id: 3, image: images.partner_3 },
  { id: 4, image: images.partner_4 },
  { id: 5, image: images.partner_5 },
  { id: 6, image: images.partner_6 },
  { id: 7, image: images.partner_7 },
];

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
        {images_list.map(({id , image}) => {
          return (
            <Carousel.Slide key={id} className="flex items-center justify-center">
              <img src={image} alt="" />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </section>
  );
}
