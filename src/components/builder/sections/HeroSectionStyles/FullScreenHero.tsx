import { EnhancedTextEditor } from "@/components/editor/EnhancedTextEditor";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";

const FullScreenHero = ({
  isEditing,
  styles,
  content,
  onContentChange,
  onStyleChange,
}) => {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: content.heroBackground
      ? `url(${content.heroBackground})`
      : 'url("/placeholder.svg?height=1080&width=1920")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div>
      {isEditing ? (
        <div className='space-y-4'>
          <div className="border border-purple-300 rounded-lg p-2">
            <EnhancedTextEditor
              styles={styles}
              componentName='heroTitle'
              value={content.heroTitle}
              fontSize={
                styles.heroTitle?.fontSize
                  ? parseInt(styles.heroTitle.fontSize, 10)
                    ? parseInt(styles.heroTitle.fontSize, 10)
                    : 36
                  : 36
              }
              placeholder='Title here'
              onChange={(value) => onContentChange("heroTitle", value)}
              onStyleChange={(style) => onStyleChange("heroTitle", style)}
            />
          </div>
          <div className="border border-purple-300 rounded-lg p-2">
            <EnhancedTextEditor
              styles={styles}
              componentName='heroSubtitle'
              value={content.heroSubtitle}
              onChange={(value) => onContentChange("heroSubtitle", value)}
              onStyleChange={(style) => onStyleChange("heroSubtitle", style)}
              placeholder='Subtitle here'
              fontSize={
                styles.heroSubtitle?.fontSize
                  ? parseInt(styles.heroSubtitle.fontSize, 10)
                    ? parseInt(styles.heroSubtitle.fontSize, 10)
                    : 20
                  : 20
              }
              multiline
            />
          </div>
          <Input
            type='url'
            placeholder='Background Image URL'
            value={content.heroBackground || ""}
            onChange={(e) => onContentChange("heroBackground", e.target.value)}
          />
          <div className="border border-purple-300 rounded-lg p-2">
          <Input
          className="mb-2"
            type='url'
            placeholder='Button URL'
            value={content.heroButtonUrl || ""}
            onChange={(e) => onContentChange("heroButtonUrl", e.target.value)}
          />
            <EnhancedTextEditor
              styles={styles}
              componentName='heroButtonText'
              value={content.heroButtonText}
              placeholder='Button Text'
              fontSize={
                styles.heroButtonText?.fontSize
                  ? parseInt(styles.heroButtonText.fontSize, 10)
                    ? parseInt(styles.heroButtonText.fontSize, 10)
                    : 16
                  : 16
              }
              onChange={(value) => onContentChange("heroButtonText", value)}
              onStyleChange={(style) => onStyleChange("heroButtonText", style)}
              onShadCNPropChange={(prop) =>
                onStyleChange("heroButtonTextShadCN", prop)
              }
            />
          </div>
        </div>
      ) : (
        <div className='relative h-screen w-full' style={backgroundImageStyle}>
          <div className='absolute inset-0 bg-black bg-opacity-50' />
          <div className='relative z-10 flex h-full items-center justify-start p-8 sm:p-12 md:p-16 lg:p-24'>
            <div className='text-left max-w-2xl'>
              <h1
                className='text-4xl font-bold mb-4 text-white'
                style={styles.heroTitle || {}}
              >
                {content.heroTitle || " Welcome to Our Website"}
              </h1>
              <div
                className='text-xl text-white mb-8 prose prose-slate max-w-none
            [&>ol]:list-decimal [&>ul]:list-disc [&>ul]:ml-8 [&>ol]:ml-8
        '
                style={styles.heroSubtitle || {}}
                dangerouslySetInnerHTML={{
                  __html:
                    content.heroSubtitle || " Discover Amazing thing with us",
                }}
              />
              <a href={content.heroButtonUrl || "#"}>
                <Button
                  {...styles.heroButtonTextShadCN}
                  style={styles.heroButtonText || {}}
                >
                  {content.heroButtonText || "Lets Go 🚀"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenHero;
