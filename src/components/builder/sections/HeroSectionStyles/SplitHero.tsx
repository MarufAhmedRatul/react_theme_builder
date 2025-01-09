import { EnhancedTextEditor } from "@/components/editor/EnhancedTextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function SplitHero({
  isEditing,
  styles,
  content,
  onContentChange,
  onStyleChange,
}) {
  return (
    <section className='w-full py-12 '>
      {isEditing ? (
        <div className='space-y-4'>
          <div className="border rounded-lg border-purple-300 p-2 ">            
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
            placeholder='Image URL'
            value={content.heroImage || ""}
            onChange={(e) => onContentChange("heroImage", e.target.value)}
          />

          <div className="border border-purple-300 rounded-lg p-2" >
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
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1
                  className='text-4xl font-bold mb-4'
                  style={styles.heroTitle || {}}
                >
                  {content.heroTitle || "Revolutionize Health Care"}
                </h1>
                <div
                  className='text-xl mb-8 prose prose-slate max-w-none
            [&>ol]:list-decimal [&>ul]:list-disc [&>ul]:ml-8 [&>ol]:ml-8
        '
                  style={styles.heroSubtitle || {}}
                  dangerouslySetInnerHTML={{
                    __html:
                      content.heroSubtitle ||
                      " Streamline your projects, boost productivity, and achieve your goals faster than ever before.",
                  }}
                />
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
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
            <div className='flex items-center justify-center'>
              <img
                src={
                  content.heroImage
                    ? content.heroImage
                    : "https://via.placeholder.com/550"
                }
                alt='Hero'
                className='aspect-square w-full max-w-[550px] overflow-hidden rounded-xl object-cover object-center'
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SplitHero;
