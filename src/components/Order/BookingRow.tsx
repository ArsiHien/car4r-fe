import React, { useEffect, useState } from "react";
import { Button, message, Modal, Rate, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCarCategories } from "../../store/CarCategory/carCategoryActions";
import { BookingResponse } from "../../types/Booking";
import {
  cancelBooking,
  createReview,
  getBookings,
  updateReview,
} from "../../store/Customer/bookingsAction";
import {
  updateBookingReview,
} from "../../store/Customer/bookingSlice";

interface BookingRowProps {
  booking: BookingResponse;
  index: number;
  isCurrent: boolean;
}

const tagColors: { [key: string]: string } = {
  IN_PROCESS: "blue",
  CANCELED: "red",
  APPROVED: "green",
  COMPLETED: "yellow",
};

const statusMap: { [key: string]: string } = {
  IN_PROCESS: "In Process",
  CANCELED: "Canceled",
  APPROVED: "Approved",
  COMPLETED: "Completed",
};

const BookingRow: React.FC<BookingRowProps> = ({
  booking,
  index,
  isCurrent,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [review, setReview] = useState(booking.review?.review || "");
  const [currentRating, setCurrentRating] = useState(
    booking.review?.rating || 5
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);

  const carCategories = useSelector(
    (state: RootState) => state.carCategory.carCategories
  );

  useEffect(() => {
    dispatch(fetchCarCategories());
  }, [dispatch]);

  const goToCarDetailPage = () => {
    const carCategory = carCategories.find(
      (category) => category.name === booking.carCategoryName
    );
    if (carCategory) {
      navigate(`/car/${carCategory.name}-${carCategory.id}`);
    }
  };
  const toggleReviewSection = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRatingChange = (value: number) => {
    setCurrentRating(value);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = async () => {
    const reviewData = {
      customerId: user.id,
      bookingId: booking.id,
      review,
      rating: currentRating,
      reviewDate: new Date().toISOString().split("T")[0],
    };

    console.log(reviewData);

    if (booking.review) {
      message.loading({
        content: "Submitting your review...",
        key: "updatable",
      });
      await dispatch(
        updateReview({ ...reviewData, reviewId: booking.review.id })
      );
      message.success({
        content: "Review updated successfully!",
        key: "updatable",
        duration: 2,
      });
    } else {
      message.loading({
        content: "Submitting your review...",
        key: "updatable",
      });
      const newReview = await dispatch(createReview(reviewData)).unwrap();
      dispatch(
        updateBookingReview({ bookingId: booking.id, review: newReview })
      );
      message.success({
        content: "Review submitted successfully!",
        key: "updatable",
        duration: 2,
      });
    }
    // setIsExpanded(false);
  };

  const handleCancelClick = async () => {
    Modal.confirm({
      title: "Are you sure you want to cancel this booking?",
      content: "Once cancelled, this action cannot be undone.",
      okText: "Yes, Cancel",
      cancelText: "No, Keep Booking",
      onOk: async () => {
        try {
          await dispatch(
            cancelBooking({ bookingId: booking.id, status: "CANCELED" })
          ).unwrap();
          await dispatch(getBookings(user.id));
          message.success({
            content: "Canceled booking successfully!",
            key: "updatable",
            duration: 2,
          });
        } catch (error) {
          message.error({
            content: "Failed to cancel the booking. Please try again.",
            key: "updatable",
            duration: 2,
          });
        }
      },
    });
  };

  return (
    <div className="flex flex-wrap font-medium text-gray-700 bg-white rounded-md mb-4 shadow-md">
      <div className="flex w-full font-medium text-gray-700 bg-white p-4 rounded-md items-center">
        <div className="basis-[5%] font-medium">{index + 1}</div>
        <div className="basis-1/5" onClick={goToCarDetailPage}>
          <div>{booking.carCategoryName}</div>
          <div className="text-sm text-gray-500">{booking.carLicensePlate}</div>
        </div>
        <div className="basis-[12%]">{booking.bookingDate}</div>
        <div className="basis-[12%] flex flex-col">
          <div className="text-xs text-gray-500 font-normal">Start</div>
          <div className="font-semibold">{booking.startDate}</div>
          <div className="text-xs text-gray-500 font-normal">Return</div>
          <div className="font-semibold">{booking.returnDate}</div>
        </div>

        <div className="basis-[12%] flex flex-col">
          <div className="text-xs text-gray-500 font-normal">Loan</div>
          <div className="font-semibold">{booking.loanPlace}</div>
          <div className="text-xs text-gray-500 font-normal">Return</div>
          <div className="font-semibold">{booking.returnPlace}</div>
        </div>

        <div className="basis-[12%] font-medium">${booking.totalPrice}</div>
        <div className="basis-[12%]">
          <Tag color={tagColors[booking.status] || "default"}>
            {statusMap[booking.status] || "Unknown"}
          </Tag>{" "}
        </div>
        <div className="basis-[15%] flex">
          {isCurrent ? (
            <Button type="primary" danger onClick={handleCancelClick}>
              Cancel
            </Button>
          ) : booking.status === "CANCELED" ? (
            <div className="text-gray-500">Cancelled</div>
          ) : (
            <div onClick={toggleReviewSection}>
              <Rate
                disabled={true}
                value={currentRating}
                className="text-sm ml-0"
              />
            </div>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="w-full p-4 mb-4 bg-gray-50 rounded-md shadow-md">
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Rating
            </label>
            <Rate
              id="rating"
              value={currentRating}
              onChange={handleRatingChange}
              className="text-xl"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Write your review
            </label>
            <textarea
              id="review"
              rows={4}
              value={review}
              onChange={handleReviewChange}
              placeholder="Share your thoughts about this booking..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            ></textarea>
          </div>

          <div className="flex justify-end mt-4 space-x-2">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleSubmitReview}
            >
              Submit
            </button>
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={toggleReviewSection}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingRow;
