export interface AboutFeature {
  id: number;
  iconName: string;
  title: string;
  desc: string;
  sortOrder: number;
}

export const aboutFeatures: AboutFeature[] = [
  { id: 1, iconName: "GraduationCap", title: "Tutor Profesional", desc: "Berpengalaman dan tersertifikasi di bidangnya", sortOrder: 1 },
  { id: 2, iconName: "Target", title: "Kurikulum Terarah", desc: "Materi disesuaikan dengan kebutuhan siswa", sortOrder: 2 },
  { id: 3, iconName: "Users", title: "Pendekatan Personal", desc: "Pendampingan 1-on-1 yang intensif dan fokus", sortOrder: 3 },
  { id: 4, iconName: "Award", title: "Terpercaya", desc: "Sudah berpengalaman 10+ tahun mencetak generasi unggul", sortOrder: 4 },
];

export async function getAboutFeatures() { return [...aboutFeatures].sort((a, b) => a.sortOrder - b.sortOrder); }
