import Icons from "@/utils/icons";
import images from "@/utils/images";
import { Link } from "react-router-dom";
import { Container, Group, SimpleGrid, Stack } from "@mantine/core";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${images.footer_bg})` }}
      className={`bg-no-repeat bg-cover text-white py-5`}
    >
      <Container size={"lg"}>
        <Group justify="space-between">
          <Group>
            <img src={images.footer_logo_1} alt="logo" />
            <img src={images.footer_logo_2} alt="logo" />
          </Group>

          <Group>
            <Icons.FaYoutube className="text-3xl cursor-pointer transition-all duration-300 hover:text-[#ff0000]" />
            <Icons.FaTwitter className="text-3xl cursor-pointer transition-all duration-300 hover:text-[#1da1f2]" />
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} className="my-20">
          <Stack gap={2}>
            <h3 className="text-2xl border-b-2 border-white pb-2 w-fit">
              روابط هامة
            </h3>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              هيئة تطوير منطقة مكة المكرمة
            </Link>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              أمانة مكة المكرمة
            </Link>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              مركز المبدعون
            </Link>
          </Stack>
          <Stack gap={2}>
            <h3 className="text-2xl border-b-2 border-white pb-2 w-fit">
              مبادرة أخضر مكة
            </h3>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              الرؤية
            </Link>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              الاهداف
            </Link>
          </Stack>
          <Stack gap={2}>
            <h3 className="text-2xl border-b-2 border-white pb-2 w-fit">
              المركز الإعلامي
            </h3>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              الأخبار
            </Link>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              الأحداث والفعاليات
            </Link>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              معرض الصور
            </Link>
          </Stack>
          <Stack gap={2}>
            <h3 className="text-2xl border-b-2 border-white pb-2 w-fit">
              تواصل معنا
            </h3>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              جهات الاتصال
            </Link>
            <Link
              to="/"
              className="w-fit p-2 rounded transition-all duration-300 hover:scale-x-110 hover:pr-6 hover:bg-[#ffffff4d]"
            >
              راسلنا
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Stack className="bg-[#ffffff4d] text-center text-lg p-5 font-medium">
        <p>الشروط اللازمة التي يجب توافرها في البنية المشغلة للموقع</p>
        <p>
          مقاس الشاشة لا يقل عن 600 يدعم متصفحات جوجل كروم - فايرفوكس - سفاري و
          إيدج بالإضافة لجميع الأجهزة الذكية
        </p>

        <Group justify="center">
          <Icons.FaChrome />
          <Icons.FaEdge />
          <Icons.FaSafari />
          <Icons.FaFirefox />
        </Group>
      </Stack>

      <p className="text-center mt-5 font-medium">
        جميع الحقوق محفوظة ٢٠٢٤ لهيئة تطوير منطقة مكة المكرمة
      </p>
    </footer>
  );
}
