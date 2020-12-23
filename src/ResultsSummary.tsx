import React from "react";
import { FaChevronDown, FaFilter } from "react-icons/fa";
import { useAnswersStore } from "./store/useAnswersStore";

type Props = {
  //Insert Props Here
  onToggleFilters: () => void;
};

const ResultsSummary: React.FC<Props> = ({ onToggleFilters }) => {
  const { state } = useAnswersStore();
  const { verticalresults, entities } = state;
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm text-gray-500">
        Showing {entities.length} of {verticalresults?.resultsCount} glasses
      </div>
      <div className="hidden md:flex text-gray-500 text-sm items-center hover:underline cursor-pointer">
        Sort By <FaChevronDown className="ml-2" />
      </div>
      <div
        className="flex md:hidden text-gray-500 text-sm items-center hover:underline cursor-pointer"
        onClick={onToggleFilters}
      >
        Filter <FaFilter className="ml-2" />
      </div>
    </div>
  );
};

export default ResultsSummary;
