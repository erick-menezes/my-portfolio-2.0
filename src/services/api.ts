import axios from "axios";

export const portfolioApi = axios.create({
    baseURL: `${process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL_DEV : process.env.NEXT_PUBLIC_API_URL_PROD}`,
});
