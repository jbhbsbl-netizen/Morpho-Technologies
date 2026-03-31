import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-[#0a1628] text-white py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Image src="/logo.svg" alt="Morpho Technologies" width={180} height={54} priority />
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#00b4d8] transition">About</a>
            <a href="#technology" className="hover:text-[#00b4d8] transition">Technology</a>
            <a href="#applications" className="hover:text-[#00b4d8] transition">Applications</a>
            <a href="#team" className="hover:text-[#00b4d8] transition">Team</a>
            <a href="#contact" className="hover:text-[#00b4d8] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0a1628] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#48cae4] italic mb-3 text-lg">
              Dive to new depths, rise to the occasion
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Attritable Composite AUVs at 10-100x Lower Cost
            </h1>
            <p className="text-xl mb-8 text-[#48cae4]">
              We customize attritable, shallow-water, composite-based autonomous underwater vehicles for defense and maritime operations.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-[#00b4d8] text-[#0a1628] px-8 py-3 rounded-lg font-semibold hover:bg-[#48cae4] transition">
                Get in Touch
              </a>
              <a href="#about" className="border-2 border-[#00b4d8] px-8 py-3 rounded-lg font-semibold hover:bg-[#00b4d8] hover:text-[#0a1628] transition">
                Learn More
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/auv-water.png"
              alt="Morpho AUV in water"
              width={600}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Cost Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#00b4d8] mb-4">$3,500</div>
              <h3 className="text-xl font-semibold mb-2">Our Proof of Concept</h3>
              <p className="text-[#475569]">Functional composite-based AUV built and tested</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#0a1628] mb-4">$50k-$500k+</div>
              <h3 className="text-xl font-semibold mb-2">Industry Standard</h3>
              <p className="text-[#475569]">Existing AUV systems cost 10-100x more</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#00b4d8] mb-4">10-100x</div>
              <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
              <p className="text-[#475569]">Making attritable operations economically viable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-6 md:px-12 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Composite-Based Design</h2>
            <p className="text-lg mb-6 text-[#475569]">
              Our modular, composite-based AUVs are designed for shallow-water operations where cost-effectiveness and mission flexibility are critical.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] text-2xl">✓</span>
                <div>
                  <strong className="block">Attritable Platform</strong>
                  <span className="text-[#475569]">Affordable enough to risk in contested environments</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] text-2xl">✓</span>
                <div>
                  <strong className="block">Shallow-Water Optimized</strong>
                  <span className="text-[#475569]">Purpose-built for littoral zone operations</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] text-2xl">✓</span>
                <div>
                  <strong className="block">Customizable</strong>
                  <span className="text-[#475569]">Tailored to specific mission requirements</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Defense Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Swarm Operations</h3>
              <p className="text-[#475569]">Deploy multiple units for coordinated reconnaissance and area coverage</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">ISR Missions</h3>
              <p className="text-[#475569]">Intelligence, surveillance, and reconnaissance in high-risk zones</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Mine Countermeasures</h3>
              <p className="text-[#475569]">Cost-effective platforms for detecting and mapping underwater threats</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Coastal Defense</h3>
              <p className="text-[#475569]">Shallow-water patrol and monitoring operations</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Training & Testing</h3>
              <p className="text-[#475569]">Affordable targets and test platforms for exercises</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Custom Missions</h3>
              <p className="text-[#475569]">Tailored solutions for specific operational requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 md:px-12 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
          <p className="text-lg mb-8 text-[#475569]">
            Founded by three students at <strong>Purdue University</strong> with expertise in engineering and business, Morpho Technologies demonstrates that radical cost reduction in defense tech is achievable through innovative materials and design.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <p className="text-2xl font-semibold text-[#0a1628] mb-2">Purdue University</p>
            <p className="text-[#475569]">2 Engineering Students • 1 Business Student</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-12 text-[#48cae4]">
            We're seeking partners in the defense and maritime sectors to identify high-value applications for cost-effective, attritable AUV platforms.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] text-[#475569] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Morpho Technologies. All rights reserved.</p>
          <p className="mt-2 text-sm">Attritable Composite AUVs for Defense Applications</p>
        </div>
      </footer>
    </main>
  );
}
