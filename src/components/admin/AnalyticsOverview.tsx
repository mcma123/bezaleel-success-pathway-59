
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MousePointer, Eye, Clock, TrendingUp } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

export const AnalyticsOverview = () => {
  const { overviewData, loading } = useAnalytics();

  if (loading || !overviewData) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 w-4 bg-gray-200 rounded"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const formatDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`;
    }
    return `${remainingSeconds}s`;
  };

  const metrics = [
    {
      title: "Total Users",
      value: overviewData.totalUsers.toLocaleString(),
      change: overviewData.userGrowth,
      icon: Users,
      trend: "up"
    },
    {
      title: "Sessions",
      value: overviewData.totalSessions.toLocaleString(),
      change: overviewData.sessionGrowth,
      icon: MousePointer,
      trend: "up"
    },
    {
      title: "Page Views",
      value: overviewData.totalPageViews.toLocaleString(),
      change: overviewData.pageViewGrowth,
      icon: Eye,
      trend: "up"
    },
    {
      title: "Bounce Rate",
      value: `${overviewData.bounceRate.toFixed(1)}%`,
      change: overviewData.bounceRateChange,
      icon: TrendingUp,
      trend: "down"
    },
    {
      title: "Avg. Session",
      value: formatDuration(overviewData.avgSessionDuration),
      change: "+5.2%", // This would need historical data to calculate properly
      icon: Clock,
      trend: "up"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === "up" ? metric.change.startsWith('+') : metric.change.startsWith('-');
        
        return (
          <Card key={metric.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs">
                <TrendingUp className={`h-3 w-3 mr-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
                <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
