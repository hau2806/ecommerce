export interface User {
  username: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  id?: string | number;
}

export interface UserInfo {
  name: string;
  email: string;
  phone: number;
  address: string;
}
