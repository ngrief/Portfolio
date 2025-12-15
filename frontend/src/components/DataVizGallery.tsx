import { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Visualization {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
}

const getVisualizationImage = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const visualizations: Visualization[] = [
  {
    id: 'alabama-medical-charges',
    title: 'Alabama Medical-Charges Dashboard',
    description: 'Comprehensive healthcare analytics dashboard visualizing medical charge flows across payers, procedures, and cities. Features Sankey diagrams, treemaps, and heatmaps for multi-dimensional analysis.',
    image: getVisualizationImage('Alabama dash.png'),
    github: '',
    tags: ['Tableau', 'Healthcare', 'Data Analytics']
  },
  {
    id: 'election-analysis',
    title: 'Election Analysis',
    description: 'Interactive visualization analyzing voting patterns by political party across different demographics and regions.',
    image: getVisualizationImage('VotesbyParty.png'),
    github: 'https://github.com/ngrief/Election',
    tags: ['Python', 'Matplotlib', 'Political Data']
  },
  {
    id: 'microbial-diversity',
    title: 'Microbial Diversity Dashboard',
    description: 'Comprehensive dashboard exploring microbial diversity through OTU samples and taxonomic analysis.',
    image: getVisualizationImage('Bio.png'),
    github: 'https://github.com/ngrief/belly-button-challenge',
    demo: 'https://ngrief.github.io/belly-button-challenge/',
    tags: ['JavaScript', 'D3.js', 'Bioinformatics']
  },
  {
    id: 'wildfire-seasonality',
    title: 'California Wildfire Seasonality Analysis',
    description: 'Time-series analysis revealing seasonal patterns in California wildfire occurrences throughout the year.',
    image: getVisualizationImage('seasonality.png'),
    github: 'https://github.com/ngrief/FireAnalyst',
    tags: ['Python', 'Time Series', 'Climate Data']
  },
  {
    id: 'citibike-tableau',
    title: 'Bike Data Project',
    description: 'Multi-sheet Tableau story analyzing bike share data including total rides, trip duration comparisons between casual and member users, electric vs classic bike usage patterns, and detailed demographic breakdowns.',
    image: getVisualizationImage('Tab.png'),
    github: 'https://github.com/ngrief/CitiBike',
    demo: 'https://public.tableau.com/views/BikeDataProject_17394900320310/Story1',
    tags: ['Tableau', 'Transportation', 'NYC Data']
  },
  {
    id: 'uber-dashboard',
    title: 'NYC Uber Dashboard',
    description: 'Interactive geospatial analytics dashboard featuring map visualizations of NYC Uber pickups, fare distribution by product type, and surge pricing probability analysis by hour of day across 25,000+ rides.',
    image: getVisualizationImage('Uber dash.png'),
    github: '',
    tags: ['Tableau', 'Geospatial', 'Transportation']
  }
];

export default function DataVizGallery() {
  const [selectedViz, setSelectedViz] = useState<Visualization | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data Visualization Gallery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore interactive dashboards and visualizations that transform complex data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visualizations.map((viz) => (
            <div
              key={viz.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedViz(viz)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={viz.image}
                  alt={viz.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/1200x675/1a1a1a/white?text=${encodeURIComponent(viz.title)}`;
                  }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-semibold mb-2">{viz.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {viz.description}
                  </p>
                  <div className="flex gap-2">
                    {viz.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(viz.github, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {viz.demo && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(viz.demo, '_blank');
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        View
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {viz.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {viz.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedViz} onOpenChange={() => setSelectedViz(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden">
            {selectedViz && (
              <div className="relative">
                <DialogClose className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors">
                  <X className="h-5 w-5" />
                </DialogClose>
                
                <div className="bg-muted">
                  <img
                    src={selectedViz.image}
                    alt={selectedViz.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedViz.title}</h3>
                    <p className="text-muted-foreground">{selectedViz.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedViz.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    {selectedViz.github && (
                      <Button
                        variant="default"
                        className="gap-2"
                        onClick={() => window.open(selectedViz.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </Button>
                    )}
                    {selectedViz.demo && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.open(selectedViz.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
