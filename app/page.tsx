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
              Overtake, Overwhelm, Under-Sea
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mass Production Attritable AUVs at a Fraction of the Cost
            </h1>
            <p className="text-xl mb-8 text-[#48cae4]">
              Morpho builds modular, shallow-water autonomous underwater vehicles using Large Format Additive Manufacturing — delivering full-scale AUV platforms for under $3,500.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm font-semibold text-[#00b4d8]">
              <span className="border border-[#00b4d8] px-3 py-1 rounded-full">LFAM Manufactured</span>
              <span className="border border-[#00b4d8] px-3 py-1 rounded-full">Fully Modular</span>
              <span className="border border-[#00b4d8] px-3 py-1 rounded-full">Attritable by Design</span>
              <span className="border border-[#00b4d8] px-3 py-1 rounded-full">Tool-less Production</span>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">The Cost Advantage</h2>
          <p className="text-center text-[#475569] mb-12 text-lg">Current AUVs are designed for perfection, not scale — resulting in platforms that are too expensive, too slow to iterate, and too maintenance-intensive.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#00b4d8] mb-4">&lt;$3,500</div>
              <h3 className="text-xl font-semibold mb-2">Our Prototype Cost</h3>
              <p className="text-[#475569]">Full-scale AUV (~6ft long, ~6in diameter) designed, built, and successfully launched</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#0a1628] mb-4">$100k–$2M</div>
              <h3 className="text-xl font-semibold mb-2">Industry Standard</h3>
              <p className="text-[#475569]">Existing AUV systems designed for perfection, not attritable scale deployment</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#00b4d8] mb-4">8.4% CAGR</div>
              <h3 className="text-xl font-semibold mb-2">Market Growth</h3>
              <p className="text-[#475569]">US AUV market projected to grow from $677M to over $1B by 2030</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-6 md:px-12 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Built on LFAM</h2>
          <p className="text-lg mb-10 text-[#475569] text-center">
            Leveraging Large Format Additive Manufacturing (LFAM), Morpho achieves capabilities no traditional AUV manufacturer can match.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#00b4d8] text-2xl">✓</span>
              <div>
                <strong className="block">Rapid Design Iteration</strong>
                <span className="text-[#475569]">Iterate on designs in days, not weeks or months</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00b4d8] text-2xl">✓</span>
              <div>
                <strong className="block">Tool-Less Production</strong>
                <span className="text-[#475569]">No molds or tooling required — dramatically reducing manufacturing overhead</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00b4d8] text-2xl">✓</span>
              <div>
                <strong className="block">Modular / Adaptable Architecture</strong>
                <span className="text-[#475569]">Completely modular platform tailored to specific mission payloads and requirements</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00b4d8] text-2xl">✓</span>
              <div>
                <strong className="block">Low-Cost / High-Strength Pressure Vessels</strong>
                <span className="text-[#475569]">Validated structural integrity up to 2 bar (10m depth) with a path to 7 bar (60m)</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00b4d8] text-2xl">✓</span>
              <div>
                <strong className="block">Small Manufacturing Footprint</strong>
                <span className="text-[#475569]">Producible in a small facility — enabling distributed, forward-deployed manufacturing</span>
              </div>
            </li>
          </ul>
          <div className="mt-10 p-6 bg-white rounded-lg border-l-4 border-[#00b4d8]">
            <p className="text-[#475569]"><strong className="text-[#0a1628]">Patent Pending:</strong> A patent disclosure covering Morpho's design and manufacturing approach has been submitted to Purdue University's Office of Technology Commercialization.</p>
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
              <p className="text-[#475569]">Deploy multiple attritable units for coordinated reconnaissance and area coverage at a cost that makes massed deployment viable</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">ISR Missions</h3>
              <p className="text-[#475569]">Intelligence, surveillance, and reconnaissance in high-risk littoral zones where vehicle loss is an acceptable operational tradeoff</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Mine Countermeasures</h3>
              <p className="text-[#475569]">Cost-effective platforms for detecting and mapping underwater threats in shallow coastal waters</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Coastal Defense</h3>
              <p className="text-[#475569]">Persistent shallow-water patrol and monitoring to secure ports, harbors, and critical maritime infrastructure</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Training & Testing</h3>
              <p className="text-[#475569]">Affordable target and test platforms for live exercises — expendable by design</p>
            </div>
            <div className="p-6 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <h3 className="text-xl font-semibold mb-3">Custom Missions</h3>
              <p className="text-[#475569]">Modular payload architecture supports tailored configurations for unique operational requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Revenue Model</h2>
          <p className="text-center text-[#475569] mb-12 text-lg">A phased strategy from government-funded R&D to direct platform sales.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <div className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-2">Near-Term</div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-4">R&D Contracts & Grants</h3>
              <p className="text-[#475569]">SBIR/STTR programs through DoD, DARPA, and ONR — and CRADA demonstrations with Navy labs — fund continued development and validate the platform in defense-relevant use cases.</p>
            </div>
            <div className="p-8 border-2 border-[#f1f5f9] rounded-lg hover:border-[#00b4d8] transition">
              <div className="text-[#00b4d8] font-bold text-sm uppercase tracking-wide mb-2">Long-Term</div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-4">Vehicle Sales</h3>
              <p className="text-[#475569]">Direct platform sales to defense and commercial customers. Modular architecture enables mission-specific configuration at production scale without retooling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 md:px-12 bg-[#f1f5f9]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg mb-12 text-[#475569]">
            Founded at <strong>Purdue University</strong> by engineers and operators who believe attritable autonomous systems will define the next era of maritime defense.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#0a1628] mb-1">Caden Jarausch</h3>
              <p className="text-[#00b4d8] font-semibold text-sm mb-4">Founder & CEO</p>
              <p className="text-[#475569] text-sm">M.S. Mechanical Engineering, Purdue University (2026). Systems architect leading company vision, technical development, and the transition from prototype to production.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#0a1628] mb-1">Matthew Imm</h3>
              <p className="text-[#00b4d8] font-semibold text-sm mb-4">Founding Engineer</p>
              <p className="text-[#475569] text-sm">Supports engineering development across mechanical design, prototyping, and system integration.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#0a1628] mb-1">John Hanish</h3>
              <p className="text-[#00b4d8] font-semibold text-sm mb-4">Head of Business Development</p>
              <p className="text-[#475569] text-sm">Leads capital strategy and strategic partnerships. Drives investor engagement, grant acquisition, and defense relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-12 text-[#48cae4]">
            We are seeking partners in the defense and maritime sectors to identify high-value applications for cost-effective, attritable AUV platforms.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] text-[#475569] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Morpho Technologies. All rights reserved.</p>
          <p className="mt-2 text-sm">Overtake, Overwhelm, Under-Sea</p>
        </div>
      </footer>
    </main>
  );
}
