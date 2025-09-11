
import React, { useState, useCallback, useMemo } from 'react';
import { EditedImageResult } from './types';
import { editImageWithPrompt } from './services/geminiService';
import ImageUploader from './components/ImageUploader';
import Loader from './components/Loader';
import { SparklesIcon, ResetIcon } from './components/icons';

const App: React.FC = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [editedResult, setEditedResult] = useState<EditedImageResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const originalImageUrl = useMemo(() => {
    return originalFile ? URL.createObjectURL(originalFile) : null;
  }, [originalFile]);

  const handleFileSelect = (file: File) => {
    setOriginalFile(file);
    setEditedResult(null);
    setError(null);
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = useCallback(async () => {
    if (!originalFile || !prompt.trim()) {
      setError("Please select an image and enter a prompt.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedResult(null);

    try {
      const base64Data = await convertFileToBase64(originalFile);
      const result = await editImageWithPrompt(base64Data, originalFile.type, prompt);
      setEditedResult(result);
    } catch (e: unknown) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [originalFile, prompt]);

  const handleReset = () => {
    setOriginalFile(null);
    setPrompt('');
    setEditedResult(null);
    setError(null);
    setIsLoading(false);
  };
  
  const renderEditor = () => (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
      {/* Control Panel */}
      <div className="flex flex-col space-y-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div>
          <h2 className="text-xl font-semibold text-gray-300 mb-3">Your Image</h2>
          {originalImageUrl && (
            <img src={originalImageUrl} alt="Original" className="w-full rounded-lg object-contain max-h-80" />
          )}
        </div>
        <div>
          <label htmlFor="prompt" className="block text-xl font-semibold text-gray-300 mb-3">
            What do you want to change?
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 'add a birthday hat on the cat'"
            className="w-full h-28 p-3 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-colors"
            rows={3}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
          <button
            onClick={handleSubmit}
            disabled={isLoading || !prompt.trim()}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
          >
            <SparklesIcon className="w-5 h-5 mr-2" />
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
          <button
            onClick={handleReset}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-base font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <ResetIcon className="w-5 h-5 mr-2" />
            Start Over
          </button>
        </div>
      </div>

      {/* Result Panel */}
      <div className="flex items-center justify-center bg-gray-800 p-6 rounded-2xl shadow-lg min-h-[300px] md:min-h-0">
        {isLoading && <Loader />}
        {error && <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg"><h3 className="font-bold">An Error Occurred</h3><p>{error}</p></div>}
        {!isLoading && !error && editedResult?.imageUrl && (
            <div className="w-full flex flex-col items-center gap-4">
                 <h2 className="text-xl font-semibold text-gray-300">AI Edited Image</h2>
                <img src={editedResult.imageUrl} alt="Edited" className="w-full rounded-lg object-contain max-h-[70vh]" />
                {editedResult.text && <p className="text-center text-gray-400 italic p-3 bg-gray-700/50 rounded-md">AI says: "{editedResult.text}"</p>}
            </div>
        )}
        {!isLoading && !error && !editedResult && (
            <div className="text-center text-gray-500">
                <SparklesIcon className="w-24 h-24 mx-auto opacity-10"/>
                <p className="mt-4 text-lg">Your edited image will appear here.</p>
            </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <header className="text-center my-6 md:my-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Sharif AI Photo Editor
        </h1>
        <p className="text-lg text-gray-400 mt-2">Powered by m 'Coder Sharif'</p>
      </header>
      <main className="w-full flex-grow flex items-center justify-center">
        {!originalFile ? <ImageUploader onFileSelect={handleFileSelect} /> : renderEditor()}
      </main>
    </div>
  );
};

export default App;
