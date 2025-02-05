export const getCaseCodeColors = (caseCode: string) => {
  const colors = {
    // Individual case codes
    CLOTTED: { text: "text-status-warning", bg: "bg-status-warningBg" },
    DETECTED: { text: "text-status-informative", bg: "bg-status-informativeBg" },
    "NOT-DETECTED": { text: "text-status-normal", bg: "bg-status-normalBg" },
    REACTIVE: { text: "text-status-abnormal", bg: "bg-status-abnormal" },
    "NON-REACTIVE": { text: "text-status-issue", bg: "bg-status-issueBg" },
    INVALID: { text: "text-gray-600", bg: "bg-gray-300" },

    // Compound case codes
    "DETECTED-CT|DETECTED-NG2": { text: "text-white", bg: "bg-status-abnormal" },
    "REACTIVE-AB|INSUFFICIENT-RPR": { text: "text-white", bg: "bg-status-abnormal" },
    "NOT-DETECTED-CT|DETECTED-NG2": { text: "text-status-abnormal", bg: "bg-status-abnormal" },
    "CONFIRMED-AB|INVALID-RPR": { text: "text-status-abnormal", bg: "bg-status-abnormal" },
    "REACTIVE-AB|REACTIVE-RPR-WITH-TITRE": { text: "text-status-abnormal", bg: "bg-status-abnormal" },
    "UNCONFIRMED-AB|INSUFFICIENT-RPR": { text: "text-status-abnormal", bg: "bg-status-abnormal" },
    "UNCONFIRMED-AB|NON-REACTIVE-RPR": { text: "text-status-issue", bg: "bg-status-issueBg" },
    "OUT-OF-PROTOCOL": { text: "text-status-warning", bg: "bg-status-warningBg" },
    "OUT-OF-VALIDATION": { text: "text-status-warning", bg: "bg-status-warningBg" },
    "LIPEMIC": { text: "text-status-warning", bg: "bg-status-warningBg" },
    "HAEMOLYSED": { text: "text-status-warning", bg: "bg-status-warningBg" },
    "INSUFFICIENT": { text: "text-status-warning", bg: "bg-status-warningBg" },
  };

  return colors[caseCode as keyof typeof colors] || {
    text: "text-gray-600",
    bg: "bg-gray-300",
  };
};
