
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export const PageViewsChart = () => {
  // Mock data - in real implementation, this would come from GA4 API
  const data = [
    { month: 'Jan', pageViews: 4000 },
    { month: 'Feb', pageViews: 3000 },
    { month: 'Mar', pageViews: 5000 },
    { month: 'Apr', pageViews: 4500 },
    { month: 'May', pageViews: 6000 },
    { month: 'Jun', pageViews: 5500 }
  ];

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
        <CardDescription>Monthly page view trends</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
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
