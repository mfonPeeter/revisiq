const Chip = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <div className="flex w-fit items-center gap-x-2 rounded-3xl border border-[#E1E1E1] px-3 py-1.5 text-xs font-medium text-[#898989] md:px-4 md:py-2 md:text-sm">
      {icon}
      {label}
    </div>
  );
};

export default Chip;
