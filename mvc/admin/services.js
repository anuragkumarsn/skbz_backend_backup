import AdminObjects from "../../doa/admin.js";

const AdminServices = () => {
  const RegisterAdmin = (data, cb) => {
    AdminObjects.registerAdmin(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const LoginAdmin = (data, cb) => {
    AdminObjects.loginAdmin(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetAdmins = (data, cb) => {
    AdminObjects.getAdmins(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetAdmin = (data, cb) => {
    AdminObjects.getAdmin(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const DeleteAdmin = (data, cb) => {
    AdminObjects.deleteAdmin(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  return {
    RegisterAdmin,
    GetAdmins,
    GetAdmin,
    LoginAdmin,
    DeleteAdmin,
  };
};

export default AdminServices();
