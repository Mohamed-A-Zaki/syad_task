import {
  HoverCard,
  Group,
  UnstyledButton,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Stack,
} from "@mantine/core";

import Icons from "@/utils/icons";
import images from "@/utils/images";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  return (
    <Box className="shadow p-5">
      {/* ======================= start header ======================== */}

      <header>
        <Group justify="space-between" h="100%">
          <Group>
            <Link to={"/"}>
              <img src={images.logo_1} alt="logo" />
            </Link>

            <img src={images.logo_2} alt="logo" className="hidden lg:block" />

            {/* ======================= start links ======================== */}

            <Group h="100%" className="!hidden lg:!flex">
              <Link
                to="#"
                className="flex items-center px-2 font-[700] text-main_color border-b-[3px] border-main_color pb-1"
              >
                الرئيسية
              </Link>

              <HoverCard
                width={"100%"}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Link
                    to="#"
                    className="flex items-center px-2 font-[500]  text-text_color"
                  >
                    <Center inline className="gap-1">
                      <Box
                        component="span"
                        mr={5}
                        className="hover:text-main_color"
                      >
                        عن بوابة اخضر مكة
                      </Box>
                      <Icons.IoIosArrowDown
                        className="w-6 h-6"
                        color={"#707070"}
                      />
                    </Center>
                  </Link>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group className="px-10">
                    <img src={images.logo_2} alt="logo" />

                    <Stack gap={0}>
                      <div className="group rounded-lg p-4 w-[500px] hover:bg-main_color transition duration-300">
                        <h4 className="flex items-center text-text_color group-hover:text-white">
                          الرؤية
                          <Icons.IoIosArrowBack />
                        </h4>
                        <p className="mt-3 text-gray-400 text-sm group-hover:text-white">
                          مشروع أخضر مكة هو ضمن مبادرة السعودية <br />
                          الخضراء ضمن مخرجات رؤية المملكة 2030
                        </p>
                      </div>
                      <div className="group rounded-lg p-4 w-[500px] hover:bg-main_color transition duration-300">
                        <h4 className="flex items-center text-text_color group-hover:text-white">
                          الاهداف
                          <Icons.IoIosArrowBack />
                        </h4>
                        <p className="mt-3 text-gray-400 text-sm group-hover:text-white">
                          الأهداف العامة والتسويقية لمبادرة أخضر مكة
                        </p>
                      </div>
                    </Stack>
                  </Group>
                </HoverCard.Dropdown>
              </HoverCard>

              <Link
                to="#"
                className="flex items-center px-2 font-[500] hover:text-main_color text-text_color"
              >
                الدراسات و الابحاث
              </Link>
            </Group>

            {/* ======================= end links ======================== */}
          </Group>

          <Link to="/" className="gap-2 items-center hidden lg:flex">
            <Icons.FaUser />
            الدخول
          </Link>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className="lg:hidden"
          />
        </Group>
      </header>

      {/* ======================= end header ======================== */}

      {/* ======================= start drawer ======================== */}

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        className="lg:hidden"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" className="p-5">
          <Link
            to="#"
            className="flex items-center px-2 font-[700] text-main_color border-b-[3px] border-main_color pb-1 my-4"
          >
            الرئيسية
          </Link>

          <UnstyledButton
            className="flex items-center px-2 font-[500]"
            onClick={toggleLinks}
          >
            <Center inline>
              <Box component="span" mr={5} className="hover:text-main_color">
                عن بوابة اخضر مكة
              </Box>
              <Icons.IoIosArrowDown className="w-6 h-6" color={"#707070"} />
            </Center>
          </UnstyledButton>

          <Collapse in={linksOpened}>
            <Group className="px-10">
              <img src={images.logo_2} alt="logo" />

              <Stack gap={0}>
                <div className="group rounded-lg p-4 w-[500px] hover:bg-main_color transition duration-300">
                  <h4 className="flex items-center text-text_color group-hover:text-white">
                    الرؤية
                    <Icons.IoIosArrowBack />
                  </h4>
                  <p className="mt-3 text-gray-400 text-sm group-hover:text-white">
                    مشروع أخضر مكة هو ضمن مبادرة السعودية <br />
                    الخضراء ضمن مخرجات رؤية المملكة 2030
                  </p>
                </div>
                <div className="group rounded-lg p-4 w-[500px] hover:bg-main_color transition duration-300">
                  <h4 className="flex items-center text-text_color group-hover:text-white">
                    الاهداف
                    <Icons.IoIosArrowBack />
                  </h4>
                  <p className="mt-3 text-gray-400 text-sm group-hover:text-white">
                    الأهداف العامة والتسويقية لمبادرة أخضر مكة
                  </p>
                </div>
              </Stack>
            </Group>
          </Collapse>

          <Link
            to="#"
            className="flex items-center px-2 font-[500] hover:text-main_color text-text_color my-4"
          >
            الدراسات و الابحاث
          </Link>

          <Link to="/" className="flex gap-2 items-center my-4">
            <Icons.FaUser />
            الدخول
          </Link>
        </ScrollArea>
      </Drawer>

      {/* ======================= end drawer ======================== */}
    </Box>
  );
}

export default Navbar;
