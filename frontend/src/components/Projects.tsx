import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBackendData } from '@/hooks/useQueries';

export default function Projects() {
  const { projects: backendProjects, isLoadingProjects } = useBackendData();

  // Fallback projects data
  const fallbackProjects = [
    {
      id: '1',
      title: 'Crowdfunding ETL Pipeline',
      description: 'Comprehensive ETL (Extract, Transform, Load) pipeline for processing and analyzing crowdfunding campaign data with robust database design. Implemented data validation, cleaning procedures, and efficient SQL queries for complex analytical questions.',
      technologies: ['Python', 'Pandas', 'PostgreSQL', 'ETL', 'Database Design'],
      github: 'https://github.com/ngrief/Project-2-',
      demo: '',
      image: `${import.meta.env.BASE_URL}assets/Crowdfunding ERD.png`
    },
    {
      id: '2',
      title: 'Population & Migration Data Platform',
      description: 'Full-stack data visualization platform exploring global population dynamics and migration patterns. Features interactive choropleth maps, dynamic charts, and MongoDB database integration for efficient data querying.',
      technologies: ['JavaScript', 'Chart.js', 'Leaflet.js', 'MongoDB', 'HTML/CSS'],
      github: 'https://github.com/ngrief/data-class-project-3',
      demo: 'https://ngrief.github.io/data-class-project-3/index.html',
      image: `${import.meta.env.BASE_URL}assets/seasonality.png`
    },
    {
      id: '3',
      title: 'Airbnb Market Analysis',
      description: 'Collaborative project analyzing Airbnb listing data to uncover pricing strategies, host behaviors, and market dynamics. Quantified impact of premium amenities on pricing and identified seasonal patterns using statistical analysis.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'SciPy', 'Statistical Analysis'],
      github: 'https://github.com/ngrief/data-class-project1',
      demo: '',
      image: `${import.meta.env.BASE_URL}assets/Alabama dash.png`
    },
    {
      id: '4',
      title: 'Microbial Diversity Dashboard',
      description: 'Interactive web application exploring biodiversity in human belly button microbiomes using D3.js. Features dynamic bar charts, interactive bubble charts, and real-time data updates based on user selection.',
      technologies: ['JavaScript', 'D3.js', 'HTML5', 'CSS3', 'JSON'],
      github: 'https://github.com/ngrief/belly-button-challenge',
      demo: 'https://ngrief.github.io/belly-button-challenge/',
      image: `${import.meta.env.BASE_URL}assets/Bio.png`
    },
    {
      id: '5',
      title: 'Employee Attrition Neural Network',
      description: 'Deep neural network to predict employee attrition using HR metrics. 3-layer architecture with 128, 64, and 32 neurons, achieving 87% accuracy. Enables proactive retention strategies and reduces turnover costs.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Neural Networks'],
      github: 'https://github.com/ngrief/deep-learning-challenge',
      demo: '',
      image: `${import.meta.env.BASE_URL}assets/top10_features.png`
    },
    {
      id: '6',
      title: 'NYC Citi Bike Analytics Dashboard',
      description: 'Interactive Tableau story analyzing NYC bike-sharing patterns with 1M+ trip records. Features geographic heatmaps, time-series analysis, user demographic breakdowns, and operational insights for capacity planning.',
      technologies: ['Tableau', 'Python', 'Pandas', 'Data Visualization', 'BI'],
      github: 'https://github.com/ngrief/CitiBike',
      demo: 'https://public.tableau.com/views/BikeDataProject_17394900320310/Story1',
      image: `${import.meta.env.BASE_URL}assets/Tab.png`
    },
    {
      id: '7',
      title: 'Student At Risk Detection System',
      description: 'Machine learning system to identify students at risk of academic failure using predictive analytics. Leverages historical academic data and behavioral indicators to enable early intervention strategies for improved student outcomes.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Data Analytics'],
      github: 'https://github.com/ngrief/Group-5-Project-4',
      demo: '',
      image: `${import.meta.env.BASE_URL}assets/student-risk.png`
    }
  ];

  const projects = backendProjects.length > 0 ? backendProjects : fallbackProjects;

  if (isLoadingProjects) {
    return (
      <section id="projects" className="py-20 md:py-32 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 flex flex-col"
                style={{ animationDelay: `${index * 150}ms`, animationDuration: '700ms' }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || `https://placehold.co/800x600/1a1a1a/white?text=${encodeURIComponent(project.title)}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/800x600/1a1a1a/white?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
