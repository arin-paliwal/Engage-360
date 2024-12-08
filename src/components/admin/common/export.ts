import toast from "react-hot-toast";

export default function exportAsCsv(data: any[],fileName:string) {
  if (!data || data.length === 0) {
    return;
  }
  const headers = Object.keys(data[0]).join(",") + "\n";

  const rows = data
    .map((item) =>
      Object.values(item)
        .map((value) => {
          if (typeof value === "object" && value !== null) {
            return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
          }
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(",")
    )
    .join("\n");

  const csvContent = headers + rows;

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.csv`;
  link.click();

  URL.revokeObjectURL(url);
  toast.success("Exported as CSV"); 
}
