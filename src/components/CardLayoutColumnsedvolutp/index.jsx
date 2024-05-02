import React from "react";
import { Img, Heading, Text } from "./..";

export default function CardLayoutColumnsedvolutp({
  sedvolutpattext = "Sed volutpat vitae id eleifend. Commodo...",
  interdumtext = "Interdum pretium porttitor nibh cursus...",
  timezonetext = "Mon, 21 Dec 2020 14:57 GMT",
  imageone = "images/img_rectangle_17.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full pt-3 pb-[23px] px-3 sm:pb-5 bg-white-A700 shadow-xs rounded-lg`}
    >
      <Img src="images/img_close.svg" alt="closebutton" className="h-[18px] w-[18px] self-end" />
      <Heading as="h5" className="w-[90%] leading-[23px] !text-black-900 md:w-full">
        {sedvolutpattext}
      </Heading>
      <Text as="p" className="w-[90%] leading-[18px] !text-black-900 md:w-full">
        {interdumtext}
      </Text>
      <Heading size="xs" as="h6" className="self-start !text-gray-400_02">
        {timezonetext}
      </Heading>
      <Img src={imageone} alt="decorativeimage" className="mt-2.5 h-[122px] w-full rounded object-cover md:h-auto" />
    </div>
  );
}
