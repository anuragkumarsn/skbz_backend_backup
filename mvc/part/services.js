import PartObjects from "../../doa/part.js";

const PartServices = () => {
  const AddPart = (data, cb) => {
    PartObjects.addPart(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetParts = (data, cb) => {
    PartObjects.getParts(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetPart = (data, cb) => {
    PartObjects.getPart(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const DeletePart = (data, cb) => {
    PartObjects.deletePart(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const UpdatePart = (data, cb) => {
    PartObjects.updatePart(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  return {
    AddPart,
    GetParts,
    GetPart,
    DeletePart,
    UpdatePart
  };
};

export default PartServices();
