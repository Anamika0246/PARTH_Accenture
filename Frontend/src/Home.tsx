import React from 'react'
import { EyeOffIcon, ShieldIcon, ZapIcon, LockIcon } from "lucide-react"
import { useNavigate } from 'react-router-dom';

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

export default function Home() {

    const navigate = useNavigate();

    const redact = () => {
        navigate('/redact')
    }

    return (
        <div className="min-h-screen bg-gradient-to-b text-black from-gray-100 to-gray-200">
            <header className="p-6 bg-white shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        {/* <EyeOffIcon className="h-8 w-8 text-purple-500" /> */}
                        <span className="text-2xl font-bold text-purple-500">PARTH</span>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><h1 className="text-sm font-medium hover:text-purple-500">Features</h1></li>
                            <li><h1 className="text-sm font-medium hover:text-purple-500">Pricing</h1></li>
                            <li><h1 className="text-sm font-medium hover:text-purple-500">Contact</h1></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Effortless Medical Histories, Expert Referrals - Empowering Healthcare with PARTH : PARTH – Patient Assistant for Records, Treatment, and History</h1>
                    <p className="text-xl text-gray-600 mb-8">Smarter Healthcare, Faster Solutions</p>
                    <Button size="lg" className="mx-auto" onClick={redact}>Get Started</Button>
                </section>

                <section id="features" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <ShieldIcon className="h-6 w-6 " style={{color: '#be94f2'}} />
                                    <span>Smart Specialist Match</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Get personalized specialist recommendation based on your condition!</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <ZapIcon className="h-6 w-6 text-purple-500" />
                                    <span>Quick Data Collection</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Capture detailed medical histories in minutes with AI-powered dynamic questions!</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <LockIcon className="h-6 w-6 text-purple-500" />
                                    <span>Secure Data Storage</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Easily store and access records with seamless EHR integration!</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section id="pricing" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                            <Card key={plan}>
                                <CardHeader>
                                    <CardTitle>{plan}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold mb-4">{plan === 'Basic' ? 'Free' : plan === 'Pro' ? 'Rs 1129' : 'Custom'}</p>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>{plan === 'Basic' ? '1,000' : plan === 'Pro' ? '10,000' : 'Unlimited'} pages/month</li>
                                        {/* <li>{plan === 'Basic' ? 'Basic' : 'Advanced'} redaction features</li>
                                        <li>{plan !== 'Basic' && 'Priority support'}</li> */}
                                        {/* {plan === 'Enterprise' && <li>Custom integration</li>} */}
                                        <li>Yet To Be Decided</li>
                                        <li>Yet To Be Decided</li>
                                    </ul>
                                    <Button className="w-full" variant={plan === 'Pro' ? 'default' : 'outline'}>
                                        Choose Plan
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="contact" className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Data?</h2>
                    <p className="text-xl text-gray-600 mb-8">Get in touch with our team for a personalized demo.</p>
                    <Button size="lg">Contact Sales</Button>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 PARTH. All rights reserved.</p>
                    <div className="mt-4">
                        <p className="text-sm">Privacy Policy  |  Terms of Service</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}