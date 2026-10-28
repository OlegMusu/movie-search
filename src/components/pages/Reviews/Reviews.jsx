import { useState, useEffect } from "react";
import { getMovieReviews } from "../../../api";
import { useParams } from "react-router-dom";
import {
  ReviewsTitle,
  ReviewsList,
  ReviewItem,
  AuthorName,
  ReviewContent,
  NoReviewsMessage,
} from "./Reviews.style";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchReviews() {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    }
    fetchReviews();
  }, [movieId]);
  return (
    <>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {reviews.length === 0 ? (
        <NoReviewsMessage>We don't have any reviews for this movie.</NoReviewsMessage>
      ) : (
        <ReviewsList>
          {reviews.map((item) => {
            return (
              <ReviewItem key={item.id}>
                <AuthorName>Author: {item.author}</AuthorName>
                <ReviewContent>{item.content}</ReviewContent>
              </ReviewItem>
            );
          })}
        </ReviewsList>
      )}
    </>
  );
}
