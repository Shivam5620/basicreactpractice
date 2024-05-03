import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Input, TextArea, Heading, Img, Text } from "../../components";

export default function CardLayoutFormPage() {
  const [feedback, setFeedback] = useState({
    FirstName: '',
    LastName: '',
    Address: '',
    Country: '',
    email: '',
    PhoneNumber: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitting feedback:', feedback);
    setFeedback({
      FirstName: '',
      LastName: '',
      Address: '',
      Country: '',
      email: '',
      PhoneNumber: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target || {}; // Default to an empty object if e.target is undefined
    if (name) {
      setFeedback({
        ...feedback,
        [name]: value
      });
    }
  };

  return (
    <>
      <div className="relative h-[900px] w-full bg-blue_gray-50 shadow-xs md:h-auto">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full bg-black-900_66">
          <div className="flex w-[78%] items-start justify-between gap-5 rounded-br-[32px] rounded-tr-[32px] bg-blue_gray-50 pb-[43px] pl-14 pr-[101px] pt-[76px] shadow-xs md:w-full md:flex-col md:p-5">
            <div className="flex w-[29%] flex-col gap-[25px] md:w-full">
              <div className="flex items-start gap-5 rounded-lg bg-white-A700 px-3.5 py-[13px] shadow-xs">
                <Img src="images/img_ellipse_11.png" alt="profile image" className="h-[51px] w-[51px] rounded-[50%]" />
                <div className="flex flex-col items-start">
                  <Heading as="h2">Hi Reader,</Heading>
                  <Text as="p">Here’s your News!</Text>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[21px] rounded-lg bg-white-A700 px-[17px] pb-5 pt-[17px] shadow-xs">
                <Heading size="md" as="h3">
                  Have a Feedback?
                </Heading>
                <Button color="deep_orange_200" size="lg" shape="round" className="w-full font-bold sm:px-5">
                  We’re Listening!
                </Button>
              </div>
            </div>
            <div className="relative mt-1.5 h-[774px] w-[61%] md:h-auto md:w-full">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start">
                <Heading as="h4" className="!text-gray-900_01">
                  <span className="text-2xl text-gray-900_01">Thank you so much for taking the time!&nbsp;</span>
                  <span className="text-gray-900_01">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="text-base font-normal text-gray-900_01">Please provide the below details!</span>
                </Heading>
                <Text as="p" className="ml-2.5 mt-11 !text-gray-900_01 md:ml-0" >
                  First Name:
                </Text>
                <Input shape="round" name="FirstName" value={feedback.FirstName} placeholder={`John`} className="mt-2 w-[58%] sm:px-5" onChange={handleChange} />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Last Name:
                </Text>
                <Input shape="round" name="LastName" value={feedback.LastName} placeholder={`Doe`} className="mt-2 w-[58%] sm:px-5" onChange={handleChange} />

                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Address:
                </Text>
                <TextArea
                  shape="round"
                  name="Address"
                  value={feedback.Address}
                  placeholder={`Enter your full Postal Address`}
                  className="mt-2 self-stretch text-gray-400 sm:px-5 sm:pb-5"
                  onChange={handleChange}
                />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Country:
                </Text>
                <Input shape="round" name="Country" value={feedback.Country} placeholder={`Country`} className="mt-2 w-[58%] sm:px-5" onChange={handleChange} />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Email:
                </Text>
                <Input shape="round" name="email" value={feedback.email} placeholder={`email@example.com`} className="mt-2 w-[58%] sm:px-5" onChange={handleChange} />
                <Text as="p" className="ml-2.5 mt-[19px] !text-gray-900_01 md:ml-0">
                  Phone Number:
                </Text>
                <Input shape="round" name="PhoneNumber" value={feedback.PhoneNumber} placeholder={`1234567890`} className="mt-2 w-[58%] sm:px-5" onChange={handleChange} />
                <Button color="teal_300" size="sm" shape="round" className="mt-[33px] min-w-[231px] font-bold sm:px-5" onClick={handleSubmit}>
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
