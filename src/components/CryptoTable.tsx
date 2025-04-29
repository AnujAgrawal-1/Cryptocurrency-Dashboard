import React from 'react';
import { ListItem } from '@/types';

interface CryptoTableProps {
  list: ListItem[];
}

const CryptoTable: React.FC<CryptoTableProps> = ({ list }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
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
        {list.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 text-black transition-colors shadow-sm">
            <td className="flex items-center gap-2 p-4 whitespace-nowrap">
              <span className="font-medium">{item.name}</span>
            </td>
            <td className="p-4 text-left font-medium whitespace-nowrap">
              <span className="text-gray-700">₹ {parseFloat(item.price).toLocaleString()}</span>
            </td>
            <td className={`p-4 text-left font-medium whitespace-nowrap ${parseFloat(item.change) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span className="flex items-center">
                {parseFloat(item.change) >= 0 ? '↑' : '↓'} {Math.abs(parseFloat(item.change))}%
              </span>
            </td>
            <td className="p-4 text-center whitespace-nowrap">
              <button className="px-4 py-1 border-2 border-green-500 text-green-600 rounded-md hover:bg-green-100 transition-all shadow-sm font-medium">
                Trade
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CryptoTable; 