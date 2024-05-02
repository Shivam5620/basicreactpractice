import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import CardLayoutColumnsedvolutp from "../../components/CardLayoutColumnsedvolutp";
import { Link } from "react-router-dom";
import SideBar from "pages/SidebarLayout";

const data = [
  {
    sedvolutpattext: "Sed volutpat vitae id eleifend. Commodo...",
    interdumtext: "Interdum pretium porttitor nibh cursus...",
    timezonetext: "Mon, 21 Dec 2020 14:57 GMT",
    imageone: "images/img_rectangle_17.png",
  },
  {
    sedvolutpattext: "Risus natoque porta eget vestibulum...",
    interdumtext: "Nec facilisis duis venenatis nulla porta...",
    timezonetext: "Mon, 21 Dec 2020 14:57 GMT",
    imageone: "images/img_rectangle_19.png",
  },
  {
    sedvolutpattext: "Magnis quisque non ullamcorper mus...",
    interdumtext: "Amet vitae rhoncus nisi tellus eget ut vulputate...",
    timezonetext: "Mon, 21 Dec 2020 14:57 GMT",
    imageone: "images/img_rectangle_21.png",
  },
  {
    sedvolutpattext: "Eu pellentesque aenean vel commodo in. Nibh...",
    interdumtext: "Nullam tempus nisl laoreet arcu sit eget...",
    timezonetext: "Mon, 21 Dec 2020 14:57 GMT",
    imageone: "images/img_rectangle_23.png",
  },
  {
    sedvolutpattext: "Ut vestibulum amet orci lacus potenti eu cras...",
    interdumtext: "Nulla gravida id quam rutrum. Aenean tempus..",
    timezonetext: "Mon, 21 Dec 2020 14:57 GMT",
    imageone: "images/img_rectangle_25.png",
  },
  {
    sedvolutpattext: "Pretium duis dolor morbi rhoncus eleifend. Puru..",
    interdumtext: "At vulputate ultricies sed euismod nulla. Sed..",
    timezonetext: "Mon, 21 Dec 2020 14:57 GMT",
    imageone: "images/img_rectangle_27.png",
  },
];

export default function CardLayoutPage() {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-5 bg-blue_gray-50 pr-[77px] shadow-xs md:flex-col md:pr-5">
        {/* sidebar section */}
        <SideBar/>
        <div className="flex w-[66%] flex-col items-center gap-[67px] md:w-full sm:gap-[33px]">
          {/* news cards section */}
          <div className="grid grid-cols-3 justify-center gap-9 self-stretch md:grid-cols-2 sm:grid-cols-1">
            {data.map((d, index) => (
              <CardLayoutColumnsedvolutp {...d} key={"cardGrid" + index} />
            ))}
          </div>
          {/* pagination section */}
          <div className="flex w-[19%] flex-wrap items-center md:w-full md:p-5">
            <Heading
              as="h2"
              className="text-shadow-ts flex h-[42px] w-[42px] items-center justify-center rounded-[21px] bg-white-A700 text-center !text-gray-600"
            >
              1
            </Heading>
            <Heading
              as="h3"
              className="ml-[22px] flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-400_01 text-center !text-white-A700"
            >
              2
            </Heading>
            <Heading
              as="h4"
              className="ml-[17px] flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-400_01 text-center !text-white-A700"
            >
              3
            </Heading>
            <Img src="images/img_forward.svg" alt="forward image" className="ml-3 mt-3.5 h-[11px] self-start" />
          </div>
        </div>
      </div>
    </>
  );
}
