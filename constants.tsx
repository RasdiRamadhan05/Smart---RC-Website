
import React from 'react';
import { PO } from './types';

export const OFFICIAL_PO_LIST: PO[] = [
  { id: '1', name: 'PO. Sumber Alam', address: 'Yogyakarta', fleetCount: 50 },
  { id: '2', name: 'PO. Efisiensi', address: 'Kebumen - Yogyakarta', fleetCount: 45 },
  { id: '3', name: 'PO. Ramayana', address: 'Yogyakarta', fleetCount: 30 },
  { id: '4', name: 'PO. Santoso', address: 'Magelang - Yogyakarta', fleetCount: 25 },
  { id: '5', name: 'PO. Safari Dharma Raya', address: 'Yogyakarta', fleetCount: 40 },
];

export const LEGAL_BASIS = [
  { 
    rule: 'PP No. 55 Tahun 2012', 
    topic: 'Kendaraan', 
    details: 'Mengatur persyaratan teknis dan laik jalan kendaraan bermotor.' 
  },
  { 
    rule: 'PM No. 133 Tahun 2015', 
    topic: 'Pengujian Berkala', 
    details: 'Ketentuan tentang tata cara pengujian berkala kendaraan bermotor.' 
  },
  { 
    rule: 'PM No. 15 Tahun 2019', 
    topic: 'Penyelenggaraan Angkutan Orang', 
    details: 'Standar Pelayanan Minimal angkutan orang dengan kendaraan bermotor umum.' 
  }
];

export const TECHNICAL_INDICATORS = [
  { icon: '🛑', label: 'Sistem Pengereman', desc: 'Tidak ada kebocoran angin, kampas tebal, fungsi rem parkir normal.' },
  { icon: '💡', label: 'Sistem Penerangan', desc: 'Lampu utama, sein, mundur, dan rem harus berfungsi 100%.' },
  { icon: '🛞', label: 'Kondisi Ban', desc: 'Kedalaman alur minimal 1mm, tidak ada keretakan atau tambalan samping.' },
  { icon: '🛡️', label: 'Alat Keselamatan', desc: 'Tersedia APAR, palu pemecah kaca, dan pintu darurat berfungsi.' },
  { icon: '📏', label: 'Dimensi Kendaraan', desc: 'Sesuai SRUT, tidak ada perubahan dimensi tanpa izin resmi.' },
];
