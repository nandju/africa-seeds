import Loader from "@/components/loading/loader";


export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8">
        {/* Isolated layout - no navbar included here */}
        <Loader />
        {children}
      </div>
    </div>
  );
}
