export interface StaffRequest {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface StaffReponse {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface StaffCreationResponse {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}
