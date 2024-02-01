import RoleObjects from "../../doa/role.js";

const RoleServices = () => {
  const CreateRole = (data, cb) => {
    RoleObjects.createRole(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const UpdateRole = (data, cb) => {
    RoleObjects.updateRole(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetRoles = (data, cb) => {
    RoleObjects.getRoles(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetRole = (data, cb) => {
    RoleObjects.getRole(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const DeleteRole = (data, cb) => {
    RoleObjects.deleteRole(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  return {
    CreateRole,
    UpdateRole,
    GetRoles,
    GetRole,
    DeleteRole,
  };
};

export default RoleServices();
