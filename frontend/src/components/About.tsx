import { Code2, Palette, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and modern standards.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating intuitive interfaces with attention to detail and user experience.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver exceptional user experiences.'
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
              Hi! I'm Nathaniel, a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building responsive, user-friendly applications that make a difference.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My journey in web development has been driven by curiosity and a commitment to continuous learning. 
              I believe in writing clean, maintainable code and creating experiences that users love.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
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
