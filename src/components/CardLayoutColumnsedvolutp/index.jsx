import React, { useState } from "react";
import { Img, Heading, Text } from "./..";

export default function CardLayoutColumnsedvolutp({
  sedvolutpattext,
  interdumtext,
  timezonetext = "Mon, 21 Dec 2020 14:57 GMT",
  imageone,
  ...props
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full pt-3 pb-5 px-3 bg-white-A700 shadow-xs rounded-lg`}
    >
      <Img src="images/img_close.svg" alt="closebutton" className="h-4 w-4 self-end" />
      <Heading as="h5" className="w-full leading-6 !text-black-900">
        {sedvolutpattext}
      </Heading>
      <Text as="p" className="w-full leading-5 !text-black-900">
        {expanded ? interdumtext : interdumtext.slice(0, 100) + "..."}
      </Text>
      {!expanded && (
        <button onClick={toggleExpanded} className="text-blue-500 hover:underline">
          Read More
        </button>
      )}
      <Heading size="xs" as="h6" className="self-start !text-gray-400">
        {timezonetext}
      </Heading>
      <Img src={imageone} alt="decorativeimage" className="mt-2.5 h-40 w-full rounded object-cover md:h-auto" />
    </div>
  );
}
