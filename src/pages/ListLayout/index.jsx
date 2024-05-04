// ListLayoutPage.js
import React, { useEffect, useState } from "react";
import { Img, Heading, Button, Text } from "../../components";
import Layout from "../../components/Layout";
import { getAllData, removePost } from '../../redux/actions/postsActions'; // Import the removePost action creator
import { connect } from "react-redux";

const ListLayoutPage = ({ posts, loading, error, getAllData, removePost }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRemove = (id) => {
    // Dispatch an action to remove the post from Redux store
    removePost(id);
  };

  return (
    <Layout>
      <div className="self-stretch">
        {currentPosts.map(post => (
          <div key={post.id} className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex flex-1 flex-col gap-[17px] md:self-stretch">
              <div className="flex flex-1 items-start gap-[23px] rounded-[16px] bg-white-A700 px-[26px] pb-3.5 pt-7 shadow-xs md:flex-col sm:px-5 sm:pt-5">
                <Img src="images/img_ellipse_1.png" alt="article image" className="h-[67px] w-[67px] rounded-[50%]" />
                <div className="flex flex-col items-start gap-2">
                  <div className="flex flex-col gap-[3px]">
                    <Heading as="h2">{post.title}</Heading>
                    <Text size="s" as="p">{post.body}</Text>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[91px] md:gap-[68px] sm:gap-[45px]">
              <Button className="w-[49px] rounded-[24px]" onClick={() => handleRemove(post.id)}>
                <Img src="images/img_close.svg" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[19%] flex-wrap items-center md:w-full">
        <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </Button>
        <Button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastPost >= posts.length}>
          Next
        </Button>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error
});

const mapDispatchToProps = {
  getAllData,
  removePost // Add the removePost action creator to mapDispatchToProps
};

export default connect(mapStateToProps, mapDispatchToProps)(ListLayoutPage);
