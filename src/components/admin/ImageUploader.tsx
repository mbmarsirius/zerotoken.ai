import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { downloadAndStoreImage } from "@/utils/imageUpload";

export const ImageUploader = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadBrandAssets = async () => {
    setIsUploading(true);
    
    try {
      // Upload the ZeroToken logo with text
      await downloadAndStoreImage(
        '/lovable-uploads/27039274-4d2a-4aaa-9533-74934395a859.png',
        'zerotoken-logo-official.png'
      );
      
      // Upload the ZeroToken icon
      await downloadAndStoreImage(
        '/lovable-uploads/5d3729a6-e5a5-4bce-9e55-dcf711346275.png',
        'zerotoken-icon-official.png'
      );
      
      toast.success("Brand assets uploaded successfully to Supabase storage!");
      
      // Refresh the page to use new assets
      window.location.reload();
      
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error("Failed to upload brand assets. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={uploadBrandAssets}
        disabled={isUploading}
        variant="lime-pill"
      >
        {isUploading ? "Uploading..." : "Upload Brand Assets"}
      </Button>
    </div>
  );
};