import { useState } from 'react';
import { TipTapEditor } from '../../editor/TipTapEditor';
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HeaderSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: string) => void;
  onStyleChange: (key: string, value: any) => void;
}

const headerStyles = [
  {
    id: 'classic',
    label: 'Classic',
    className: 'bg-white border-b',
    preview: 'Simple and clean header with logo and navigation'
  },
  {
    id: 'modern',
    label: 'Modern',
    className: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white',
    preview: 'Gradient background with modern styling'
  },
  {
    id: 'minimal',
    label: 'Minimal',
    className: 'bg-gray-50',
    preview: 'Minimalistic design with essential elements'
  },
  {
    id: 'dark',
    label: 'Dark',
    className: 'bg-gray-900 text-white',
    preview: 'Dark theme with contrasting elements'
  },
  {
    id: 'transparent',
    label: 'Transparent',
    className: 'bg-transparent backdrop-blur-sm',
    preview: 'Transparent background with blur effect'
  }
];

export const HeaderSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: HeaderSectionProps) => {
  const [showStylePicker, setShowStylePicker] = useState(!content.headerStyle);
  const currentStyle = content.headerStyle || 'classic';
  const headerStyle = headerStyles.find(style => style.id === currentStyle) || headerStyles[0];

  const handleStyleSelect = (styleId: string) => {
    onContentChange('headerStyle', styleId);
    setShowStylePicker(false);
  };

  return (
    <>
      <Dialog open={showStylePicker} onOpenChange={setShowStylePicker}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Choose Header Style</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 p-4">
            {headerStyles.map((style) => (
              <button
                key={style.id}
                className={`p-4 border rounded-lg hover:border-primary transition-colors ${
                  currentStyle === style.id ? 'border-primary' : 'border-gray-200'
                }`}
                onClick={() => handleStyleSelect(style.id)}
              >
                <div className={`h-20 rounded-md mb-2 ${style.className}`}>
                  <div className="flex justify-between items-center p-4">
                    <div className="font-bold">Logo</div>
                    <div className="flex gap-4">
                      <span>Menu</span>
                      <span>Menu</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold">{style.label}</h3>
                <p className="text-sm text-gray-500">{style.preview}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className={`p-6 ${headerStyle.className}`} style={styles.background || {}}>
        {isEditing && (
          <div className="mb-4 space-y-4">
            <Button
              variant="outline"
              onClick={() => setShowStylePicker(true)}
            >
              Change Header Style
            </Button>
          </div>
        )}
        <nav className="flex justify-between items-center">
          {isEditing ? (
            <TipTapEditor
              value={content.logo || 'Logo'}
              onChange={(value) => onContentChange('logo', value)}
            />
          ) : (
            <h1 
              className="text-xl font-bold"
              dangerouslySetInnerHTML={{ __html: content.logo || 'Logo' }}
            />
          )}
          <div className="flex gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((item, i) => (
              <div key={item}>
                {isEditing ? (
                  <div className="space-y-2">
                    <TipTapEditor
                      value={content[`menuItem${i}`] || item}
                      onChange={(value) => onContentChange(`menuItem${i}`, value)}
                    />
                    <Input
                      type="url"
                      placeholder="URL"
                      value={content[`menuUrl${i}`] || ''}
                      onChange={(e) => onContentChange(`menuUrl${i}`, e.target.value)}
                    />
                  </div>
                ) : (
                  <a
                    href={content[`menuUrl${i}`] || '#'}
                    className="hover:text-primary transition-colors"
                    dangerouslySetInnerHTML={{ 
                      __html: content[`menuItem${i}`] || item 
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};