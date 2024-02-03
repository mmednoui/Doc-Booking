import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/hotel-forms/ManageHotelForm";

const AddHotel = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
