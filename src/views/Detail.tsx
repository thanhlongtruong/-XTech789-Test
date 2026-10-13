import { useSearchParams } from "react-router-dom";

export const Detail = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-[60vh]">
      <textarea
        value={`Từ khóa tìm kiếm: ${searchQuery}`}
        readOnly
        rows={6}
        className="w-full p-4 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#4A154B] focus:outline-none font-mono bg-gray-50 leading-relaxed"
        placeholder="Nội dung dữ liệu tìm kiếm sẽ xuất hiện ở đây..."
      />
    </div>
  );
};
