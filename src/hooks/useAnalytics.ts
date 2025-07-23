import { useState, useEffect } from 'react';
import { analyticsService } from '@/services/analytics';

export interface AnalyticsOverviewData {
  totalUsers: number;
  totalSessions: number;
  totalPageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
  userGrowth: string;
  sessionGrowth: string;
  pageViewGrowth: string;
  bounceRateChange: string;
}

export interface TopPageData {
  path: string;
  title: string;
  views: number;
  bounceRate: number;
  avgTime: string;
}

export interface DeviceData {
  name: string;
  value: number;
  count: number;
}

export interface PageViewChartData {
  date: string;
  pageViews: number;
}

export const useAnalytics = () => {
  const [overviewData, setOverviewData] = useState<AnalyticsOverviewData | null>(null);
  const [topPages, setTopPages] = useState<TopPageData[]>([]);
  const [deviceData, setDeviceData] = useState<DeviceData[]>([]);
  const [chartData, setChartData] = useState<PageViewChartData[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshData = () => {
    setLoading(true);
    try {
      const overview = analyticsService.getOverviewMetrics();
      const pages = analyticsService.getTopPages();
      const devices = analyticsService.getDeviceBreakdown();
      const chart = analyticsService.getPageViewsOverTime();

      setOverviewData(overview);
      setTopPages(pages);
      setDeviceData(devices);
      setChartData(chart);
    } catch (error) {
      console.error('Error loading analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();

    // Refresh data every 30 seconds
    const interval = setInterval(refreshData, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    overviewData,
    topPages,
    deviceData,
    chartData,
    loading,
    refreshData
  };
};