let API;

if (process.env.NODE_ENV === "development") {
    API = "http://localhost:3000/api";
} else {
    API = "";
}

export { API };
