import { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import * as Select from '@radix-ui/react-select';
import { EyeIcon, EyeOffIcon, FileTextIcon, DownloadIcon, ChevronLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import './CReDact.css'
import Switch from './Switch';
import Input from './Input';
import Radio from './Radio';
import Invite from './Invite';

// Custom Button component
function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Custom Textarea component
function Textarea({ value, onChange, className, ...props }) {
  return (
    <textarea
      className={`border p-2 w-full rounded border-black bg-white ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    ></textarea>
  );
}

// Custom Card component
function Card({ children, className, ...props }) {
  return (
    <div className={`border rounded-lg shadow-lg p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, className }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

function CardTitle({ children, className }) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export default function ReDactApp() {
  const [redactionLevel, setRedactionLevel] = useState(50);
  const [inputFormat, setInputFormat] = useState('text');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleRedact = () => {
    // Simulating redaction process
    setOutputText(
      `Redacted content (Level: ${redactionLevel}):\n${inputText.replace(/\w/g, 'X')}`
    );
  };

  const navigate = useNavigate();

  const home = () => {
    navigate('/home')
  }

  const invite =() =>{
    alert('This Feature is Still Under Developer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b text-black from-gray-100 to-gray-200 p-8">
        <Card className="max-w-4xl mx-auto">
           <ChevronLeftIcon className="h-6 w-6 text-black" onClick={home} />
            <CardHeader className="text-center text-black">
                <CardTitle>PARTH</CardTitle>
                <p className="text-muted-foreground">PARTH – Patient Assistant for Records, Treatment, and History

                </p>
            </CardHeader>
            <CardContent>
                <div className='flex justify-end my-5'>
                  <Invite onClick={invite}/>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Enter your medical conditions:</label>
                    <Textarea
                        placeholder="Enter your medical history and symptoms here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        rows={6}
                        className="w-full"
                    />
                </div>

                {/* <div className='my-10'>
                    <Input/>
                </div>
                <div className='mb-5'>
                    <Switch/>
                </div> */}
                
                {/* <div className="space-y-2">
                    <label className="text-sm font-medium">Redaction Level:</label>
                    <div className="flex items-center space-x-4">
                        <EyeIcon className="text-green-500" />

                        <input 
                            type="range"
                            value={redactionLevel}
                            onChange={(e) => setRedactionLevel(Number(e.target.value))}
                            max={100}
                            step={1}
                            className="flex-grow range range-sm" 
                            style={{'--range-shdw' : ' oklch(0.53 0.28 315.22)'}}/>

                        {/* <EyeOffIcon className="text-red-500" /> */}
                    {/* </div>
                    <p className="text-sm text-muted-foreground text-center">
                        Current Level: {redactionLevel}%
                    </p>
                </div> */}

                <Button onClick={handleRedact} className="w-full flex justify-center mt-5">
                    <FileTextIcon className="mr-2 h-4 w-4" /> SUBMIT
                </Button>

                <div className="space-y-2 mt-5">
                    <label className="text-sm font-medium">Generated Medical History: </label>
                    <Textarea value={outputText} readOnly rows={6} className="w-full" />
                </div>

                <Radio/>
            </CardContent>
        </Card>
    </div>
  );
}
