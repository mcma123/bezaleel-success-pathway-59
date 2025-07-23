// Mock analytics data for immediate display
export const mockAnalyticsData = {
  overview: {
    totalUsers: 1247,
    totalSessions: 1834,
    totalPageViews: 3421,
    bounceRate: 35.7,
    avgSessionDuration: 156000, // 2 minutes 36 seconds
    userGrowth: "+12.5%",
    sessionGrowth: "+8.3%",
    pageViewGrowth: "+15.7%",
    bounceRateChange: "-2.1%"
  },
  topPages: [
    { path: '/', title: 'Homepage', views: 1245, bounceRate: 32.1, avgTime: '3:24' },
    { path: '/services', title: 'Services', views: 834, bounceRate: 28.9, avgTime: '2:45' },
    { path: '/about', title: 'About Us', views: 567, bounceRate: 41.2, avgTime: '2:12' },
    { path: '/contact', title: 'Contact', views: 423, bounceRate: 25.6, avgTime: '1:58' },
    { path: '/services/south-africa', title: 'South Africa Services', views: 312, bounceRate: 38.4, avgTime: '3:01' },
    { path: '/services/zambia', title: 'Zambia Services', views: 287, bounceRate: 42.8, avgTime: '2:33' },
    { path: '/admin', title: 'Admin Dashboard', views: 156, bounceRate: 15.2, avgTime: '4:21' }
  ],
  deviceData: [
    { name: 'Desktop', value: 62.4, count: 775 },
    { name: 'Mobile', value: 31.2, count: 388 },
    { name: 'Tablet', value: 6.4, count: 84 }
  ],
  chartData: [
    { date: 'Dec 24', pageViews: 45 },
    { date: 'Dec 25', pageViews: 38 },
    { date: 'Dec 26', pageViews: 52 },
    { date: 'Dec 27', pageViews: 67 },
    { date: 'Dec 28', pageViews: 73 },
    { date: 'Dec 29', pageViews: 89 },
    { date: 'Dec 30', pageViews: 94 },
    { date: 'Dec 31', pageViews: 102 },
    { date: 'Jan 1', pageViews: 87 },
    { date: 'Jan 2', pageViews: 95 },
    { date: 'Jan 3', pageViews: 118 },
    { date: 'Jan 4', pageViews: 125 },
    { date: 'Jan 5', pageViews: 134 },
    { date: 'Jan 6', pageViews: 142 },
    { date: 'Jan 7', pageViews: 156 },
    { date: 'Jan 8', pageViews: 148 },
    { date: 'Jan 9', pageViews: 163 },
    { date: 'Jan 10', pageViews: 171 },
    { date: 'Jan 11', pageViews: 158 },
    { date: 'Jan 12', pageViews: 167 },
    { date: 'Jan 13', pageViews: 184 },
    { date: 'Jan 14', pageViews: 192 },
    { date: 'Jan 15', pageViews: 178 },
    { date: 'Jan 16', pageViews: 186 },
    { date: 'Jan 17', pageViews: 195 },
    { date: 'Jan 18', pageViews: 203 },
    { date: 'Jan 19', pageViews: 189 },
    { date: 'Jan 20', pageViews: 198 },
    { date: 'Jan 21', pageViews: 216 },
    { date: 'Jan 22', pageViews: 234 }
  ]
};