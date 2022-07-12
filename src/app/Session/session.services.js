import { post } from "../Utils/http.js";

export const sessionServices = {
    login: (body) => post("/api/user/login", body),
    register: (body) => post("/api/user/singup", body)
}