import { useEffect } from "react";
import OrderDashboard from "../../components/Order/OrderDashboard";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../store/Customer/bookingsAction";

const CustomerOrderManagement = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentBookings, pastBookings, loading, error } = useSelector(
    (state: RootState) => state.customerBookings
  );

  const userId = useSelector((state: RootState) => state.user.user.id);

  useEffect(() => {
    dispatch(getBookings(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <OrderDashboard
        currentBookings={currentBookings}
        pastBookings={pastBookings}
      ></OrderDashboard>
    </div>
  );
};

export default CustomerOrderManagement;
