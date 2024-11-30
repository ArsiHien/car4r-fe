import { SignJWT } from "jose";

const jwtEncode = async (email: string, pw: string) => {
  const screteKey = new TextEncoder().encode("CAR4R");
  return await new SignJWT({
    email: email,
    pw: pw,
  })
    .setProtectedHeader({ alg: "HS256" })
    .sign(screteKey);
};

export default jwtEncode;
