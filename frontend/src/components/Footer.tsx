import { Heart } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useBackendData } from '@/hooks/useQueries';

export default function Footer() {
  const { socialLinks: backendSocialLinks } = useBackendData();

  // Fallback social links
  const defaultSocialLinks = [
    ['linkedin', 'https://www.linkedin.com/in/nathaniel-trief-492a70b/'],
    ['github', 'https://github.com/ngrief'],
    ['email', 'mailto:ntrief@gmail.com']
  ];

  const socialLinks = backendSocialLinks.length > 0 ? backendSocialLinks : defaultSocialLinks;
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

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
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nathaniel Trief
              </h3>
              <p className="text-muted-foreground">
                Equity Investment Manager | AI Red Team Specialist | Data & Quantitative Analyst
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Scottsdale, AZ</p>
                <a href="mailto:ntrief@gmail.com" className="block hover:text-primary transition-colors">
                  ntrief@gmail.com
                </a>
                <a href="tel:+14802356831" className="block hover:text-primary transition-colors">
                  (480) 235-6831
                </a>
              </div>
            </div>
          </div>

          <Separator />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
              <p>© {currentYear}. Built with</p>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                <span>using</span>
                <a
                  href="https://caffeine.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  caffeine.ai
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
              <div className="flex gap-2">
                {socialLinks.map(([platform, url]) => (
                  <Button
                    key={platform}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    asChild
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
                      {getSocialIcon(platform)}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
