import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '@/lib/firebase';
import { DashboardData, ListItem } from '@/types';

export const useRealtimeData = () => {
  const [data, setData] = useState<DashboardData>({
    hotList: [],
    newList: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const hotListRef = ref(database, 'HotList');
    const newListRef = ref(database, 'NewList');

    const unsubscribeHot = onValue(hotListRef, (snapshot) => {
      const hotData = snapshot.val();
      setData((prev) => ({
        ...prev,
        hotList: hotData ? Object.values(hotData) : [],
      }));
      setLoading(false);
    }, (error) => {
      setError(error.message);
      setLoading(false);
    });

    const unsubscribeNew = onValue(newListRef, (snapshot) => {
      const newData = snapshot.val();
      setData((prev) => ({
        ...prev,
        newList: newData ? Object.values(newData) : [],
      }));
      setLoading(false);
    }, (error) => {
      setError(error.message);
      setLoading(false);
    });

    return () => {
      unsubscribeHot();
      unsubscribeNew();
    };
  }, []);

  return { data, loading, error };
}; 