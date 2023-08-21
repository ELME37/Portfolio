const ROUTES = {
    home: "/",
    about: "/#about",
    skills: "/skills",
    projects: (project = ":id") => `/projects/${project}`,
    contact: "/contact",
    
};

export default ROUTES;