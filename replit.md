# CloakerAds Landing Page

## Status Atual (2025-07-23 20:23)
✅ Servidor funcionando corretamente no desenvolvimento
✅ Erros de JavaScript corrigidos
✅ Health check passando
⚠️ Problema com deployment no Replit (botão Redeploy não responde)

## Overview

CloakerAds is a professional marketing landing page for a traffic cloaking service built on Cloudflare infrastructure. This is a static website designed to convert digital marketing professionals into customers through compelling copy, competitive positioning, and a modern tech-focused design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website**: Pure HTML, CSS, and JavaScript without any framework dependencies
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced features added via JS
- **Performance Optimized**: External font loading with display swap, optimized asset loading

### Technology Stack
- **HTML5**: Semantic markup with proper meta tags and accessibility features
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid, and modern CSS features
- **Vanilla JavaScript**: No framework dependencies, modular ES6+ code structure
- **External Dependencies**: 
  - Font Awesome 6.4.0 for icons
  - Google Fonts (Inter) for typography

## Key Components

### 1. Internationalization System
- **Bilingual Support**: English (default) and Portuguese (Brazilian)
- **Language Toggle**: Button-based language switching in navigation
- **Content Translation**: Data attribute-based translation system (`data-en`, `data-pt`)
- **Language Persistence**: User language preference handling

### 2. Navigation System
- **Fixed Navigation**: Sticky header with brand and navigation links
- **Mobile Menu**: Hamburger menu for mobile devices
- **Language Selector**: Integrated language toggle buttons
- **Smooth Scrolling**: Anchor-based navigation between sections

### 3. Content Sections
- **Hero Section**: Value proposition with primary CTA
- **Features Section**: Service capabilities and technical benefits
- **Pricing Section**: Competitive pricing comparison
- **Testimonials**: Social proof and customer reviews
- **FAQ Section**: Common questions and detailed answers

### 4. Design System
- **Dark Theme**: Professional dark color scheme with blue accents
- **CSS Custom Properties**: Centralized design tokens for colors, typography, and spacing
- **Component-Based Styling**: Modular CSS architecture
- **Interactive Elements**: Hover states, transitions, and micro-interactions

## Data Flow

### Language Switching Flow
1. User clicks language toggle button
2. JavaScript captures the language selection
3. System iterates through all translatable elements
4. Content is switched based on data attributes
5. Active language button state is updated
6. Language preference can be stored for future visits

### Navigation Flow
1. User interactions trigger event listeners
2. Mobile menu toggle controls visibility states
3. Smooth scrolling handles anchor navigation
4. Active states provide visual feedback

## External Dependencies

### Content Delivery Networks
- **Font Awesome**: Icon library from cdnjs.cloudflare.com
- **Google Fonts**: Inter font family with optimized loading
- **Performance**: External resources loaded with appropriate loading strategies

### Third-Party Services (Referenced in Content)
- **Cloudflare Workers**: Infrastructure mentioned in copy
- **ProxyCheck.io**: Anti-bot protection integration mentioned
- **Facebook Ads**: Platform optimization mentioned

## Deployment Strategy

### Static Hosting Requirements
- **Server Requirements**: Static file hosting (HTML, CSS, JS)
- **CDN Compatibility**: Works with any CDN or static hosting provider
- **Domain Setup**: Custom domain configuration for branding
- **SSL Certificate**: HTTPS required for professional appearance

### Deployment Entry Points (Updated 2025-07-23)
Multiple entry points created to ensure compatibility with different deployment systems:
- **main.py**: Primary Python HTTP server with enhanced error handling and logging
- **server.py**: Minimal HTTP server for simple deployments
- **app.py**: Alternative entry point that imports main.py
- **start.py**: Universal start script with error handling
- **index.py**: Additional fallback entry point
- **wsgi.py**: WSGI application for deployment systems requiring WSGI
- **run.sh**: Bash script alternative using Python's built-in server
- **run**: Simple bash executable for deployment platforms
- **Procfile**: Process definition for Heroku-style deployments
- **app.json**: Heroku app configuration
- **runtime.txt**: Python version specification

### Deployment Configuration (Updated 2025-07-23)
- **Port Binding**: Uses PORT environment variable or defaults to 5000
- **Host Binding**: Configured for 0.0.0.0 to accept external connections
- **Root Path Handling**: All entry points serve index.html for '/' requests
- **Static File Serving**: Proper MIME types and caching headers
- **Error Handling**: Enhanced error responses with detailed logging
- **Health Check**: HTTP server responds to GET / with 200 status
- **Platform Support**: Heroku, Google Cloud Run, AWS, Vercel, and others
- **Python Version**: Specified as python-3.11 in runtime.txt

### Deployment Commands (Updated 2025-07-23)
Available entry points for different platforms:
- `python start_server.py` - Enhanced production server (recommended)
- `python main.py` - Basic server with error handling
- `python server.py` - Minimal alternative
- `python app.py` - Import-based entry
- `./deploy.sh` - Complete deployment script
- `./run.sh` - Bash script version
- `./run` - Simple executable script
- `python health.py` - Health check utility

### Troubleshooting Deployment Issues
1. **Replit Deployment**: Se o botão "Redeploy" não responder:
   - Verificar se todos os arquivos estão presentes
   - Tentar usar diferentes entry points
   - Verificar logs de deployment
   - O servidor funciona localmente em desenvolvimento

2. **Verificação de Funcionamento**:
   - Health check: `python health.py`
   - Teste local: `curl http://localhost:5000/`
   - Arquivos críticos: index.html, styles.css, script.js

### Performance Considerations
- **Asset Optimization**: Minified CSS and JavaScript for production
- **Image Optimization**: Placeholder for future image assets
- **Caching Strategy**: Static assets can be cached aggressively
- **Loading Strategy**: Critical CSS inline, non-critical assets deferred

### SEO and Marketing
- **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Mobile Optimization**: Responsive design for mobile search rankings
- **Analytics Ready**: Structure prepared for analytics integration

### Scalability Considerations
- **Modular Architecture**: Easy to add new sections or features
- **Translation System**: Simple to add additional languages
- **Component Reusability**: CSS and JS patterns can be extended
- **Maintenance**: Clean, documented code structure for easy updates

## Development Notes

### Code Organization
- **Separation of Concerns**: HTML structure, CSS styling, and JS behavior are clearly separated
- **CSS Architecture**: BEM-inspired naming conventions with utility classes
- **JavaScript Patterns**: Module pattern with clear function responsibilities
- **Comments**: Comprehensive code documentation for maintenance

### Browser Compatibility
- **Modern Browser Support**: Uses modern CSS and JavaScript features
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Mobile First**: Responsive design tested across device sizes
- **Cross-Platform**: Works on desktop, tablet, and mobile devices