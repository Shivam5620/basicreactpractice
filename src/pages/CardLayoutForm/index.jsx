import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Text, Img, TextArea, Heading } from "../../components";
import CardLayoutFormColumn from "../../components/CardLayoutFormColumn";

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

export default function CardLayoutFormPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Share Your Thoughts - Feedback Form</title>
        <meta
          name="description"
          content="We value your feedback! Use our simple form to submit your thoughts, contact details, and help us improve your news reading experience."
        />
      </Helmet>

      {/* main content section */}
      <div className="relative h-[900px] w-full bg-blue_gray-50 shadow-xs md:h-auto">
        {/* card section */}
        <div className="mr-[77px] flex w-[62%] flex-col items-center gap-[67px] md:mr-0 sm:gap-[33px]">
          {/* card grid section */}
          <div className="grid grid-cols-3 justify-center gap-9 self-stretch md:grid-cols-2 sm:grid-cols-1">
            {data.map((d, index) => (
              <CardLayoutFormColumn {...d} key={"cardGrid" + index} />
            ))}
          </div>

          {/* pagination section */}
          <div className="flex w-[19%] flex-wrap items-center md:w-full md:p-5">
            <Heading
              as="h1"
              className="text-shadow-ts flex h-[42px] w-[42px] items-center justify-center rounded-[21px] bg-white-A700 text-center !text-gray-600"
            >
              1
            </Heading>
            <Heading
              as="h2"
              className="ml-[22px] flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-400_01 text-center !text-white-A700"
            >
              2
            </Heading>
            <Heading
              as="h3"
              className="ml-[17px] flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-400_01 text-center !text-white-A700"
            >
              3
            </Heading>
            <Img src="images/img_forward.svg" alt="forward image" className="ml-3 mt-3.5 h-[11px] self-start" />
          </div>
        </div>

        {/* feedback form section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full bg-black-900_66">
          {/* form sidebar section */}
          <div className="flex w-[78%] items-start justify-between gap-5 rounded-br-[32px] rounded-tr-[32px] bg-blue_gray-50 pb-[43px] pl-14 pr-[101px] pt-[76px] shadow-xs md:w-full md:flex-col md:p-5">
            {/* greeting section */}
            <div className="flex w-[29%] flex-col gap-[25px] md:w-full">
              <div className="flex items-start gap-5 rounded-lg bg-white-A700 px-3.5 py-[13px] shadow-xs">
                <Img src="images/img_ellipse_11.png" alt="profile image" className="h-[51px] w-[51px] rounded-[50%]" />
                <div className="flex flex-col items-start">
                  <Heading as="h2">Hi Reader,</Heading>
                  <Text as="p">Here’s your News!</Text>
                </div>
              </div>

              {/* feedback invitation section */}
              <div className="flex flex-col items-center gap-[21px] rounded-lg bg-white-A700 px-[17px] pb-5 pt-[17px] shadow-xs">
                <Heading size="md" as="h3">
                  Have a Feedback?
                </Heading>
                <Button color="deep_orange_200" size="lg" shape="round" className="w-full font-bold sm:px-5">
                  We’re Listening!
                </Button>
              </div>
            </div>

            {/* feedback form section */}
            <div className="relative mt-1.5 h-[774px] w-[61%] md:h-auto md:w-full">
              <div className="mb-[91px] mr-[35px] flex flex-col items-start gap-[71px] md:mr-0 md:gap-[53px] sm:gap-[35px]">
                <Text as="p" className="!text-red-600">
                  Please enter a valid e-mail
                </Text>
                <Text as="p" className="!text-red-600">
                  Please enter a valid number
                </Text>
              </div>

              {/* feedback form details section */}
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start">
                <Heading as="h4" className="!text-gray-900_01">
                  <span className="text-2xl text-gray-900_01">Thank you so much for taking the time!&nbsp;</span>
                  <span className="text-gray-900_01">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="text-base font-normal text-gray-900_01">Please provie the below details!</span>
                </Heading>
                <Text as="p" className="ml-2.5 mt-11 !text-gray-900_01 md:ml-0">
                  First Name:
                </Text>
                <Input shape="round" name="First Name Input" placeholder={`John`} className="mt-2 w-[58%] sm:px-5" />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Last Name:
                </Text>
                <Input shape="round" name="Last Name Input" placeholder={`Doe`} className="mt-2 w-[58%] sm:px-5" />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Address:
                </Text>
                <TextArea
                  shape="round"
                  name="Address Input"
                  placeholder={`Enter your full Postal Address`}
                  className="mt-2 self-stretch text-gray-400 sm:px-5 sm:pb-5"
                />
                <Text as="p" className="ml-2.5 mt-[11px] !text-gray-900_01 md:ml-0">
                  Country:
                </Text>
                <Input
                  shape="round"
                  name="Country Search"
                  placeholder={`India`}
                  value={searchBarValue2}
                  onChange={(e) => setSearchBarValue2(e)}
                  suffix={
                    searchBarValue2?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue2("")} height={24} width={24} fillColor="#a3a3a3ff" />
                    ) : (
                      <Img src="images/img_search.svg" alt="search" className="h-[24px] w-[24px] cursor-pointer" />
                    )
                  }
                  className="mt-1.5 w-[68%] gap-[35px] sm:px-5"
                />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Email ID:
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder={`example@sample.com`}
                  className="mt-2 w-[58%] sm:px-5"
                />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Phone Number:
                </Text>
                <div className="mt-2 flex w-[58%] gap-[9px] md:w-full">
                  <Button size="xs" shape="round" className="min-w-[84px] text-gray-400 !shadow-xs sm:px-5">
                    +91
                  </Button>
                  <Input
                    shape="round"
                    type="number"
                    name="Phone Input"
                    placeholder={`123456789`}
                    className="flex-grow sm:pr-5"
                  />
                </div>
                <Button color="teal_300" size="sm" shape="round" className="mt-[33px] min-w-[231px] font-bold sm:px-5">
                  Submit Feedback
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
