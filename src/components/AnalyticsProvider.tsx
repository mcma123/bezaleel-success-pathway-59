import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsService } from '@/services/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    analyticsService.trackPageView(location.pathname);
  }, [location.pathname]);

  return <>{children}</>;
};