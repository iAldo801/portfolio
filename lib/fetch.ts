import axios, { AxiosError } from "axios";

async function user(method: string, data?: any): Promise<any> {
    try {
        const res = await axios({
            method: method,
            url: '/api/user',
            data: data
        });
        return res.data;
    } catch (error) {
        handleApiError(error as AxiosError<unknown, any>);
        throw error;
    }
}

async function lanyard(method: string, data?: any): Promise<any> {
    try {
        const res = await axios({
            method: method,
            url: 'https://api.lanyard.rest/v1/users/457245988516528138',
            data: data
        });
        return res.data.data;
    } catch (error) {
        handleApiError(error as AxiosError<unknown, any>);
        throw error;
    }
}
function handleApiError(error: AxiosError) {
    if (error.response) {
        console.error("API Error Response Data:", error.response.data);
        console.error("API Error Response Status:", error.response.status);
        console.error("API Error Response Headers:", error.response.headers);
    } else if (error.request) {
        console.error("API Error Request Data:", error.request);
    } else {
        console.error("API Error Message:", error.message);
    }
}

export { lanyard, user };
