Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /recordings
- /download-app
- /help
- /user-profile
- /download-jamworks
- /view-demo-video
- /highlights
- /key-points
- /transcripts
- /summary
- /slides
- /notes

Page Implementations:
/recordings:
Core Purpose: Display user's recorded sessions and lectures
Key Components
- RecordingsList with filtering

/sorting
- Recording preview cards
- Search functionality
- Date range selector
Layout Structure:
- Grid layout for recordings
- Sidebar for filters
- Responsive collapse to single column on mobile

/download-app:
Core Purpose: App download and installation instructions
Key Components
- Platform detection
- Download buttons for different OS
- Installation guide
- System requirements
Layout Structure
- Hero section with CTA
- Steps timeline
- FAQ accordion

/help:
Core Purpose: User support and documentation
Key Components
- Searchable FAQ
- Category navigation
- Contact support form
- Knowledge base articles
Layout Structure
- Left sidebar navigation
- Main content area
- Quick links footer

/user-profile:
Core Purpose: User settings and account management
Key Components
- Profile information editor
- Preferences settings
- Subscription management
- Usage statistics
Layout Structure
- Tab-based navigation
- Form sections
- Activity dashboard

/download-jamworks:
Core Purpose: Jamworks software distribution
Key Components
- Version selector
- Release notes
- Download progress
- Compatibility checker
Layout Structure
- Download wizard
- System check panel
- Installation instructions

/view-demo-video:
Core Purpose: Product demonstration
Key Components
- Video player
- Feature highlights
- Interactive tooltips
- Call-to-action buttons
Layout Structure
- Full-width video
- Feature list
- Related resources

/highlights:
Core Purpose: Show important moments from recordings
Key Components
- Timeline view
- Highlight clips
- Export options
- Tag management
Layout Structure
- Timeline header
- Highlights grid
- Action toolbar

/key-points:
Core Purpose: Display crucial learning points
Key Components
- Point categorization
- Priority indicators
- Note attachment
- Export functionality
Layout Structure
- Category tabs
- Points list
- Action sidebar

/transcripts:
Core Purpose: Show text transcriptions of recordings
Key Components
- Searchable transcript
- Time-synced highlighting
- Export options
- Editor
Layout Structure
- Transcript panel
- Search sidebar
- Navigation controls

/summary:
Core Purpose: Provide content summaries
Key Components
- AI-generated summary
- Key takeaways
- Topic breakdown
- Edit capabilities
Layout Structure
- Summary sections
- Topic navigation
- Action toolbar

/slides:
Core Purpose: Present lecture slides
Key Components
- Slide viewer
- Thumbnail navigation
- Download options
- Annotation tools
Layout Structure
- Slide preview
- Thumbnail sidebar
- Tools header

/notes:
Core Purpose: Note-taking and management
Key Components
- Rich text editor
- Organization tools
- Tag system
- Sharing options
Layout Structure
- Editor workspace
- Organization sidebar
- Collaboration panel

Layouts:
MainLayout:
- Applicable routes: All routes
- Core components
  - Navigation header
  - User menu
  - Footer
  - Notifications
- Responsive behavior
  - Collapsible navigation
  - Adaptive spacing
  - Mobile-first design

ContentLayout
- Applicable routes: /recordings, /highlights, /key-points, /transcripts, /summary, /slides, /notes
- Core components
  - Content area
  - Sidebar
  - Action header
- Responsive behavior
  - Collapsible sidebar
  - Stack on mobile
  - Floating action buttons

UtilityLayout
- Applicable routes: /download-app, /help, /download-jamworks, /view-demo-video
- Core components
  - Hero section
  - Content blocks
  - CTA sections
- Responsive behavior
  - Flexible grid
  - Responsive images
  - Mobile-optimized CTAs
</page-structure-prompt>