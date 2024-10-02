import { CDN_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.data;
  return (
    <div className="res_card">
      <img className="res_img" src={CDN_URL + cloudinaryImageId}></img>
      <div className="res_name">{name}</div>
      <div className="cusine">{cuisines.join(",")}</div>
      <div className="star_rating">{avgRating}</div>
    </div>
  );
};

export default RestroCard;
