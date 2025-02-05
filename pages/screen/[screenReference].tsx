import { GetServerSideProps } from "next";
import { fetchScreenDetails } from "../../services/screen/screenService";
import { ScreenServiceFetchResult } from "../../services/screen/screenTypes";
import SummaryPanel from "../../components/RecordSummaryCard/RecordSummaryCard";
import TestResultCard from "../../components/TestResultCard/TestResultCard";

interface ScreenDetailsProps {
  data: ScreenServiceFetchResult["data"];
  error: ScreenServiceFetchResult["error"];
}

// Do some server side rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { screenReference } = context.params as { screenReference: string };
    const { data, error } = await fetchScreenDetails(screenReference);

    if (!data && error === "Screen not found.") {
      return { notFound: true }; // Gives default next 404 page
    }

    return { props: { data, error } };
  } catch (err) {
    console.error("Error fetching screen details:", err);
    return { props: { data: null, error: "An unexpected error occurred." } };
  }
};

// Page Component
export default function ScreenDetailsPage({ data, error }: ScreenDetailsProps) {
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!data) return <div className="text-gray-500 p-4">No data available</div>;

  return (
    <div className="min-h-screen p-6 bg-white">
      {/* Header: Param Title with Completed Status */}
      <header className="mb-6">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-bold text-gray-800">{data.screenReference}</h1>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="pl-2 text-xs text-black-500">Completed</span>
          </div>
        </div>
      </header>

      {/* Panels: Left for SummaryPanel, Right for TestResultCard */}
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Record Summary</h2>
          <SummaryPanel data={data} />
        </aside>

        <main className="md:w-2/3">
          <h1 className="text-xl font-bold mb-4">Test bookings</h1>
          <div className="space-y-4">
            {data.serviceRequests.map((request, index) => (
              <TestResultCard key={index} request={request} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
