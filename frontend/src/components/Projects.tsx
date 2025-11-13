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
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/ngrief/Portfolio',
      demo: '',
      image: ''
    },
    {
      id: '2',
      title: 'Data Visualization Dashboard',
      description: 'Interactive data visualization dashboard showcasing various analytics and insights with modern charting libraries.',
      technologies: ['React', 'D3.js', 'Chart.js', 'Python'],
      github: '',
      demo: '',
      image: ''
    },
    {
      id: '3',
      title: 'Full Stack Application',
      description: 'A full-stack web application demonstrating modern development practices and cloud deployment.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      github: '',
      demo: '',
      image: ''
    }
  ];

  const projects = backendProjects.length > 0 ? backendProjects : fallbackProjects;

  const projectImages = [
    `${import.meta.env.BASE_URL}assets/generated/project-demo-1.dim_800x600.jpg`,
    `${import.meta.env.BASE_URL}assets/generated/project-demo-2.dim_400x800.jpg`,
    `${import.meta.env.BASE_URL}assets/generated/project-demo-3.dim_800x600.jpg`
  ];

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
                    src={projectImages[index % projectImages.length]}
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
