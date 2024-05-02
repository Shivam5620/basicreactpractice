import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import { Link } from "react-router-dom";
import SideBar from "pages/SidebarLayout";

export default function ListLayoutPage() {
  return (
    <>
      <div className="w-full bg-blue_gray-50 pr-[51px] shadow-xs md:pr-5">
        <div className="flex items-center justify-between gap-5 md:flex-col">
          {/* sidebar section */}
          <SideBar/>
          <div className="flex w-[66%] flex-col items-center gap-[46px] md:w-full md:p-5">
            {/* news list section */}
            <div className="self-stretch">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex flex-1 flex-col gap-[17px] md:self-stretch">
                  <div className="flex flex-1 items-start gap-[23px] rounded-[16px] bg-white-A700 px-[26px] pb-3.5 pt-7 shadow-xs md:flex-col sm:px-5 sm:pt-5">
                    <Img
                      src="images/img_ellipse_1.png"
                      alt="article image"
                      className="h-[67px] w-[67px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex flex-col gap-[3px]">
                        <Heading as="h2">Urna, tempor aliquet maecenas aliquam risus maecenas ut morbi. Mi...</Heading>
                        <Text size="s" as="p">
                          Non suscipit sagittis nunc, pharetra. Eget quam facilisi non nunc libero...
                        </Text>
                      </div>
                      <Heading size="xs" as="h3" className="!text-gray-400_02">
                        Mon, 21 Dec 2020 14:57 GMT
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[91px] md:gap-[68px] sm:gap-[45px]">
                  <Button className="w-[49px] rounded-[24px]">
                    <Img src="images/img_close.svg" />
                  </Button>
                </div>
              </div>
            </div>

            {/* pagination controls section */}
            <div className="flex w-[19%] flex-wrap items-center md:w-full">
              <Heading
                as="h5"
                className="text-shadow-ts flex h-[42px] w-[42px] items-center justify-center rounded-[21px] bg-white-A700 text-center !text-gray-600"
              >
                1
              </Heading>
              <Heading
                as="h5"
                className="ml-[22px] flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-400_01 text-center !text-white-A700"
              >
                2
              </Heading>
              <Heading
                as="h5"
                className="ml-[17px] flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-400_01 text-center !text-white-A700"
              >
                3
              </Heading>
              <Img src="images/img_forward.svg" alt="forward icon" className="ml-3 mt-3.5 h-[11px] self-start" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
