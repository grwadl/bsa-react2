import {baseURL} from "../login/loginService";

export const getWithToken = async (token: string, URL: string): Promise<any> => {
    return await fetch(`${baseURL}${URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const post = async (data: any, URL: string): Promise<any> => {
    return await fetch(`${baseURL}${URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const postWithToken = async (data: any, token: string, URL: string): Promise<any> => {
    return await fetch(`${baseURL}${URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export async function deleteReq(token: string, URL: string): Promise<any> {
    return await fetch(`${baseURL}${URL}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}