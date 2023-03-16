function DriverCard(props) {
  const rating = Math.round(props.rating);
  const fullStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);

  return (
    <div className="DriverCardCont">
      <div className="DriverCardImg">
        <img src={props.img} alt="profile" />
      </div>
      <div className="DriverCardText">
        <h3>{props.name}</h3>
        <h3>
          {fullStars}{emptyStars}
        </h3>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
