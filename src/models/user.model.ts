export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  age?: number; // Kullanıcının yaş bilgisi
  created_at?: Date;
}
