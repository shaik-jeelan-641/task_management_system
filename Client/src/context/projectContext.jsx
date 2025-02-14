import { createContext, useState, useContext } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectName, setProjectName] = useState("");

  return (
    <ProjectContext.Provider value={{ projectName, setProjectName }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
