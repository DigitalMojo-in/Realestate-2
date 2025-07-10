import { Award, Building, Users, TrendingUp } from 'lucide-react';

const WhyThisProject = () => {
  const achievements = [
    {
      icon: Building,
      number: '25+',
      label: 'Years of Excellence',
      description: 'Trusted developer with proven track record'
    },
    {
      icon: Users,
      number: '50,000+',
      label: 'Happy Families',
      description: 'Across 100+ successful projects'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognition for quality and innovation'
    },
    {
      icon: TrendingUp,
      number: '40%',
      label: 'Average Appreciation',
      description: 'In property value over 3 years'
    }
  ];

  const keyProjects = [
    {
      name: 'Prestige Lake Ridge',
      location: 'Whitefield',
      units: '850 Units',
      status: 'Delivered'
    },
    {
      name: 'Prestige Shantiniketan',
      location: 'Whitefield',
      units: '2,400 Units',
      status: 'Delivered'
    },
    {
      name: 'Prestige Sunrise Park',
      location: 'Electronic City',
      units: '1,200 Units',
      status: 'Delivered'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Why Choose Prestige Group
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            A legacy of trust, quality, and excellence in real estate development since 1986
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Developer Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-brand-text">
                A Heritage of Excellence
              </h3>
              <p className="text-brand-muted leading-relaxed">
                Prestige Group is a pioneering real estate developer with over three decades of excellence in creating landmark developments across India. Founded by Mr. Razack Sattar, the group has consistently delivered projects that redefine luxury living and commercial spaces.
              </p>
              <p className="text-brand-muted leading-relaxed">
                With a strong presence in Bangalore, Chennai, Hyderabad, Kochi, and Goa, Prestige Group has developed over 250 projects covering more than 150 million square feet of prime real estate.
              </p>
            </div>

            {/* Key Projects */}
            <div>
              <h4 className="text-lg font-semibold text-brand-text mb-4">Notable Delivered Projects</h4>
              <div className="space-y-3">
                {keyProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-brand-surface rounded-lg">
                    <div>
                      <h5 className="font-medium text-brand-text">{project.name}</h5>
                      <p className="text-sm text-brand-muted">{project.location} • {project.units}</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-brand-surface rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-1">
                  {achievement.number}
                </div>
                <div className="font-semibold text-brand-text mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-brand-muted">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RERA & Compliance */}
        <div className="bg-brand-surface rounded-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-brand-text mb-2">
              RERA Compliance & Legal Transparency
            </h3>
            <p className="text-brand-muted">
              Fully compliant with Real Estate Regulatory Authority guidelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-brand-text mb-1">RERA Registration</h4>
              <p className="text-sm text-brand-muted">PRM/KA/RERA/1251/446/PR/171101/001908</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-text mb-1">Bank Approval</h4>
              <p className="text-sm text-brand-muted">All major banks & financial institutions</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-text mb-1">Legal Clearance</h4>
              <p className="text-sm text-brand-muted">Clear title, approved plans & NOCs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisProject;