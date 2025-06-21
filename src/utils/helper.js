import * as LucideIcons from "lucide-react";
export async function uploadFileToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }/auto/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.secure_url) {
      return data.secure_url;
    } else {
      throw new Error("Upload failed: " + JSON.stringify(data));
    }
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
}

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (data, fileName = "data") => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const dataBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(dataBlob, `${fileName}.xlsx`);
};

// Log them as a copy-ready array
export const icons = [
  "Book",
  "BookA",
  "BookAIcon",
  "BookAudio",
  "BookCheck",
  "BookCopy",
  "Calendar",
  "Calendar1",
  "Clipboard",
  "ClipboardCheck",
  "Codepen",
  "DoorOpen",
  "File",
  "FileArchive",
  "FileAudio",
  "Folder",
  "FolderArchive",
  "FolderCheck",
  "GraduationCap",
  "LockKeyholeOpen",
  "LockOpen",
  "LockOpenIcon",
  "MailOpenIcon",
  "Notebook",
  "NotebookIcon",
  "NotebookPen",
  "PanelTopOpenIcon",
  "Pen",
  "PenBox",
  "PenBoxIcon",
  "PenIcon",
  "PresentationIcon",
  "School",
  "School2",
  "School2Icon",
  "SchoolIcon",
  "UserPen",
  "UserPenIcon",
  "WifiPen",
  "WifiPenIcon",
];
