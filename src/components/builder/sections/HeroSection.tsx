import { EnhancedTextEditor } from '../../editor/EnhancedTextEditor';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CenterHero from './HeroSectionStyles/CenterHero';
import SplitHero from './HeroSectionStyles/SplitHero';
import FullScreenHero from './HeroSectionStyles/FullScreenHero';
import GradientHero from './HeroSectionStyles/GradientHero';
// import DOMPurify from 'dompurify';

interface HeroSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: string) => void;
  onStyleChange: (key: string, value: any) => void;
}

export const HeroSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: HeroSectionProps) => {
  const layout=content.style||'centered'

  return (
    <>
      {layout === 'centered' && (
        <CenterHero 
          content={content} 
          styles={styles}
          isEditing={isEditing}
          onContentChange={onContentChange} 
          onStyleChange={onStyleChange}
        />
      )}
      {layout === 'split' && (
        <SplitHero 
          content={content} 
          styles={styles}
          isEditing={isEditing}
          onContentChange={onContentChange} 
          onStyleChange={onStyleChange}
        />
      )} 
      {layout === 'fullscreen' && (
        <FullScreenHero 
          content={content} 
          styles={styles}
          isEditing={isEditing}
          onContentChange={onContentChange} 
          onStyleChange={onStyleChange}
        />
      )}    
            {layout === 'minimal' && (
        <FullScreenHero 
          content={content} 
          styles={styles}
          isEditing={isEditing}
          onContentChange={onContentChange} 
          onStyleChange={onStyleChange}
        />
      )} 
      
      {layout === 'gradient' && (
        <GradientHero 
          content={content} 
          styles={styles}
          isEditing={isEditing}
          onContentChange={onContentChange} 
          onStyleChange={onStyleChange}
        />
      )}
      
      </>


    
  );
};