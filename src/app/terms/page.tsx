export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
            <div className="max-w-4xl mx-auto px-6 py-16">

                {/* Heading */}
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Terms of Service
                </h1>

                <p className="text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                {/* Acceptance */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
                    <p className="text-gray-400 leading-relaxed">
                        By accessing and using SkyCode, you agree to comply with and be bound
                        by these Terms of Service. If you do not agree, please do not use the service.
                    </p>
                </section>

                {/* Service Description */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Service Description</h2>
                    <p className="text-gray-400 leading-relaxed">
                        SkyCode provides an online platform to write, execute, and share code snippets.
                        We reserve the right to modify or discontinue the service at any time.
                    </p>
                </section>

                {/* User Responsibilities */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">User Responsibilities</h2>

                    <ul className="text-gray-400 space-y-2">
                        <li>• You are responsible for your account and activity</li>
                        <li>• Do not upload malicious, illegal, or harmful code</li>
                        <li>• Do not attempt to abuse or exploit the system</li>
                        <li>• Respect other users and their content</li>
                    </ul>
                </section>

                {/* Account */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Account and Authentication</h2>

                    <p className="text-gray-400 leading-relaxed">
                        SkyCode uses secure third-party authentication services. You are responsible
                        for maintaining the security of your account.
                    </p>
                </section>

                {/* Content */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">User Content</h2>

                    <p className="text-gray-400 leading-relaxed">
                        You retain ownership of the code you create. However, by sharing snippets,
                        you grant SkyCode permission to display and store your content.
                    </p>
                </section>

                {/* Limitation */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>

                    <p className="text-gray-400 leading-relaxed">
                        SkyCode is provided "as is" without warranties. We are not responsible
                        for data loss, service interruptions, or damages resulting from usage.
                    </p>
                </section>

                {/* Termination */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Termination</h2>

                    <p className="text-gray-400 leading-relaxed">
                        We reserve the right to suspend or terminate access if users violate these terms.
                    </p>
                </section>

                {/* Changes */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Changes to Terms</h2>

                    <p className="text-gray-400 leading-relaxed">
                        These terms may be updated at any time. Continued use of SkyCode means
                        you accept the updated terms.
                    </p>
                </section>

                {/* Contact */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Contact</h2>

                    <p className="text-gray-400">
                        For questions about these Terms, contact us at{" "}
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
