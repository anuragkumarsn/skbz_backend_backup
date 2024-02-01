import InitialDocsObject from "../../doa/initialDocs.js";

const InitialDocsServices = () => {
  const AddInitialDoc = (data, cb) => {
    InitialDocsObject.addInitialDoc(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetInitialDocs = (data, cb) => {
    InitialDocsObject.getInitialDocs(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetInitialDocById = (data, cb) => {
    InitialDocsObject.getInitialDocById(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const DeleteInitialDocs = (data, cb) => {
    InitialDocsObject.deleteInitialDocs(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const UpdateInitialDocs = (data, cb) => {
    InitialDocsObject.updateInitialDocs(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  return {
    AddInitialDoc,
    GetInitialDocs,
    GetInitialDocById,
    DeleteInitialDocs,
    UpdateInitialDocs,
  };
};

export default InitialDocsServices();
