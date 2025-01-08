import { EnhancedTextEditor } from '../../editor/EnhancedTextEditor';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CenterHero from './HeroSectionStyles/CenterHero';
import SplitHero from './HeroSectionStyles/SplitHero';
import FullScreenHero from './HeroSectionStyles/FullScreenHero';
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
    // <div className="bg-white p-8" style={styles.background || {}}>
    //   {isEditing ? (
    //     <div className="space-y-4">
    //       <EnhancedTextEditor
    //         styles={styles}
    //         componentName='heroTitle'
    //         value={content.heroTitle }
    //         fontSize={styles.heroTitle?.fontSize?parseInt(styles.heroTitle.fontSize,10)?parseInt(styles.heroTitle.fontSize,10):36:36}
    //         placeholder="Title here"
    //         onChange={(value) => onContentChange('heroTitle', value)}
    //         onStyleChange={(style) => onStyleChange('heroTitle', style)}
    //       />
    //       <EnhancedTextEditor
    //       styles={styles}
    //       componentName='heroSubtitle'
    //         value={content.heroSubtitle}
    //         onChange={(value) => onContentChange('heroSubtitle', value)}
    //         onStyleChange={(style) => onStyleChange('heroSubtitle', style)}
    //         placeholder='Subtitle here'
    //         fontSize={styles.heroSubtitle?.fontSize?parseInt(styles.heroSubtitle.fontSize,10)?parseInt(styles.heroSubtitle.fontSize,10):20:20}
    //         multiline
    //       />
    //       <Input
    //         type="url"
    //         placeholder="Background Image URL"
    //         value={content.heroBackground || ''}
    //         onChange={(e) => onContentChange('heroBackground', e.target.value)}
    //       />
    //       <Input
    //         type="url"
    //         placeholder="Button URL"
    //         value={content.heroButtonUrl || ''}
    //         onChange={(e) => onContentChange('heroButtonUrl', e.target.value)}
    //       />
    //       <EnhancedTextEditor
    //       styles={styles}
    //       componentName='heroButtonText'
    //         value={content.heroButtonText}
    //         placeholder='Button Text'
    //         fontSize={styles.heroButtonText?.fontSize?parseInt(styles.heroButtonText.fontSize,10)?parseInt(styles.heroButtonText.fontSize,10):16:16}
    //         onChange={(value) => onContentChange('heroButtonText', value)}
    //         onStyleChange={(style) => onStyleChange('heroButtonText', style)}
    //         onShadCNPropChange={(prop) => onStyleChange('heroButtonTextShadCN', prop)}
    //       />
    //     </div>
    //   ) : (
    //     <div
    //       className="min-h-[400px] flex flex-col items-center justify-center text-center"
    //       style={{
    //         backgroundImage: content.heroBackground ? `url(${content.heroBackground})` : undefined,
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //         ...styles.background
    //       }}
    //     >
    //       <h1 className="text-4xl font-bold mb-4" style={styles.heroTitle || {}}>
    //         {content.heroTitle || 'Welcome'}
    //       </h1>
    //       <div 
    //         className="text-xl mb-8 prose prose-slate max-w-none
    //           [&>ol]:list-decimal [&>ul]:list-disc
    //       "
    //         style={styles.heroSubtitle || {}}
    //         dangerouslySetInnerHTML={{__html:content.heroSubtitle||"This is Subtitle"}}
    //       />
    //       <a href={content.heroButtonUrl || '#'}>
    //         <Button {...styles.heroButtonTextShadCN}   style={styles.heroButtonText || {}}>
    //           {content.heroButtonText || 'Learn More'}
    //         </Button>
    //       </a>
    //     </div>
    //   )}
    // </div>
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
      )} {layout === 'fullscreen' && (
        <FullScreenHero 
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