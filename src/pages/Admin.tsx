
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnalyticsOverview } from '@/components/admin/AnalyticsOverview';
import { TopPages } from '@/components/admin/TopPages';
import { AudienceInsights } from '@/components/admin/AudienceInsights';
import { GA4Setup } from '@/components/admin/GA4Setup';
import { PageViewsChart } from '@/components/admin/PageViewsChart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bezaleel-dark mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor your website performance and user engagement</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pages">Top Pages</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="setup">GA4 Setup</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <AnalyticsOverview />
            <PageViewsChart />
          </TabsContent>

          <TabsContent value="pages">
            <TopPages />
          </TabsContent>

          <TabsContent value="audience">
            <AudienceInsights />
          </TabsContent>

          <TabsContent value="setup">
            <GA4Setup />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
