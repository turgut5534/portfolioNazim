export interface Experience {
  id?: number;
  company: string;
  role: string;
  description?: string;
  start_date: Date;
  end_date?: Date; // Hala çalışıyorsan null olabilir
}
