export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
            <div className="max-w-4xl mx-auto px-6 py-16">

                {/* Heading */}
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Privacy Policy
                </h1>

                <p className="text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Welcome to SkyCode. Your privacy is important to us. This Privacy Policy
                        explains how we collect, use, and protect your information when you use
                        our online code editor and related services.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>• Account information (name, email) via authentication services</li>
                        <li>• Code snippets and content you create</li>
                        <li>• Usage data to improve performance and features</li>
                        <li>• Technical information such as browser and device type</li>
                    </ul>
                </section>

                {/* How We Use Information */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>• To provide and maintain the SkyCode service</li>
                        <li>• To store and manage your code snippets</li>
                        <li>• To improve functionality and user experience</li>
                        <li>• To ensure security and prevent misuse</li>
                    </ul>
                </section>

                {/* Data Security */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
                    <p className="text-gray-400 leading-relaxed">
                        We implement appropriate security measures to protect your data.
                        However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                {/* Third-party services */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
                    <p className="text-gray-400 leading-relaxed">
                        SkyCode uses trusted third-party services such as Clerk for authentication
                        and Convex for data storage. These services have their own privacy policies.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>• You can access your data anytime</li>
                        <li>• You can delete your snippets</li>
                        <li>• You can stop using the service at any time</li>
                    </ul>
                </section>

                {/* Contact */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                    <p className="text-gray-400">
                        If you have any questions, contact us at:{" "}
                        <span className="text-blue-400">suman13kayal@gmail.com</span>
                    </p>
                </section>

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
