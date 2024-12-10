import { jwtVerify } from "jose";

const jwtDecode = async (token: string) => {
  const secretKey = Uint8Array.from(
    atob(import.meta.env.VITE_SECRET_KEY),
    (c) => c.charCodeAt(0),
  );
  try {
    const data = await jwtVerify(token, secretKey);
    return data.payload.roles;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default jwtDecode;
