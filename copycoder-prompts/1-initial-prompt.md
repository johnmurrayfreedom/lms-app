Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Educational Video Platform with AI Assistant Interface
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header with: Logo, Recordings, Download App, Help, User Profile
- Secondary navigation with: Download Jamworks, View demo video
- Content tabs with: HIGHLIGHTS, KEY POINTS, TRANSCRIPTS, SUMMARY, SLIDES, NOTES


2. Layout Components:
- Main video player: ~800x450px
- Right sidebar: ~300px width
- Video timeline: Full width below player
- Thumbnail strip: ~120px height, horizontally scrollable


3. Content Sections:
- Video title and timestamp (April 27 2023 9:51 AM - 9:56 AM)
- Main video player with controls
- AI Assistant chat interface
- Quick action buttons (Quiz Me, Simplify, etc.)
- Thumbnail preview section


4. Interactive Controls:
- Video controls: Play/Pause, Skip, Volume, Time slider
- AI interaction buttons in light blue
- Start quiz button in blue (#4169E1)
- More options menu (three dots)
- Video quality and fullscreen controls


5. Colors:
- Primary purple: #7B68EE (header)
- Secondary blue: #4169E1 (buttons)
- Light blue: #E8F0FE (AI assistant buttons)
- White: #FFFFFF (background)
- Dark text: #333333


6. Grid/Layout Structure:
- 12-column grid system
- Main content: 8 columns
- Sidebar: 4 columns
- Fixed header height: 60px
- Responsive breakpoint at 1024px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── VideoPlayer
│   │   └── Sidebar
│   ├── features/
│   │   ├── AIAssistant
│   │   ├── VideoControls
│   │   └── ThumbnailStrip
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Video playback with custom controls
- AI assistant integration
- Quiz generation system
- Content navigation system
- Thumbnail preview system


3. State Management:
```typescript
interface AppState {
├── video: {
│   ├── currentTime: number
│   ├── duration: number
│   ├── isPlaying: boolean
│   └── quality: string
├── aiAssistant: {
│   ├── messages: Message[]
│   ├── isTyping: boolean
│   └── currentTool: string
├── }
└── navigation: {
├── currentTab: string
└── selectedThumbnail: number
}
}
```


4. Routes:
```typescript
const routes = [
├── '/recordings',
├── '/recording/:id',
├── '/download',
└── '/help'
]
```


5. Component Architecture:
- VideoPlayer (parent)
├── VideoControls
├── Timeline
├── ThumbnailStrip
- AIAssistant (sidebar)
├── ChatInterface
├── QuickActions
└── ToolSelector


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'large': 1440px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.