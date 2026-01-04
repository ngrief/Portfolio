import { ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CuratedProjects() {
  return (
    <section id="curated" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Curated Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A handpicked collection of my very best programming projects
            </p>
          </div>

          {/* Curated List Card */}
          <Card className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Star className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      My Best Work
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Explore a curated selection of projects that showcase my strongest skills
                      in data analysis, machine learning, and software development.
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      size="lg"
                      className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
                      asChild
                    >
                      <a
                        href="https://ngrief.github.io/Curated_List/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                        View Collection
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
