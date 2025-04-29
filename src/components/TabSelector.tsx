import React from 'react';

interface TabSelectorProps {
  activeTab: 'HotList' | 'NewList';
  onTabChange: (tab: 'HotList' | 'NewList') => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onTabChange }) => (
  <div className="flex flex-wrap gap-2 md:gap-4 mb-6 border-b pb-2">
    <button
      className={`px-4 md:px-6 py-2 cursor-pointer rounded-md transition-all ${
        activeTab === "HotList" 
          ? "bg-green-50 text-green-600 font-medium border-b-2 border-green-500" 
          : "text-gray-500 hover:bg-gray-50"
      }`}
      onClick={() => onTabChange("HotList")}
    >
      HOT LIST
    </button>
    <button
      className={`px-4 md:px-6 py-2 cursor-pointer rounded-md transition-all ${
        activeTab === "NewList" 
          ? "bg-green-50 text-green-600 font-medium border-b-2 border-green-500" 
          : "text-gray-500 hover:bg-gray-50"
      }`}
      onClick={() => onTabChange("NewList")}
    >
      NEW LIST
    </button>
  </div>
);

export default TabSelector; 