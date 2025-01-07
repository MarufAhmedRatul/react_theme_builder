export interface StyleOption {
  id: string;
  label: string;
  description: string;
  preview?: string;
}

export interface ComponentStyles {
  header: StyleOption[];
  hero: StyleOption[];
  grid: StyleOption[];
  services: StyleOption[];
  footer: StyleOption[];
}

export const componentStyles: ComponentStyles = {
  header: [
    {
      id: "start",
      label: "Start Layout",
      description: "Clean and modern design with emphasis on navigation",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "end",
      label: "End Layout",
      description: "Simple and elegant with essential elements",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "center",
      label: "Centered Layout",
      description: "Centered logo with balanced navigation",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "between",
      label: "Between Layout",
      description: "Elegant transparent design with hover effects",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    // {
    //   id: 'dark',
    //   label: 'Dark Theme',
    //   description: 'Sophisticated dark theme with contrast',
    //   preview: '/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png'
    // }
  ],
  hero: [
    {
      id: "split",
      label: "Split Layout",
      description: "Modern split design with image and content",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "centered",
      label: "Centered Hero",
      description: "Clean centered layout with prominent CTA",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "fullscreen",
      label: "Fullscreen",
      description: "Fullscreen background with overlay text",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "minimal",
      label: "Minimal",
      description: "Simple and clean design",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "gradient",
      label: "Gradient",
      description: "Beautiful gradient background",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
  ],
  services: [
    {
      id: "grid",
      label: "Grid Layout",
      description: "Modern grid layout with icons and descriptions",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "cards",
      label: "Service Cards",
      description: "Card-based service layout with hover effects",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "features",
      label: "Feature List",
      description: "Detailed feature presentation with icons",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "compact",
      label: "Compact",
      description: "Space-efficient service layout",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "modern",
      label: "Modern",
      description: "Modern design with hover effects",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
  ],
  grid: [
    {
      id: "basic",
      label: "Basic Grid",
      description: "Simple and clean grid layout",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "masonry",
      label: "Masonry",
      description: "Pinterest-style masonry layout",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "featured",
      label: "Featured",
      description: "First item larger than others",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "cards",
      label: "Cards",
      description: "Card-based grid layout",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      description: "Portfolio-style grid with hover effects",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
  ],
  footer: [
    {
      id: "simple",
      label: "Simple Footer",
      description: "Clean and minimal footer design",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "columns",
      label: "Multi-Column",
      description: "Organized content in columns",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "social",
      label: "Social Focus",
      description: "Prominent social media links",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "newsletter",
      label: "Newsletter",
      description: "Footer with newsletter signup",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
    {
      id: "dark",
      label: "Dark Theme",
      description: "Dark-themed footer design",
      preview: "/lovable-uploads/b8e6a9bb-f8e5-4c44-8537-0423452c2d76.png",
    },
  ],
};
