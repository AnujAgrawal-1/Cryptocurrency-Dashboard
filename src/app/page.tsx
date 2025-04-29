'use client';

import { useRealtimeData } from '@/hooks/useRealtimeData';
import { useState } from 'react';
import Header from '@/components/Header';
import TabSelector from '@/components/TabSelector';
import CryptoTable from '@/components/CryptoTable';
import TableSkeleton from '@/components/TableSkeleton';
import ErrorDisplay from '@/components/ErrorDisplay';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'HotList' | 'NewList'>('HotList');
  const { data, loading, error } = useRealtimeData();

  if (loading) {
    return (
      <div className="min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-96"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex gap-4 mb-6 border-b pb-2">
              <div className="h-10 bg-gray-200 rounded w-24"></div>
              <div className="h-10 bg-gray-200 rounded w-24"></div>
            </div>
            <TableSkeleton />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
          <CryptoTable list={activeTab === "HotList" ? data.hotList : data.newList} />
        </div>
      </div>
    </div>
  );
} 