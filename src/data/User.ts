import Role from "../const/Role";

export default interface User {
  id?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: Role;
  avatar?: string;
}
