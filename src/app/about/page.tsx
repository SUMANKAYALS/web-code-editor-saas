import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-16">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        About SkyCode
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        SkyCode is a modern online code editor designed for developers to write,
                        run, and share code efficiently. It provides a fast, secure, and intuitive
                        environment with multi-language support and powerful features.
                    </p>
                </div>

                {/* Mission */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>

                    <p className="text-gray-400 leading-relaxed">
                        Our goal is to empower developers with a seamless coding experience.
                        SkyCode helps developers practice coding, share snippets, and improve
                        productivity using modern cloud technologies.
                    </p>
                </div>

                {/* Developer Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6">

                    {/* Developer Image */}
                    <div className="relative w-32 h-32">
                        <Image
                            src="/logo_three.png"
                            alt="Developer"
                            fill
                            className="rounded-full object-cover border border-gray-700"
                        />
                    </div>

                    {/* Developer Info */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Developer</h2>

                        <p className="text-gray-400 leading-relaxed">
                            SkyCode was designed and developed by{" "}
                            <span className="text-blue-400 font-medium">
                                <a
                                    href="https://www.linkedin.com/in/suman-kayal10/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                >
                                    Suman Kayal
                                </a>
                            </span>, a passionate full-stack developer focused on building modern,
                            scalable, and developer-friendly applications using Next.js, Convex,
                            and cloud technologies.
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <div className="border-t border-gray-800 mt-12 pt-6">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} SkyCode. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}
