import { useState } from "react";
import Icons from "@/utils/icons";
import images from "@/utils/images";
import video from "@/assets/video.mp4";

import ReactPlayer from "react-player";
import { Carousel } from "@mantine/carousel";
import { Group, Stack, Title } from "@mantine/core";

export default function Slider() {
  const [isPlay, setIsPlay] = useState(true);

  return (
    <>
      {!isPlay ? (
        <section className="relative">
          {/* ================= start carousel ================= */}

          <Carousel height={600} dir="ltr" loop>
            <Carousel.Slide>
              <img
                src={images.slider_1}
                alt="slider_1"
                className="w-full h-full object-cover"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src={images.slider_2}
                alt="slider_2"
                className="w-full h-full object-cover"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src={images.slider_3}
                alt="slider_3"
                className="w-full h-full object-cover"
              />
            </Carousel.Slide>
          </Carousel>

          {/* ================= end carousel ================= */}

          <Stack
            className="text-white absolute top-1/2 -translate-y-1/2 px-12"
            gap={"xl"}
          >
            <div>
              <span className="font-bold text-2xl">مرحبا بكم في</span>

              <Title order={1} className="font-bold !text-4xl">
                بوابة اخضر مكة
              </Title>
            </div>

            <div className="text-2xl font-bold">
              <span>ضمن مبادرة السعودية الخضراء</span>
              <p>
                لتحقيق رؤية المملكة 2030 والتى ترسخ توجه المملكة والمنطقة فى
                حماية الأرض
                <br />
                والطبيعة ووضعها فى خارطة طريق ذات معالم واضحة وطموحة تسهم بشكل
                قوي فى تحقيق بيئة مستدامة
              </p>
            </div>

            <Group
              gap={"sm"}
              align="center"
              className="text-xl cursor-pointer font-bold"
              onClick={() => setIsPlay(!isPlay)}
            >
              <Icons.FaVideo
                className="p-2 bg-[#ffffff4d] rounded-md"
                size={45}
              />
              شاهد الفيديو
            </Group>
          </Stack>
        </section>
      ) : (
        <div className="relative">
          <ReactPlayer
            url={video}
            controls
            playing
            height={600}
            width={"100%"}
          />

          <Group
            gap={"sm"}
            align="center"
            className="bg-white p-3 rounded absolute bottom-20 right-5 text-xl cursor-pointer font-bold"
            onClick={() => setIsPlay(!isPlay)}
          >
            <Icons.FaVideo className="" size={40} />
            ايقاف الفيديو
          </Group>
        </div>
      )}
    </>
  );
}
