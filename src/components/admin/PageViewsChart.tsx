
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useAnalytics } from '@/hooks/useAnalytics';

export const PageViewsChart = () => {
  const { chartData, loading } = useAnalytics();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Page Views Over Time</CardTitle>
          <CardDescription>Daily page view trends (last 30 days)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] animate-pulse bg-gray-200 rounded"></div>
        </CardContent>
      </Card>
    );
  }

  const chartConfig = {
    pageViews: {
      label: "Page Views",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Views Over Time</CardTitle>
        <CardDescription>Daily page view trends (last 30 days)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="pageViews" 
                stroke="var(--color-pageViews)" 
                strokeWidth={2}
                dot={{ fill: "var(--color-pageViews)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
