import { EnhancedTextEditor } from '../../editor/EnhancedTextEditor';
import { Input } from "@/components/ui/input";

interface FooterSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: string) => void;
  onStyleChange: (key: string, value: any) => void;
}

export const FooterSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: FooterSectionProps) => {
  return (
    <div className="bg-gray-800 text-white p-8" style={styles.background || {}}>
      {isEditing ? (
        <div className="space-y-4">
          <EnhancedTextEditor
            value={content.footerText || '© 2024 Your Company. All rights reserved.'}
            onChange={(value) => onContentChange('footerText', value)}
            onStyleChange={(style) => onStyleChange('footerText', style)}
          />
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="space-y-2">
              <EnhancedTextEditor
                value={content[`footerLink${index}`] || `Link ${index}`}
                onChange={(value) => onContentChange(`footerLink${index}`, value)}
                onStyleChange={(style) => onStyleChange(`footerLink${index}`, style)}
              />
              <Input
                type="url"
                placeholder="Link URL"
                value={content[`footerUrl${index}`] || ''}
                onChange={(e) => onContentChange(`footerUrl${index}`, e.target.value)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0" style={styles.footerText || {}}>
            {content.footerText || '© 2024 Your Company. All rights reserved.'}
          </p>
          <div className="flex gap-6">
            {[1, 2, 3, 4].map((index) => (
              <a
                key={index}
                href={content[`footerUrl${index}`] || '#'}
                className="hover:text-primary transition-colors"
                style={styles[`footerLink${index}`] || {}}
              >
                {content[`footerLink${index}`] || `Link ${index}`}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};