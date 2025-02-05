export const getStatusColors = (level: string) => {
  const colors = {
    abnormal: {
      text: "text-[#BA1C1C]",
      bar: "bg-[#BA1C1C]",
      bg: "bg-[#FEF1F1]",
    },
    normal: {
      text: "text-[#157F3C]",
      bar: "bg-[#157F3C]",
      bg: "bg-[#F2FDF5]",
    },
    warning: {
      text: "text-[#A26107]",
      bar: "bg-[#A26107]",
      bg: "bg-[#FEFCE7]",
    },
    issue: {
      text: "text-[#0369A0]",
      bar: "bg-[#0369A0]",
      bg: "bg-[#F0F9FF]",
    },
  };

  const defaultColors = {
    text: "text-gray-600",
    bar: "bg-gray-300",
    bg: "bg-gray-200",
  };

  return colors[level as keyof typeof colors] || defaultColors;
};
