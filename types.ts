
export enum AppSection {
  HOME = 'home',
  LEGAL = 'legal',
  TECHNICAL = 'technical',
  ABOUT = 'about',
  REGISTRATION = 'registration',
  ADMIN = 'admin'
}

export enum ApplicationStatus {
  PENDING = 'Menunggu',
  ACCEPTED = 'Diterima',
  REJECTED = 'Ditolak'
}

export interface PO {
  id: string;
  name: string;
  address: string;
  fleetCount: number;
}

export interface RampcheckApplication {
  id: string;
  poId: string;
  poName: string;
  dateRequested: string;
  inspectionDate: string;
  vehicleCount: number;
  vehiclePlates: string;
  status: ApplicationStatus;
  submittedAt: string;
}

export type UserRole = 'USER' | 'ADMIN';
