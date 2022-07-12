import appInfo from "../../settings.json";

export const get = (endpoint) => fetch(appInfo.BASE_URL + endpoint).then(res => res.json());

export const post = (endpoint, body) => fetch(appInfo.BASE_URL + endpoint, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json"
        }
    }) .then(res => res.json());

export const patch = (endpoint, body) => fetch(appInfo.BASE_URL + endpoint, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => res.json());