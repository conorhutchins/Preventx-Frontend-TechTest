import { ScreenDetailsResponse } from "../../test-utilities/api/contract";
import { deleteDayOfWeekFromDate } from "../../utils/deleteDayOfWeekFromDate";
import { FaBarcode, FaTag, FaBox, FaUser, FaCalendarAlt, FaBaby } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";

interface RecordSummaryCardProps {
  data: ScreenDetailsResponse;
}

export default function RecordSummaryCard({ data }: RecordSummaryCardProps) {
  const {
    kitBarcode: kitCode,
    screenReference: orderRef,
    serviceProviderName: serviceProvider,
    createdOn: created,
    updatedOn: received,
    completedDate: completed,
    screenMetaData,
  } = data;

  const patientDetails = screenMetaData?.reduce(
    (acc, meta) => {
      if (meta.key === "FirstName") acc.name = meta.value;
      if (meta.key === "DateOfBirth") acc.dateOfBirth = meta.value;
      if (meta.key === "Age") acc.age = parseInt(meta.value, 10);
      if (meta.key === "AssignedSex") acc.sexAtBirth = meta.value;
      return acc;
    },
    { name: "", dateOfBirth: "", age: 0, sexAtBirth: "" }
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="space-y-4">
        <div className="flex items-center">
          <FaBarcode className="text-gray-600 mr-3" />
          <p className="text-sm">Kit code: {kitCode}</p>
        </div>
        <div className="flex items-center">
          <FaTag className="text-gray-600 mr-3" />
          <p className="text-sm">Order ref: {orderRef}</p>
        </div>
        <div className="flex items-center">
          <FaBox className="text-gray-600 mr-3" />
          <p className="text-sm">SKU: 99999</p>
        </div>
        <div className="flex items-center">
          <FaUser className="text-gray-600 mr-3" />
          <p className="text-sm">Service provider: {serviceProvider}</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center">
          <FaCalendarAlt className="text-gray-600 mr-3" />
          <p className="text-sm">Created: {deleteDayOfWeekFromDate(created)}</p>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="text-gray-600 mr-3" />
          <p className="text-sm">Received: {deleteDayOfWeekFromDate(received)}</p>
        </div>
        <div className="flex items-center">
          <MdCalendarToday className="text-gray-600 mr-3" />
          <p className="text-sm">Completed: {completed ? deleteDayOfWeekFromDate(completed) : "Not completed"}</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="space-y-4">
        <h3 className="font-bold text-gray-700">Patient details</h3>
        <div className="flex items-center">
          <FaUser className="text-gray-600 mr-3" />
          <p className="text-sm">Name: {patientDetails?.name || "Unknown"}</p>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="text-gray-600 mr-3" />
          <p className="text-sm">Date of birth: {deleteDayOfWeekFromDate(patientDetails?.dateOfBirth || "")}</p>
        </div>
        <div className="flex items-center">
          <FaBaby className="text-gray-600 mr-3" />
          <p className="text-sm">Age: {patientDetails?.age || 0}</p>
        </div>
        <div className="flex items-center">
          <FaUser className="text-gray-600 mr-3" />
          <p className="text-sm">Sex at birth: {patientDetails?.sexAtBirth || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
}
