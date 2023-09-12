const ROUTES = {
    home: "/",
    about: "/#about",
    skills: "/#skills",
    projects : "/#projects",
    project: (project = ":id") => `/projects/${project}`,
    contact: "/#contact",
    
};

export default ROUTES;