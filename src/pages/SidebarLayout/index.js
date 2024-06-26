import React from "react";
import { Img, Heading, Button, Text } from "../../components";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="flex w-[29%] flex-col gap-[27px] rounded-br-[32px] rounded-tr-[32px] bg-blue_gray-50 px-14 pb-[382px] pt-[76px] shadow-xs md:w-full md:p-5">
        {/* greeting section */}
        <div className="flex items-start gap-5 rounded-lg bg-white-A700 px-3.5 py-[13px] shadow-xs">
          <Img src="images/img_ellipse_11.png" alt="profile image" className="h-[51px] w-[51px] rounded-[50%]" />
          <div className="flex flex-col items-start">
            <Heading as="h1">Hi Reader,</Heading>
            <Text as="p">Here’s your News!</Text>
          </div>
        </div>

        {/* view toggle section */}
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white-A700 px-4 pb-[17px] pt-4 shadow-xs">
          <Heading size="md" as="h2">
            View Toggle
          </Heading>
          <Link to ="/cardlayout">
            <div className="flex items-center gap-[30px] self-stretch rounded-lg bg-blue_gray-50 shadow-bs">
              <div className="flex w-[58%] justify-center rounded-bl-lg rounded-tl-lg bg-teal-A100 p-[18px] shadow-bs">
                <Img
                  src="images/img_megaphone_gray_900_01_42x55.svg"
                  alt="megaphone image"
                  className="h-[42px] w-[77%]"
                />
              </div>
              <Img src="images/img_megaphone_gray_500_01.svg" alt="secondary megaphone" className="h-[27px]" />
            </div>
          </Link>
        </div>

        {/* feedback section */}
        <div className="flex flex-col items-center gap-[21px] rounded-lg bg-white-A700 px-[17px] pb-5 pt-[17px] shadow-xs">
          <Heading size="md" as="h2">
            Have a Feedback?
          </Heading>
          <Link to ='/cardlayoutform'>
            <Button color="teal_A100" size="lg" shape="round" className="w-full font-bold sm:px-5">
              We’re Listening!
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default SideBar;