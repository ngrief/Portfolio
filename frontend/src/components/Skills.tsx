import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: ['AI Red Teaming', 'TensorFlow', 'Scikit-learn', 'Deep Learning', 'Model Evaluation', 'Data Labeling']
    },
    {
      title: 'Finance & Quantitative',
      skills: ['Portfolio Management', 'Derivatives', 'Hedging', 'Risk Modeling', 'Quantitative Trading', 'Asset Management']
    },
    {
      title: 'Programming & Data',
      skills: ['Python', 'SQL', 'JavaScript', 'Pandas', 'NumPy', 'ETL Pipelines']
    },
    {
      title: 'Visualization & BI',
      skills: ['Tableau', 'Plotly', 'D3.js', 'Matplotlib', 'Seaborn', 'Chart.js']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'SQLAlchemy']
    },
    {
      title: 'Certifications',
      skills: ['DataCamp Certified', 'Databricks Certified', 'Snowflake Certified', 'ASU Bootcamp Graduate']
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise spanning AI red teaming, quantitative finance, data science, and business intelligence
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${categoryIndex * 150}ms`, animationDuration: '700ms' }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
