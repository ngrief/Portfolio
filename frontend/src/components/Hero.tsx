import { ArrowDown } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useBackendData } from '@/hooks/useQueries';

export default function Hero() {
  const { socialLinks: backendSocialLinks } = useBackendData();

  // Fallback social links
  const defaultSocialLinks = [
    ['linkedin', 'https://www.linkedin.com/in/nathaniel-trief-492a70b/'],
    ['github', 'https://github.com/ngrief'],
    ['email', 'mailto:ntrief@gmail.com']
  ];

  const socialLinks = backendSocialLinks.length > 0 ? backendSocialLinks : defaultSocialLinks;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <SiGithub className="h-5 w-5" />;
      case 'linkedin':
        return <SiLinkedin className="h-5 w-5" />;
      case 'twitter':
        return <SiX className="h-5 w-5" />;
      case 'email':
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in duration-1000">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}assets/IMG_3024.JPG`}
                alt="Nathaniel Trief"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=Nathaniel+Trief&size=200&background=random`;
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Nathaniel Trief
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm md:text-base px-4 py-1">
                Equity Investment Manager
              </Badge>
              <Badge variant="outline" className="text-sm md:text-base px-4 py-1">
                AI Red Team Specialist
              </Badge>
              <Badge variant="outline" className="text-sm md:text-base px-4 py-1">
                Data & Quantitative Analyst
              </Badge>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Transforming complex datasets into actionable insights. Specialized in AI red teaming,
            quantitative finance, and data-driven decision making.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map(([platform, url]) => (
              <Button
                key={platform}
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform duration-200"
                asChild
              >
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
                  {getSocialIcon(platform)}
                </a>
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
