function Rating({ children }) {

  const rating = Math.round(children);
  const fullStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);
  return (
    <div>
      {fullStars}{emptyStars}
    </div>
  );
}

export default Rating;
