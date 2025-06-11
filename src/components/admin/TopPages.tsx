
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export const TopPages = () => {
  // Mock data - in real implementation, this would come from GA4 API
  const topPages = [
    { page: '/', title: 'Homepage', views: 8542, bounceRate: '35.2%', avgTime: '3:24' },
    { page: '/services', title: 'Services', views: 4231, bounceRate: '42.1%', avgTime: '2:45' },
    { page: '/about', title: 'About Us', views: 3124, bounceRate: '38.7%', avgTime: '2:12' },
    { page: '/pricing', title: 'Pricing', views: 2834, bounceRate: '55.3%', avgTime: '1:58' },
    { page: '/contact', title: 'Contact', views: 2156, bounceRate: '28.9%', avgTime: '1:34' },
    { page: '/services/website-development', title: 'Website Development', views: 1876, bounceRate: '47.2%', avgTime: '3:01' },
    { page: '/gallery', title: 'Gallery', views: 1543, bounceRate: '52.1%', avgTime: '2:33' },
    { page: '/services/ecommerce', title: 'E-commerce', views: 1234, bounceRate: '41.8%', avgTime: '2:18' }
  ];

  const getBounceRateBadge = (rate: string) => {
    const numRate = parseFloat(rate);
    if (numRate < 30) return <Badge variant="default" className="bg-green-500">Low</Badge>;
    if (numRate < 50) return <Badge variant="secondary">Medium</Badge>;
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
              <TableRow key={page.page}>
                <TableCell>
                  <div>
                    <div className="font-medium">{page.title}</div>
                    <div className="text-sm text-muted-foreground">{page.page}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{page.views.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {page.bounceRate}
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
