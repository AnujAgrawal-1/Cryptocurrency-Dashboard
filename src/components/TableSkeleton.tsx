import React from 'react';

const TableSkeleton: React.FC = () => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm animate-pulse">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="p-4 text-left rounded-tl-lg whitespace-nowrap min-w-[120px]">Trending Pairs</th>
          <th className="p-4 text-left whitespace-nowrap min-w-[100px]">Last Price</th>
          <th className="p-4 text-left whitespace-nowrap min-w-[100px]">24 hrs Change</th>
          <th className="p-4 text-center rounded-tr-lg whitespace-nowrap min-w-[80px]">Trade</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, index) => (
          <tr key={index} className="border-b">
            <td className="p-4">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </td>
            <td className="p-4">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </td>
            <td className="p-4">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </td>
            <td className="p-4 text-center">
              <div className="h-8 bg-gray-200 rounded w-16 mx-auto"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableSkeleton; 