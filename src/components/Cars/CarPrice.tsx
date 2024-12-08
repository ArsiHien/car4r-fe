interface CarPriceProps {
  price: number;
  promotionPrice?: number;
}

const CarPrice: React.FC<CarPriceProps> = ({ price, promotionPrice }) => {
  return (
    <div>
      {promotionPrice ? (
        <div>
          <span className="text-2xl font-bold text-[#1A202C]">
            ${promotionPrice.toFixed(2)}/
          </span>
          <span className="text-sm text-[#90A3BF]"> day</span>
          <div className="text-sm text-[#90A3BF] line-through">
            ${price.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>
          <span className="text-2xl font-bold text-[#1A202C]">
            ${price.toFixed(2)}/
          </span>
          <span className="text-sm text-[#90A3BF]"> day</span>
        </div>
      )}
    </div>
  );
};

export default CarPrice;
