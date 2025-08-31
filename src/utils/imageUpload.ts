import { supabase } from "@/integrations/supabase/client";

export const downloadAndStoreImage = async (imageUrl: string, fileName: string, bucket: string = 'assets') => {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    
    const imageBlob = await response.blob();
    const file = new File([imageBlob], fileName, { type: imageBlob.type });
    
    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });
    
    if (error) {
      console.error('Upload error:', error);
      throw error;
    }
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);
    
    return { data, publicUrl };
  } catch (error) {
    console.error('Error downloading and storing image:', error);
    throw error;
  }
};

export const getStorageUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);
  
  return data.publicUrl;
};