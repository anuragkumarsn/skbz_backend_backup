import PriceRequestObjects from "../../doa/priceRequest.js";

const PriceRequestServices = () => {
  const CreatePriceRequest = (data, cb) => {
    PriceRequestObjects.createPriceRequest(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const UpdatePriceRequest = (data, cb) => {
    PriceRequestObjects.updatePriceRequest(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetPriceRequests = (data, cb) => {
    PriceRequestObjects.getPriceRequests(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const DeletePriceRequest = (data, cb) => {
    PriceRequestObjects.deletePriceRequest(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  return {
    CreatePriceRequest,
    UpdatePriceRequest,
    GetPriceRequests,
    DeletePriceRequest,
  };
};

export default PriceRequestServices();
