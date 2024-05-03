import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import CardLayoutColumnsedvolutp from "../../components/CardLayoutColumnsedvolutp";
import { Link } from "react-router-dom";
import SideBar from "pages/SidebarLayout";

export default function CardLayoutPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const nextPage = () => {
    if (posts.length === postsPerPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1); // If last page, go back to first page
    }
  };

  const prevPage = () => {
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
            {posts.map((post) => (
              <CardLayoutColumnsedvolutp
                key={post.id}
                sedvolutpattext={post.title}
                interdumtext={post.body}
                timezonetext={post.date}
                imageone="images/img_rectangle_17.png" // You may need to adjust this based on your API response
              />
            ))}
          </div>
          {/* pagination section */}
          <div className="flex w-[19%] flex-wrap items-center md:w-full md:p-5">
            <Button onClick={prevPage} disabled={currentPage === 1} className="text-shadow-ts flex h-[42px] w-[42px] items-center justify-center rounded-[21px] bg-white-A700 text-center !text-gray-600 hover:!text-gray-600 cursor-pointer">
              Prev
            </Button>
            <Button onClick={nextPage} className="text-shadow-ts flex h-[42px] w-[42px] items-center justify-center rounded-[21px] bg-white-A700 text-center !text-gray-600 hover:!text-gray-600 cursor-pointer">
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
