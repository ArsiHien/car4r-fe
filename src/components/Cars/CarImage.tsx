import { Carousel } from "antd";
import { useRef, useState } from "react";

const images: string[] = [
  "https://placehold.co/600x400/orange/white",
  "https://placehold.co/600x400/red/white",
  "https://placehold.co/600x400/blue/white",
  "https://placehold.co/600x400/green/white",
  "https://placehold.co/600x400/violet/white",
];

const CarImage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleThumbnailClick = (id: number) => {
    setCurrentIndex(id);
    carouselRef.current?.goTo(id, false);
  };

  const handleCarouselChange = (_currentSlide: number, nextSlide: number) => {
    setCurrentIndex(nextSlide);
  };

  return (
    <div className="container mx-auto p-4">
      <Carousel
        ref={carouselRef}
        arrows
        className="w-full overflow-hidden"
        beforeChange={handleCarouselChange}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((el, id) => (
          <div
            key={id}
            onClick={() => handleThumbnailClick(id)}
            className={`cursor-pointer rounded-md overflow-hidden border-2 ${
              currentIndex === id
                ? "border-blue-500 shadow-lg"
                : "border-gray-300"
            }`}
          >
            <img
              src={el}
              alt={`Thumbnail ${id}`}
              className={`w-16 h-12 object-cover transition-transform duration-500 ${
                currentIndex === id
                  ? "rounded-md transform scale-90"
                  : "rounded-sm"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarImage;
