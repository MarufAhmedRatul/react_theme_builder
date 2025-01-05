import { EnhancedTextEditor } from '../../editor/EnhancedTextEditor';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="bg-white p-8" style={styles.background || {}}>
      {isEditing ? (
        <div className="space-y-4">
          <EnhancedTextEditor
            styles={styles}
            componentName='heroTitle'
            value={content.heroTitle }
            placeholder="Title here"
            onChange={(value) => onContentChange('heroTitle', value)}
            onStyleChange={(style) => onStyleChange('heroTitle', style)}
          />
          <EnhancedTextEditor
          styles={styles}
          componentName='heroSubtitle'
            value={content.heroSubtitle}
            onChange={(value) => onContentChange('heroSubtitle', value)}
            onStyleChange={(style) => onStyleChange('heroSubtitle', style)}
            placeholder='Subtitle here'
            multiline
          />
          <Input
            type="url"
            placeholder="Background Image URL"
            value={content.heroBackground || ''}
            onChange={(e) => onContentChange('heroBackground', e.target.value)}
          />
          <Input
            type="url"
            placeholder="Button URL"
            value={content.heroButtonUrl || ''}
            onChange={(e) => onContentChange('heroButtonUrl', e.target.value)}
          />
          <EnhancedTextEditor
            value={content.heroButtonText || 'Learn More'}
            onChange={(value) => onContentChange('heroButtonText', value)}
            onStyleChange={(style) => onStyleChange('heroButtonText', style)}
          />
        </div>
      ) : (
        <div
          className="min-h-[400px] flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: content.heroBackground ? `url(${content.heroBackground})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...styles.background
          }}
        >
          <h1 className="text-4xl font-bold mb-4" style={styles.heroTitle || {}}>
            {content.heroTitle || 'Welcome'}
          </h1>
          <p className="text-xl mb-8" style={styles.heroSubtitle || {}}>
            {content.heroSubtitle || 'Subtitle here'}
          </p>
          <a href={content.heroButtonUrl || '#'}>
            <Button  style={styles.heroButtonText || {}}>
              {content.heroButtonText || 'Learn More'}
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};