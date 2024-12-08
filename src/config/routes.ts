/*
 * File này khai bảo các route của ứng dụng
 */
const routes = {
  home: "/",
  search: "/search",
  carDetail: "/car/:carId",

  manager: {
    overview: "/management/manager",
    dashboard: "/management/manager/dashboard",
    staffManagement: "/management/manager/staffs",
    cars: "/management/manager/cars",
    addCar: "/management/manager/cars/add-car",
    editCar: "/management/manager/cars/edit-car",
  },

  staff: {
    overview: "/management/staff",
    orderManagement: "/management/staff/orders",
    cars: "/management/staff/cars",
    addCar: "/management/staff/cars/add-car",
    editCar: "/management/staff/cars/edit-car/:id",
  },

  profile: "/profile",
  login: "/logIn",
  auth: "/auth",
  signUp: "/signUp",
  resetPassword: "/resetPassword",

  ordermanagement: "/ordermanagement",
  bookingInfo2: "/bookinginfo2",
  bookingInfo1: "/bookinginfo1",
  booking3: "/booking3",
  booking4: "/booking4",
};

export default routes;
