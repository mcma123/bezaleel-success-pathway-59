
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MousePointer, Eye, Clock, TrendingUp } from 'lucide-react';

export const AnalyticsOverview = () => {
  // Mock data - in real implementation, this would come from GA4 API
  const metrics = [
    {
      title: "Total Users",
      value: "12,458",
      change: "+12.5%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Sessions",
      value: "18,942",
      change: "+8.3%",
      icon: MousePointer,
      trend: "up"
    },
    {
      title: "Page Views",
      value: "34,576",
      change: "+15.7%",
      icon: Eye,
      trend: "up"
    },
    {
      title: "Bounce Rate",
      value: "42.3%",
      change: "-2.1%",
      icon: TrendingUp,
      trend: "down"
    },
    {
      title: "Avg. Session",
      value: "2m 34s",
      change: "+5.2%",
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
