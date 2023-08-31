const ROUTES = {
    home: "/",
    about: "/#about",
    skills: "/#skills",
    projects : "/#projects",
    project: (project = ":id") => `/project/${project}`,
    contact: "/#contact",
    
};

export default ROUTES;