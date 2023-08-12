const ROUTES = {
    home: "/",
    presentation: "/#presentation",
    projects: (project = ":id") => `/projects/${project}`,
    skills: "/skills",
    contact: "/contact",
    
};

export default ROUTES;