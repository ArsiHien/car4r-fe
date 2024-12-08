import { useEffect, useState } from "react";
import {
  Alert,
  GetProp,
  Image,
  Input,
  InputNumber,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import CreatableSelect from "react-select/creatable";
import { CarCategoryRequest, CarDetail } from "../../types/CarCategoryDetail";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  addCarCategory,
  fetchCarCateforyTypes,
} from "../../store/CarCategory/carCategoryActions";
import { fetchAmenities } from "../../store/CarCategory/amenitySlice";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const AddCarForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [images, setImages] = useState<UploadFile[]>([]);
  const [mainImage, setMainImage] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [alert, setAlert] = useState<{
    message: string;
    type: "info" | "success" | "error";
  } | null>(null);
  const [carData, setCarData] = useState<Partial<CarCategoryRequest>>({
    name: "",
    type: "",
    numberOfPerson: 0,
    steering: "",
    gasoline: 0,
    description: "",
    price: 0,
    promotionPrice: 0,
    mainImage: null,
    carImages: [],
    amenityNames: [],
  });
  const dispatch = useDispatch<AppDispatch>();

  const { carCategories, carCategoryTypes, loading, error } = useSelector(
    (state: RootState) => state.carCategory
  );
  const {
    amenities
  } = useSelector((state: RootState) => state.amenity);

  useEffect(() => {
    dispatch(fetchCarCateforyTypes());
    dispatch(fetchAmenities());
  }, [dispatch]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleMainImageChange: UploadProps["onChange"] = ({ fileList }) => {
    setMainImage(fileList);
    const file = fileList[0]?.originFileObj;
    if (file) {
      setCarData({ ...carData, mainImage: file });
    }
  };

  const handleCarImagesChange: UploadProps["onChange"] = ({ fileList }) => {
    setImages(fileList);
    const files = fileList.map((file) => file.originFileObj as File);
    setCarData({ ...carData, carImages: files });
  };

  const uploadButton = (
    <button type="button">
      <PlusOutlined />
      <div className="mt-2">Upload image</div>
    </button>
  );

  const validateForm = () => {
    const validationErrors: string[] = [];
    if (!carData.name) validationErrors.push("Name is required.");
    if (!carData.type) validationErrors.push("Car type is required.");
    if (!carData.numberOfPerson || carData.numberOfPerson <= 0)
      validationErrors.push("Capacity must be greater than 0.");
    if (!carData.price || carData.price <= 0)
      validationErrors.push("Price must be greater than 0.");
    if (
      carData.promotionPrice !== undefined &&
      carData.promotionPrice >= carData.price!
    )
      validationErrors.push("Promotion price must be less than price.");
    return validationErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors([]);
    const formData = new FormData();
    formData.append("name", carData.name!);
    formData.append("type", carData.type!);
    formData.append("numberOfPerson", carData.numberOfPerson!.toString());
    formData.append("steering", carData.steering!);
    formData.append("gasoline", carData.gasoline!.toString());
    formData.append("description", carData.description!);
    formData.append("price", carData.price!.toString());
    formData.append("promotionPrice", carData.promotionPrice!.toString());
    if (mainImage[0]) {
      formData.append("mainImage", mainImage[0].originFileObj as File);
    }
    carData.carImages?.forEach((file, index) => {
      formData.append(`carImages`, file);
    });
    formData.append("amenityNames", carData.amenityNames?.join(",") || "");

    try {
      setAlert({ message: "Adding car category...", type: "info" });
      await dispatch(addCarCategory(formData)).unwrap();
      setAlert({
        message: "Car category added successfully!",
        type: "success",
      });
    } catch (error: any) {
      setAlert({
        message: `Failed to add car category: ${error.message}`,
        type: "error",
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input
              className="w-full p-2"
              placeholder="Name of car"
              value={carData.name}
              onChange={(e) => setCarData({ ...carData, name: e.target.value })}
            ></Input>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Car Type</label>
            <CreatableSelect
              isClearable
              placeholder="Type of car"
              options={carCategoryTypes.map((type) => ({
                label: type,
                value: type,
              }))}
              onChange={(value) => {
                setCarData({ ...carData, type: value?.value });
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-16 gap-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Capacity</label>
            <InputNumber
              min={1}
              value={carData.numberOfPerson}
              className="w-full p-1"
              onChange={(e) =>
                setCarData({
                  ...carData,
                  numberOfPerson: Number(e),
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Steering</label>
            <Select
              defaultValue="Manual"
              className="w-full h-[39px]"
              onChange={(e) => {
                setCarData({ ...carData, steering: e });
              }}
              options={[
                { value: "Manual", label: "Manual" },
                { value: "Electric", label: "Electric" },
              ]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gasoline</label>
            <InputNumber
              min={1}
              value={carData.gasoline}
              className="w-full p-1"
              onChange={(e) =>
                setCarData({
                  ...carData,
                  gasoline: Number(e),
                })
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <InputNumber
              min={1}
              value={carData.price}
              className="w-full p-1"
              onChange={(e) =>
                setCarData({
                  ...carData,
                  price: Number(e),
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Promotion price
            </label>
            <InputNumber
              min={1}
              value={carData.promotionPrice}
              className="w-full p-1"
              onChange={(e) =>
                setCarData({
                  ...carData,
                  promotionPrice: Number(e),
                })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amenities</label>
          <CreatableSelect
            isMulti
            isClearable
            classNames={{
              control: (state) =>
                state.isFocused ? "border-[#4096ff]" : "border-[#d9d9d9]",
            }}
            placeholder="Amenities"
            options={amenities.map((amenity) => ({
              label: amenity.name,
              value: amenity.name,
            }))}
            onChange={(values) => {
              const amenities = values.map((values) => values.value);
              setCarData({
                ...carData,
                amenityNames: amenities,
              });
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            value={carData.description}
            onChange={(e) =>
              setCarData({ ...carData, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Main Images</label>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <Upload
              listType="picture-card"
              fileList={mainImage}
              onPreview={handlePreview}
              onChange={handleMainImageChange}
            >
              {mainImage.length === 0 ? uploadButton : null}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{ display: "none" }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Images</label>
          <div className="gap-4 mb-4">
            <Upload
              listType="picture-card"
              fileList={images}
              onPreview={handlePreview}
              onChange={handleCarImagesChange}
            >
              {images.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{ display: "none" }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>
        {alert && <Alert message={alert.message} type={alert.type} showIcon />}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;
