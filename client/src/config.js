const BATCH = "SEIF-3";

let API;
if (process.env.NODE_ENV === "development") {
    API = "http://localhost:3000/api";
} else {
    API = "https://seif-3-server.herokuapp.com/api";
}

export { API, BATCH };
