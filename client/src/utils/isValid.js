const containsURL = (string) => {
    return string.includes("http") && string.includes("://");
};

const isValid = (project) => {
    if (!project) {
        return false;
    }
    if (!project.title) {
        return false;
    }
    if (!containsURL(project.appURL)) {
        return false;
    }
    if (!containsURL(project.repoURL)) {
        return false;
    }
    return true;
};

export default isValid;
