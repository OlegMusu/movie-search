import { useState, useEffect } from "react";
import { getMovieReviews } from "../../../api";
import { useParams } from "react-router-dom";

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
      <h1>Reviews</h1>
      {reviews.length === 0 ? <p>We don't have any reviews for this movie.</p>: (<ul>{
        reviews.map((item) => {
            return (
                <li key={item.id}>
                    <h3>{item.autor}</h3>
                    <p>{item.content}</p>
                </li>
            )
        })
        }</ul>)}
    </>
  );
}
