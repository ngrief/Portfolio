import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useBackendData } from '@/hooks/useQueries';

export default function Contact() {
  const { socialLinks: backendSocialLinks } = useBackendData();

  // Fallback social links
  const defaultSocialLinks = [
    ['linkedin', 'https://www.linkedin.com/in/nathaniel-trief-492a70b/'],
    ['github', 'https://github.com/ngrief']
  ];

  const socialLinks = backendSocialLinks.length > 0 ? backendSocialLinks : defaultSocialLinks;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object for submission
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', `Portfolio Contact from ${formData.name}`);
      formDataObj.append('_captcha', 'false');

      // Send to email using FormSubmit
      const response = await fetch('https://formsubmit.co/ntrief@gmail.com', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: "Thank you for reaching out. I'll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email or phone.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ntrief@gmail.com',
      href: 'mailto:ntrief@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Scottsdale, AZ',
      href: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(480) 235-6831',
      href: 'tel:+14802356831'
    }
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <SiGithub className="h-5 w-5" />;
      case 'linkedin':
        return <SiLinkedin className="h-5 w-5" />;
      case 'twitter':
        return <SiX className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold">
              Get In{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to remote or in-person opportunities in Scottsdale, AZ. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="animate-in fade-in slide-in-from-left-4 duration-700 delay-150">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="group hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-medium hover:text-primary transition-colors break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium break-words">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-3">
                    {socialLinks
                      .filter(([platform]) => platform !== 'email')
                      .map(([platform, url]) => (
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
