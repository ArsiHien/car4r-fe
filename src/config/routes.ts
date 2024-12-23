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
    profile: "/management/manager/profile",
    staffManagement: "/management/manager/staffs",
    cars: "/management/manager/cars",
    addCar: "/management/manager/cars/add-car",
    editCar: "/management/manager/cars/edit-car/:id",
  },

  staff: {
    overview: "/management/staff",
    orderManagement: "/management/staff/orders",
    cars: "/management/staff/cars",
    addCar: "/management/staff/cars/add-car",
    editCar: "/management/staff/cars/edit-car/:id",
    profile:"/management/staff/profile"
  },

  customer: {
    profile: "/profile",
    orderManagement: "/orders",
  },

  login: "/logIn",
  auth: "/auth",
  signUp: "/signUp",
  resetPassword: "/resetPassword",

  ordermanagement: "/ordermanagement",
  booking: "/booking"
};

export default routes;
