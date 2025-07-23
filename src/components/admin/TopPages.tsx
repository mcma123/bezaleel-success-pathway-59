
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useAnalytics } from '@/hooks/useAnalytics';

export const TopPages = () => {
  const { topPages, loading } = useAnalytics();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Pages</CardTitle>
          <CardDescription>Most visited pages and their performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const getBounceRateBadge = (rate: number) => {
    if (rate < 30) return <Badge variant="default" className="bg-green-500">Low</Badge>;
    if (rate < 50) return <Badge variant="secondary">Medium</Badge>;
    return <Badge variant="destructive">High</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Pages</CardTitle>
        <CardDescription>Most visited pages and their performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead>Page Views</TableHead>
              <TableHead>Bounce Rate</TableHead>
              <TableHead>Avg. Time on Page</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPages.map((page, index) => (
              <TableRow key={page.path}>
                <TableCell>
                  <div>
                    <div className="font-medium">{page.title}</div>
                    <div className="text-sm text-muted-foreground">{page.path}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{page.views.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {page.bounceRate.toFixed(1)}%
                    {getBounceRateBadge(page.bounceRate)}
                  </div>
                </TableCell>
                <TableCell>{page.avgTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
