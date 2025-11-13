import { Brain, TrendingUp, Database, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI Red Teaming',
      description: 'Red teaming frontier AI models for logical reasoning and financial program robustness, ensuring models fail at defined thresholds.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Management',
      description: 'Managing $6M+ in investment funds with expertise in quantitative trading, derivatives, and risk modeling.'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Advanced analytics, machine learning, and data visualization using Python, SQL, and modern BI tools.'
    },
    {
      icon: Award,
      title: 'Certified Analyst',
      description: 'DataCamp, Databricks, and Snowflake certified. ASU Data Analysis Bootcamp graduate with ASU Business degree.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Bio */}
          <div className="space-y-6 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm an <strong>Equity Investment Manager</strong> and <strong>AI Red Team Specialist</strong> managing $6M+ in investment funds
              while red teaming frontier AI models for logical reasoning and financial robustness. My work bridges quantitative finance,
              machine learning, and data science to drive actionable insights.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <strong>Certified Data Analyst</strong> by DataCamp, Databricks, and Snowflake. ASU Data Analysis Bootcamp graduate with
              a Bachelor's Degree from ASU's W.P. Carey School of Business.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${(index + 3) * 150}ms`, animationDuration: '700ms' }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
