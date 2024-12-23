import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img
        src={imgURL}
        alt="image"
        width={120}
        height={120}
        className="object-cover rounded-full"
      />
      <p className="mt-6 max-w-sm info-text">{feedback}</p>
        <div className="flex gap-2 mt-3">
            <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
          <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
        <h3 className="mt-1 text-3xl font-palanquin text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
