import images from "@/utils/images";
import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";

export default function Slider() {
  return (
    <section className="relative">
      <Carousel height={600} dir="ltr" loop>
        <Carousel.Slide>
          <img src={images.slider_1} alt="slider_1" className="w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={images.slider_2} alt="slider_2" className="w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={images.slider_3} alt="slider_3" className="w-full" />
        </Carousel.Slide>
      </Carousel>

      <div className="text-white absolute top-1/2 -translate-y-1/2 px-12">
        <span className="font-bold text-2xl">مرحبا بكم في</span>

        <Title order={1} className="font-bold !text-4xl !mb-7">
          بوابة اخضر مكة
        </Title>

        <div className="text-2xl font-bold">
          <span>ضمن مبادرة السعودية الخضراء</span>
          <p>
            لتحقيق رؤية المملكة 2030 والتى ترسخ توجه المملكة والمنطقة فى حماية
            الأرض
            <br />
            والطبيعة ووضعها فى خارطة طريق ذات معالم واضحة وطموحة تسهم بشكل قوي
            فى تحقيق بيئة مستدامة
          </p>
        </div>
      </div>
    </section>
  );
}
