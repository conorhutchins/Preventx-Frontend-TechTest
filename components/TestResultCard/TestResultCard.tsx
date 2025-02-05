import { ScreenDetailsResponse } from "../../test-utilities/api/contract";
import { formatDate } from "../../utils/formatDate";
import { getStatusColors } from "../../utils/getStatusColor";

const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

interface TestResultCardProps {
  request: ScreenDetailsResponse["serviceRequests"][number];
}

export default function TestResultCard({ request }: TestResultCardProps) {
  const statusLevel = request.results[0].level; // Assuming the first result determines the status
  const { text: statusTextColor, bar: statusBarColor, bg: statusBgColor } = getStatusColors(statusLevel);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 relative">
      {/* Title and Sample ID */}
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-bold">{request.title}</h3>
        <p className="text-sm text-gray-600 font-semibold">
          Sample ID: <span className="text-black">{request.sampleId}</span>
        </p>
      </div>

      {/* Test Description */}
      <p className="text-sm text-gray-800 mb-4">{request.description}</p>

      {/* Colored Bar: using the bar property, which matches the text colour */}
      <div className={`h-1 w-full ${statusBarColor} rounded-t-md`}></div>

      {/* Final Result Section */}
      <div className="p-4 border-t-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-bold">Final result</h4>
          {/* Status badge with dynamic text and background colours */}
          <p className={`text-xs font-medium px-2 py-1 rounded-full ${statusTextColor} ${statusBgColor}`}>
            {statusLevel.charAt(0).toUpperCase() + statusLevel.slice(1)}
          </p>
        </div>

        {/* Sample Details */}
        <p className="text-sm mb-2 pb-4">
          Sample: <span className="text-black">{toTitleCase(request.sampleType)}</span>
        </p>

        {/* Results */}
        <div className="space-y-4">
          {request.results.map((result, index) => (
            <div key={index} className="mb-4">
              <div className="flex space-x-4 text-sm text-gray-600">
                <p>
                  <strong>Observation:</strong> {formatDate(result.observationDate)}
                </p>
                <p>
                  <strong>Verification:</strong> {formatDate(result.verificationDate)}
                </p>
              </div>
              <p className="mt-2 text-sm whitespace-pre-line leading-loose">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
