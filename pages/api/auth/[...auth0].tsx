import { handleAuth } from "@auth0/nextjs-auth0";

console.log(process.env.AUTH0_CLIENT_ID);
console.log(process.env.AUTH0_SECRET);
export default handleAuth();
