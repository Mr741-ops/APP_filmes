import { fetchUtils } from "react-admin";

export const httpClient = (url:string, options: any = {}) => {
    if(!options.headers) {
        options.headers = new Headers({ Accept:"application/json"});
    }

    const API_Key = process.env.React_APP_API_KEY;
    if(API_Key){
        options.headers.set("Authorization", `Bearer ${API_Key}`);
    }

    return fetchUtils.fetchJson(url,options);
};