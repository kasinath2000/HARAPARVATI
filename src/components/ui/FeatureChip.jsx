const FeatureChip = ({ children, icon: Icon }) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs font-semibold text-gray-300 transition hover:border-[#ff6b1a] hover:bg-orange-500/20 hover:text-white">
      {Icon && <Icon size={14} className="text-[#ff6b1a]" />}
      {children}
    </span>
  );
};

export default FeatureChip;