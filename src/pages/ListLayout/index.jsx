import React, { useState, useEffect } from "react";
import { Img, Heading, Button, Text } from "../../components";
import SideBar from "pages/SidebarLayout";

export default function ListLayoutPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=4`);
    const data = await response.json();
    setPosts(data);
  };

  const removeRow = (id) => {
    setPosts(posts.filter((post) => post.id !== id));

    // Fetch a new row and append it to the end of the array
    fetchNewRow().then((newRow) => {
      setPosts([...posts.slice(0, 3), newRow]); // Ensure only 4 cards are displayed
    });
  };

  const fetchNewRow = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 100) + 1}`);
    const data = await response.json();
    return data;
  };

  return (
    <>
      <div className="w-full bg-blue_gray-50 pr-[51px] shadow-xs md:pr-5">
        <div className="flex items-center justify-between gap-5 md:flex-col">
          {/* sidebar section */}
          <SideBar />
          <div className="flex w-[66%] flex-col items-center gap-[46px] md:w-full md:p-5">
            {/* news list section */}
            <div className="self-stretch">
              {posts.map((post) => (
                <div key={post.id} className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="flex flex-1 flex-col gap-[17px] md:self-stretch">
                    <div className="flex flex-1 items-start gap-[23px] rounded-[16px] bg-white-A700 px-[26px] pb-3.5 pt-7 shadow-xs md:flex-col sm:px-5 sm:pt-5">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="article image"
                        className="h-[67px] w-[67px] rounded-[50%]"
                      />
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-col gap-[3px]">
                          <Heading as="h2">{post.title}</Heading>
                          <Text size="s" as="p">{post.body}</Text>
                        </div>
                        <Heading size="xs" as="h3" className="!text-gray-400_02">
                          {post.date}
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[91px] md:gap-[68px] sm:gap-[45px]">
                    <Button onClick={() => removeRow(post.id)} className="w-[49px] rounded-[24px]">
                      <Img src="images/img_close.svg" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* pagination controls section */}
            <div className="flex w-[19%] flex-wrap items-center md:w-full">
              <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Prev
              </Button>
              <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
