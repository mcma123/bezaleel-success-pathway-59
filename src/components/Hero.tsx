
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const TYPING_WORDS = ["Business Success", "Digital Transformation"];
const TYPING_SPEED = 80; // ms per character
const ERASING_SPEED = 40; // ms per character
const DELAY_BETWEEN_WORDS = 1200; // ms to wait before erasing/typing next

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = TYPING_WORDS[wordIndex];
    if (typing) {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), DELAY_BETWEEN_WORDS);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, ERASING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setWordIndex((wordIndex + 1) % TYPING_WORDS.length);
          setTyping(true);
        }, 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-bezaleel-gray via-white to-bezaleel-gray/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-bezaleel-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-bezaleel-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-bezaleel-red-light rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-bezaleel-red/10 rounded-full text-bezaleel-red text-sm font-medium mb-6 animate-bounce-in">
            <span className="w-2 h-2 bg-bezaleel-red rounded-full mr-2 animate-pulse"></span>
            Trusted Business Partners Across Africa
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bezaleel-dark mb-6 animate-fade-in-up">
            Your Gateway to{' '}
            <span className="bg-gradient-to-r from-bezaleel-red to-bezaleel-accent bg-clip-text text-transparent">
              {displayed}&nbsp;
            </span>
            Across Africa
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            One-stop business consulting for South Africa & Zambia. From company registration to digital presence, we make business expansion seamless.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bezaleel-gradient text-white px-8 py-6 text-lg ripple-effect hover-lift group">
              Start Your Business Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bezaleel-red mb-2 animate-countUp">500+</div>
              <div className="text-sm text-muted-foreground">Companies Registered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bezaleel-red mb-2 animate-countUp" style={{ animationDelay: '0.1s' }}>3</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bezaleel-red mb-2 animate-countUp" style={{ animationDelay: '0.2s' }}>150+</div>
              <div className="text-sm text-muted-foreground">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bezaleel-red mb-2 animate-countUp" style={{ animationDelay: '0.3s' }}>98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-bezaleel-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-bezaleel-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
