
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useAnalytics } from '@/hooks/useAnalytics';

export const AudienceInsights = () => {
  const { deviceData, overviewData, loading } = useAnalytics();

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Device Usage</CardTitle>
            <CardDescription>Breakdown of user devices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] animate-pulse bg-gray-200 rounded"></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Countries</CardTitle>
            <CardDescription>User distribution by location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] animate-pulse bg-gray-200 rounded"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const deviceChartData = deviceData.map((device, index) => ({
    ...device,
    color: ['#8884d8', '#82ca9d', '#ffc658'][index] || '#8884d8'
  }));

  const locationData = [
    { country: 'South Africa', users: 6240 },
    { country: 'Zambia', users: 3120 },
    { country: 'Zimbabwe', users: 1850 },
    { country: 'United States', users: 820 },
    { country: 'United Kingdom', users: 428 }
  ];

  const chartConfig = {
    users: {
      label: "Users",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Device Usage</CardTitle>
          <CardDescription>Breakdown of user devices</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                >
                  {deviceChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Countries</CardTitle>
          <CardDescription>User distribution by location</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={locationData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="country" type="category" width={100} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="users" fill="var(--color-users)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>User Engagement Metrics</CardTitle>
          <CardDescription>Key engagement statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-bezaleel-dark">
                {overviewData ? ((overviewData.totalUsers / overviewData.totalSessions) * 100).toFixed(1) : '0'}%
              </div>
              <div className="text-sm text-muted-foreground">Returning Visitors</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-bezaleel-dark">
                {overviewData ? (overviewData.totalPageViews / overviewData.totalSessions).toFixed(1) : '0'}
              </div>
              <div className="text-sm text-muted-foreground">Pages per Session</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-bezaleel-dark">
                {overviewData ? (100 - overviewData.bounceRate).toFixed(1) : '0'}%
              </div>
              <div className="text-sm text-muted-foreground">Engagement Rate</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-bezaleel-dark">
                {overviewData ? overviewData.totalUsers.toLocaleString() : '0'}
              </div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
