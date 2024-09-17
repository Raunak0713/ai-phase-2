import React, { useEffect, useRef } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS
import ReactQuill from 'react-quill';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getEditor().setText(aiOutput); // Use Quill's method to set content
    }
  }, [aiOutput]);

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button
          className='flex gap-2'
          onClick={() => navigator.clipboard.writeText(aiOutput)}
        >
          <Copy className='w-4 h-4' /> Copy
        </Button>
      </div>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={aiOutput}
        readOnly={true}
        modules={{
          toolbar: false, // Disable toolbar for read-only editor
        }}
        style={{ height: '600px' }}
      />
    </div>
  );
}

export default OutputSection;
