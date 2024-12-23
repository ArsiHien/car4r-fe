import { Button, Card, Col, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Bill = () => {
  const navigate = useNavigate();
  const selectedCar = useSelector(
    (state: RootState) => state.booking.selectedCar
  );
  const totalPrice = useSelector(
    (state: RootState) => state.booking.totalPrice
  );
  const startDate = useSelector((state: RootState) => state.booking.startDate);
  const returnDate = useSelector(
    (state: RootState) => state.booking.returnDate
  );
  const paymentMethod = useSelector(
    (state: RootState) => state.booking.paymentMethod
  );

  const handleHome = () => {
    navigate("/");
  };

  const goToManager = () => {
    navigate("/orders");
  };

  return (
    <div className=" mx-5 h-[600px] py-5 text-xl">
      <Card className="bg-white mx-5 py-5">
        <Title className="text-blue-900 text-3xl text-center">
          CAR4R THANK YOU!!!
        </Title>
        <Row gutter={16} className="py-5">
          <Col span={12}>
            <Title level={4} className="text-blue-600">
              Order Info
            </Title>
            <hr />
            <div className="flex justify-between">
              <Text className="text-lg">Order Date:</Text>
              <Text className="text-right text-lg">{startDate}</Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-lg">Order Status:</Text>
              <Text className="text-right text-lg">Completed</Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-lg">Order Total:</Text>
              <Text className="text-right text-lg">
                {totalPrice.toLocaleString()} USD
              </Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-lg">Return Date:</Text>
              <Text className="text-right text-lg">{returnDate}</Text>
            </div>
          </Col>

          <Col span={12}>
            <Title level={4} className="text-blue-600">
              Payment Info
            </Title>
            <hr />
            <div className="flex justify-between">
              <Text className="text-lg">Payment Method:</Text>
              <Text className="text-right text-lg">{paymentMethod}</Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-lg">Payment Date:</Text>
              <Text className="text-right text-lg">2021-09-06</Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-lg">Payment Status:</Text>
              <Text className="text-right text-lg">Paid</Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-lg">Payment Total:</Text>
              <Text className="text-right text-lg">
                {totalPrice.toLocaleString()} USD
              </Text>
            </div>
          </Col>
        </Row>
        <div className="flex justify-center   gap-10 pt-10">
          <Button
            className="bg-blue-600 text-white hover:bg-blue-900"
            size="large"
            onClick={handleHome}
          >
            Go Home
          </Button>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-900"
            size="large"
            onClick={goToManager}
          >
            Order Management
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Bill;
