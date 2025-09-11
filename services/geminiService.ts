
import { GoogleGenAI, Modality } from "@google/genai";
import { EditedImageResult } from '../types';

const fileToGenerativePart = (base64Data: string, mimeType: string) => {
  return {
    inlineData: {
      data: base64Data,
      mimeType,
    },
  };
};

export const editImageWithPrompt = async (
  base64Data: string,
  mimeType: string,
  prompt: string
): Promise<EditedImageResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const imagePart = fileToGenerativePart(base64Data, mimeType);
  const textPart = { text: prompt };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [imagePart, textPart],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const result: EditedImageResult = {
      imageUrl: null,
      text: null,
    };

    if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.text) {
                result.text = part.text;
            } else if (part.inlineData) {
                const base64ImageBytes: string = part.inlineData.data;
                result.imageUrl = `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
            }
        }
    }
    
    if (!result.imageUrl) {
        throw new Error("The AI did not return an image. It might have refused the request. Please try a different prompt.");
    }

    return result;

  } catch (error) {
    console.error("Error editing image with Gemini:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to edit image: ${error.message}`);
    }
    throw new Error("An unknown error occurred while editing the image.");
  }
};
