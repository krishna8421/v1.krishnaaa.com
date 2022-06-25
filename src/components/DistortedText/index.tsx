export const DistortedText = ({ text }: { text: string }) => {
  // Not working currently, need to be fixed.
  return (
    <span className="relative">
      <span className="absolute rotate-3 text-custom-purple">{text}</span>
      <span className="absolute -rotate-3 text-custom-green">{text}</span>
      <span className="absolute">{text}</span>
      <span className="">&nbsp;</span>
    </span>
  );
};
