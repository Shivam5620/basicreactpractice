import React from "react";
import { Img, Heading, Text } from "./..";

export default function CardLayoutFormColumn(props) {
  const { sedvolutpattext, interdumtext, timezonetext, imageone } = props;

  return (
    <div
      {...props}
      className={`${
        props.className || "" // ensure className exists
      } flex flex-col items-end w-full pt-3 pb-[23px] gap-[3px] px-4 sm:pb-5 bg-white-A700 shadow-xs rounded-lg`}
    >
      <Img src="images/img_close.svg" alt="closebutton" className="h-[18px] w-[18px]" />
      <div className="mr-[9px] flex flex-col self-stretch md:mr-0">
        <Heading as="h5" className="leading-[23px] !text-black-900">
          {sedvolutpattext}
        </Heading>
        <Text as="p" className="leading-[18px] !text-black-900">
          {interdumtext}
        </Text>
        <Heading size="xs" as="h6" className="!text-gray-400_02">
          {timezonetext}
        </Heading>
        <Img src={imageone} alt="decorativeimage" className="mt-2.5 h-[122px] rounded object-cover" />
      </div>
    </div>
  );
}
