import ProjectObjects from "../../doa/project.js";

const ProjectServices = () => {
  const AddProject = (data, cb) => {
    ProjectObjects.addProject(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetProjects = (data, cb) => {
    ProjectObjects.getProjects(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetProject = (data, cb) => {
    ProjectObjects.getProject(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const DeleteProject = (data, cb) => {
    ProjectObjects.deleteProject(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const UpdateProject = (data, cb) => {
    ProjectObjects.updateProject(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const GetProjectStatusCount = (data, cb) => {
    ProjectObjects.getProjectStatusCount(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  return {
    AddProject,
    GetProjects,
    GetProject,
    DeleteProject,
    UpdateProject,
    GetProjectStatusCount,
  };
};

export default ProjectServices();
