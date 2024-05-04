// CardLayoutPage.js
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Spinner } from "../../components";
import CardLayoutColumnsedvolutp from "../../components/CardLayoutColumnsedvolutp";
import SideBar from "../../pages/SidebarLayout";
import { getAllData, removePost } from "../../redux/actions/postsActions";

const CardLayoutPage = ({ posts, loading, error, getAllData, removePost }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = posts.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRemoveCard = (id) => {
    removePost(id);
  };

  return (
    <>
      <div className="flex w-full items-center justify-between gap-5 bg-blue_gray-50 pr-[77px] shadow-xs md:flex-col md:pr-5">
        <SideBar />
        <div className="flex w-[66%] flex-col items-center gap-[67px] md:w-full sm:gap-[33px]">
          <div className="grid grid-cols-3 justify-center gap-9 self-stretch md:grid-cols-2 sm:grid-cols-1">
            {currentCards.map((card, index) => (
              <CardLayoutColumnsedvolutp
                key={index}
                sedvolutpattext={card.title}
                interdumtext={card.body}
                timezonetext={card.date}
                imageone="images/img_rectangle_17.png"
                onClose={() => handleRemoveCard(card.id)} // Pass onClose prop to handleRemoveCard function
              />
            ))}
          </div>
          <div className="flex w-[19%] flex-wrap items-center md:w-full md:p-5">
            <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </Button>
            <Button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastCard >= posts.length}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

const mapDispatchToProps = {
  getAllData,
  removePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardLayoutPage);
