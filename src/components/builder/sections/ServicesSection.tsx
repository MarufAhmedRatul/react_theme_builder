import { EnhancedTextEditor } from '../../editor/EnhancedTextEditor';
import { TipTapEditor } from '../../editor/TipTapEditor';
import { Input } from "@/components/ui/input";

interface ServicesSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: string) => void;
  onStyleChange: (key: string, value: any) => void;
}

export const ServicesSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: ServicesSectionProps) => {
  return (
    <div className="bg-white p-8" style={styles.background || {}}>
      {isEditing ? (
        <div className="space-y-4">
          <EnhancedTextEditor
            value={content.servicesTitle || 'Our Services'}
            onChange={(value) => onContentChange('servicesTitle', value)}
            onStyleChange={(style) => onStyleChange('servicesTitle', style)}
          />
          {[1, 2, 3].map((index) => (
            <div key={index} className="space-y-2">
              <EnhancedTextEditor
                value={content[`serviceTitle${index}`] || `Service ${index}`}
                onChange={(value) => onContentChange(`serviceTitle${index}`, value)}
                onStyleChange={(style) => onStyleChange(`serviceTitle${index}`, style)}
              />
              <TipTapEditor
                value={content[`serviceDescription${index}`] || `Description ${index}`}
                onChange={(value) => onContentChange(`serviceDescription${index}`, value)}
              />
              <Input
                type="url"
                placeholder="Service URL"
                value={content[`serviceUrl${index}`] || ''}
                onChange={(e) => onContentChange(`serviceUrl${index}`, e.target.value)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center" style={styles.servicesTitle || {}}>
            {content.servicesTitle || 'Our Services'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <a
                key={index}
                href={content[`serviceUrl${index}`] || '#'}
                className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4" style={styles[`serviceTitle${index}`] || {}}>
                  {content[`serviceTitle${index}`] || `Service ${index}`}
                </h3>
                <div 
                  className="prose prose-sm max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ 
                    __html: content[`serviceDescription${index}`] || `Description ${index}`
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};