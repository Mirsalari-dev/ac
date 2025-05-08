import { IconHeart } from "@tabler/icons-react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="w-[10%] sm:w-[30%] h-px bg-gray-300"></div>
      <div className="mx-4 text-gray-300">
        <IconHeart size={24} fill="currentColor" stroke={1.5} />
      </div>
      <h2 className="text-md w-[50%] sm:w-[20%] font-[500] text-center">
        {title}
      </h2>
      <div className="mx-4 text-gray-300">
        <IconHeart size={24} fill="currentColor" stroke={1.5} />
      </div>
      <div className="w-[20%] sm:w-[30%] h-px bg-gray-300"></div>
    </div>
  );
};

export default SectionTitle;
