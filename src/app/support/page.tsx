import Image from "next/image";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
            <div className="max-w-4xl mx-auto px-6 py-16">

                {/* Heading */}
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Support
                </h1>

                <p className="text-gray-400 mb-10">
                    Need help with SkyCode? We're here to help you with any questions,
                    issues, or feedback.
                </p>

                {/* Support Options */}
                <div className="space-y-6">

                    {/* Email Support */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">Dev Support</h2>
                        <p className="text-gray-400 mb-2">
                            Contact us directly via dev for any support requests.
                        </p>

                        <a
                            href="https://sumankayalportfolio.vercel.app/"
                            className="text-blue-400 hover:text-blue-300 font-medium"
                        >
                            https://sumankayalportfolio.vercel.app/
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">GitHub</h2>

                        <p className="text-gray-400 mb-2">
                            Report bugs, request features, or contribute to SkyCode.
                        </p>

                        <a
                            href="https://github.com/SUMANKAYALS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-medium"
                        >
                            github.com/SUMANKAYALS
                        </a>
                    </div>

                    {/* Developer Info */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex items-center gap-4">

                        <Image
                            src="/logo_two.png"
                            alt="Developer"
                            width={60}
                            height={60}
                            className="rounded-full border border-gray-700"
                        />

                        <div>
                            <h2 className="text-xl font-semibold">Developer</h2>

                            <p className="text-gray-400">
                                Built and maintained by{" "}
                                <span className="text-blue-400 font-medium">
                                    <a
                                        href="https://www.linkedin.com/in/suman-kayal10/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                    >
                                        Suman Kayal
                                    </a>
                                </span>
                            </p>
                        </div>

                    </div>

                    {/* FAQ */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">Common Issues</h2>

                        <ul className="text-gray-400 space-y-2">
                            <li>• Make sure you are logged in to save snippets</li>
                            <li>• Refresh the page if code execution fails</li>
                            <li>• Contact support if problems continue</li>
                        </ul>
                    </div>

                </div>

                {/* Footer */}
                <div className="border-t border-gray-800 pt-6 mt-10">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} SkyCode. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}
