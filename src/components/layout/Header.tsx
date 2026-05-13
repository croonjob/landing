import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const navLinks = [
  {
    name: 'Products',
    path: '/products',
    items: [
      { name: 'Craftrix AI', description: 'Build your app with drag and drop without coding needed', path: '/products/craftrix-ai' },
      { name: 'Document Intelligence', description: 'Extract insights from any document', path: '/products/documents-intelligence' },
    ],
  },
  {
    name: 'Solutions',
    path: '/solutions',
    items: [
      { name: 'Customer Service', description: 'AI-powered chatbots for 24/7 customer support', path: '/solutions/customer-service' },
      { name: 'Business Automation', description: 'Automate repetitive workflows with AI', path: '/solutions/business-automation' },
      { name: 'Document Intelligence', description: 'Extract insights from any document', path: '/solutions/document-intelligence' },
      { name: 'Data Lakehouse', description: 'Centralize and analyze your business data', path: '/solutions/data-lakehouse' },
      { name: 'Market Predictive Analytics', description: 'AI-powered financial forecasting', path: '/solutions/market-predictive-analytics' },
    ],
  },
  {
    name: 'Studio',
    path: '/studio',
  },
];

/**
 * Scale.ai style header with:
 * - Fixed position with scroll-aware background
 * - Logo on left, nav in center, CTAs on right
 * - Hover dropdown menus
 * - Responsive mobile menu
 */
export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Header background based on scroll
  const isSolid = isScrolled || location.pathname !== '/';

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 150);
  };

  const handleSubmenuMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-colors duration-300',
        isSolid
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      )}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Header Container */}
      <div className="relative transition-colors duration-200 delay-20">
        <div className="relative items-center flex gap-2 px-6 md:px-8 justify-between grid-layout-desktop">
          {/* Logo */}
          <div className="relative z-20 flex min-w-0 shrink-0 items-center self-center">
            <Link
              to="/"
              className={cn(
                'flex items-center gap-2 transition-colors duration-300',
                isSolid ? 'text-foreground' : 'text-white'
              )}
            >
              <img
                src="/logo.png"
                alt="Croonjob"
                className="h-18 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="relative z-20 hidden min-w-0 flex-1 items-center justify-start gap-0.5 md:flex md:gap-1 ml-8"
            onMouseLeave={handleMouseLeave}
          >
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.items && handleMouseEnter(link.name)}
              >
                {link.items ? (
                  <button
                    type="button"
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1 border-0 bg-transparent px-1.5 py-1.5 transition-colors duration-300',
                      'text-sm font-medium rounded-none shadow-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                      activeDropdown === link.name
                        ? isSolid ? 'text-foreground' : 'text-white'
                        : isSolid
                          ? 'text-foreground/80 hover:text-foreground'
                          : 'text-white/80 hover:text-white'
                    )}
                    aria-expanded={activeDropdown === link.name}
                    aria-haspopup="true"
                  >
                    <span>{link.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn(
                        'shrink-0 transition-transform duration-200',
                        activeDropdown === link.name && 'rotate-180'
                      )}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1 border-0 bg-transparent px-1.5 py-1.5 transition-colors duration-300',
                      'text-sm font-medium rounded-none shadow-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                      isSolid
                        ? 'text-foreground/80 hover:text-foreground'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="size-4 shrink-0" />
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === link.name && link.items && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        'absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[280px] overflow-hidden rounded-xl border shadow-lg',
                        'bg-background/95 backdrop-blur-lg',
                        isSolid ? 'border-border' : 'border-white/10'
                      )}
                      onMouseEnter={handleSubmenuMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-2">
                        {link.items.map((item, index) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveSubmenu(null);
                            }}
                            className={cn(
                              'flex items-start gap-3 rounded-lg px-3 py-3 transition-colors duration-150',
                              isSolid
                                ? 'hover:bg-muted/50'
                                : 'hover:bg-white/10'
                            )}
                          >
                            <div className="flex-1">
                              <div className={cn(
                                'text-sm font-medium',
                                isSolid ? 'text-foreground' : 'text-white'
                              )}>
                                {item.name}
                              </div>
                              <div className={cn(
                                'text-xs mt-0.5',
                                isSolid ? 'text-muted-foreground' : 'text-white/60'
                              )}>
                                {item.description}
                              </div>
                            </div>
                            <ChevronRight
                              className={cn(
                                'size-4 shrink-0 mt-0.5 transition-transform duration-150',
                                isSolid ? 'text-muted-foreground' : 'text-white/40'
                              )}
                            />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="relative z-20 flex justify-end gap-2 self-center md:ml-auto md:shrink-0 md:gap-3">
            {/* Login Button */}
            <Link
              to="/login"
              className={cn(
                'hidden shrink-0 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-300',
                'h-10 whitespace-nowrap',
                isSolid
                  ? 'border-border/50 bg-transparent text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                  : 'border-white/30 bg-transparent text-white/80 hover:bg-white/10 hover:text-white'
              )}
            >
              Log in
            </Link>

            {/* Book Demo Button - Primary CTA */}
            <Link
              to="/demo"
              className={cn(
                'hidden shrink-0 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300',
                'h-10 whitespace-nowrap',
                isSolid
                  ? 'bg-foreground text-background hover:bg-foreground/90'
                  : 'bg-white text-foreground hover:bg-white/90'
              )}
            >
              Book demo
            </Link>

            {/* Mobile CTA */}
            <Link
              to="/demo"
              className={cn(
                'shrink-0 flex md:hidden items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 h-10',
                isSolid
                  ? 'bg-foreground text-background'
                  : 'bg-white text-foreground'
              )}
            >
              Book demo
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'inline-flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 md:hidden',
                isSolid
                  ? 'bg-muted/50 text-foreground hover:bg-muted'
                  : 'bg-white/10 text-white hover:bg-white/20'
              )}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="size-5 shrink-0" />
              ) : (
                <Menu className="size-5 shrink-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'md:hidden overflow-hidden border-t',
              isSolid
                ? 'bg-background border-border'
                : 'bg-foreground/95 border-white/10'
            )}
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between px-3 py-3 text-base font-medium rounded-lg transition-colors',
                    isSolid
                      ? 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  <span>{link.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              ))}

              {/* Mobile Divider */}
              <div className={cn('my-2 h-px', isSolid ? 'bg-border' : 'bg-white/20')} />

              {/* Mobile Login */}
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center justify-center px-3 py-3 text-base font-medium rounded-lg transition-colors',
                  isSolid
                    ? 'text-foreground/80 hover:text-foreground hover:bg-muted/50 border border-border'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border border-white/30'
                )}
              >
                Log in
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
