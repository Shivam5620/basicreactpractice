// CardLayoutPage.js

import React, { useState, useEffect } from "react";
import { Button, Spinner } from "../../components"; // Assuming Spinner is a component for loading indicator
import CardLayoutColumnsedvolutp from "../../components/CardLayoutColumnsedvolutp";
import SideBar from "pages/SidebarLayout";

export default function CardLayoutPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
    setLoading(false);
  };

  const removeCard = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);

    // Fetch a new card and append it to the end of the array
    fetchNewCard().then((newCard) => {
      updatedPosts.push(newCard);
      setPosts(updatedPosts);
    });
  };

  const fetchNewCard = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    return data;
  };

  const goToNextPage = () => {
    if (posts.length === postsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-between gap-5 bg-blue_gray-50 pr-[77px] shadow-xs md:flex-col md:pr-5">
        {/* sidebar section */}
        <SideBar />
        <div className="flex w-[66%] flex-col items-center gap-[67px] md:w-full sm:gap-[33px]">
          {/* news cards section */}
          <div className="grid grid-cols-3 justify-center gap-9 self-stretch md:grid-cols-2 sm:grid-cols-1">
            {loading ? (
              <Spinner /> // Display a loading spinner while fetching posts
            ) : (
              posts.map((post, index) => (
                <CardLayoutColumnsedvolutp
                  key={index} // Use index as key, assuming array index is unique
                  sedvolutpattext={post.title}
                  interdumtext={post.body}
                  timezonetext={post.date}
                  imageone="images/img_rectangle_17.png" // You may need to adjust this based on your API response
                  onClose={() => removeCard(index)} // Pass the removeCard function as a prop
                />
              ))
            )}
          </div>
          {/* pagination section */}
          <div className="flex w-[19%] flex-wrap items-center md:w-full md:p-5">
            <Button onClick={goToPreviousPage} disabled={currentPage === 1} className="text-shadow-ts flex h-[42px] w-[42px] items-center justify-center rounded-[21px] bg-white-A700 text-center !text-gray-600 hover:!text-gray-600 cursor-pointer">
              Prev
            </Button>
            <Button onClick={goToNextPage} className="text-shadow-ts flex h-[42px] w-[42px] items-center justify-center rounded-[21px] bg-white-A700 text-center !text-gray-600 hover:!text-gray-600 cursor-pointer">
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
