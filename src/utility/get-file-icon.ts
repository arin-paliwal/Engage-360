const iconMapping: Record<string, string> = {
  pdf: "/icons/acrobat.png",
  mp3: "/icons/audio.png",
  docx: "/icons/Word_64x64.svg",
  xlsx: "/icons/Excel_64x64.svg",
  pptx: "/icons/PowerPoint_64x64.svg",
  jpeg: "/icons/photos.svg",
  jpg: "/icons/photos.svg",
  png: "/icons/photos.svg",
  csv: "/icons/Excel_64x64.svg",
  sql: "/icons/supabase-logo-icon.svg",
  doc: "/icons/documentation.png",
  txt: "/icons/documentation.png",
  html: "/icons/documentation.png",
  js: "/icons/documentation.png",
  default: "/icons/documentation.png",
};

export default function getIcon(fileType: string): string {
  return iconMapping[fileType] || iconMapping.default;
}
