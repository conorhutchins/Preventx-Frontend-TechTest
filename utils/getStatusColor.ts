export const getStatusColors = (level: string) => {
  const colors = {
    abnormal: {
      text: "text-status-abnormal",
      bar: "bg-status-abnormal",
      bg: "bg-status-abnormalBg",
    },
    normal: {
      text: "text-status-normal",
      bar: "bg-status-normal",
      bg: "bg-status-normalBg",
    },
    warning: {
      text: "text-status-warning",
      bar: "bg-status-warning",
      bg: "bg-status-warningBg",
    },
    issue: {
      text: "text-status-issue",
      bar: "bg-status-issue",
      bg: "bg-status-issueBg",
    },
  };

  const defaultColors = {
    text: "text-gray-600",
    bar: "bg-gray-300",
    bg: "bg-gray-200",
  };

  return colors[level as keyof typeof colors] || defaultColors;
};
