import Prismic from "prismic-javascript";

export const URL = process.env.API_ENDPOINT;
export const TOKEN = process.env.API_TOKEN;

export const Client = Prismic.client(URL, { TOKEN });
