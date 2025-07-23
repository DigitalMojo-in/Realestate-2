
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Zap, BarChart3, Users, Award } from 'lucide-react';

const solutions = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'ROI-driven campaigns that deliver measurable results',
    metrics: '+300% ROI',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Target,
    title: 'Targeted Advertising',
    description: 'Precision targeting for maximum conversion rates',
    metrics: '65% Higher CTR',
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Zap,
    title: 'Real-Time Optimization',
    description: 'AI-powered campaign adjustments in real-time',
    metrics: '40% Lower CPL',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Deep analytics for data-driven decisions',
    metrics: '2x Better Insights',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'High-quality leads that convert to sales',
    metrics: '50% Quality Boost',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'Brand Excellence',
    description: 'Premium brand positioning and recognition',
    metrics: '250% Brand Lift',
    color: 'from-yellow-500 to-orange-600'
  }
];

export const MobilePerformanceSolutions = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 p-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-6">
        {solutions.map((solution, index) => (
          <Card 
            key={index} 
            className="flex-shrink-0 w-72 md:w-full group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-105"
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <Badge 
                variant="secondary" 
                className="text-sm font-bold text-green-700 bg-green-100 hover:bg-green-200 transition-colors duration-200"
              >
                {solution.metrics}
              </Badge>
              
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                {solution.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
