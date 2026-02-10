import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200">
          <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b-4 border-teal-500 pb-4">Terms & Conditions</h1>
          
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-600 mb-4">
              <strong>Effective Date:</strong> February 10, 2026 | <strong>Last Updated:</strong> February 10, 2026
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">1. Applicability</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>These Terms and Conditions ("Terms") apply to all use of the PolyMaterialBridge website (the "Site"), and all offerings, quotations, introductions, brokering services, and other interactions between PolyMaterialBridge ("we", "us", "our") and any visitor, user, client or business partner ("Client").</li>
                  <li>By accessing the Site, using our contact forms, emails, or engaging in any service provided by us, you agree to these Terms. If you do not agree, do not use the Site or our services. These Terms form part of any agreement you enter into with us.</li>
                  <li>We expressly exclude any terms or conditions proposed by the Client that conflict with these Terms unless we have agreed in writing.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">2. Definitions</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li><strong>"Brokerage Services"</strong> means introducing, sourcing, negotiating, and facilitating transactions between suppliers of polymer materials (such as PP and PE) and Buyers, without holding inventory or taking title to goods.</li>
                  <li><strong>"Order"</strong> refers to any request, purchase, contract or instruction for purchasing polymer materials facilitated through our services.</li>
                  <li><strong>"Goods"</strong> means PP (Polypropylene), PE (Polyethylene) and any other polymer materials specified in an Order.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">3. Offers and Orders</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>All offers and quotations provided by us are non-binding unless otherwise agreed in writing.</li>
                  <li>An Order becomes binding only when our written confirmation is issued, or when we begin performance of the services in accordance with the Order.</li>
                  <li>We do not guarantee availability of specific Goods. All introductions and quotations are subject to change, supply constraints, and acceptance by third-party suppliers.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">4. Prices and Payment</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>All prices for Goods and Brokerage Services are exclusive of VAT, duties, and other taxes, unless otherwise stated.</li>
                  <li>Payment terms are specified in the relevant Order or invoice. Unless otherwise agreed in writing, Clients must pay within 30 days of invoice date, conform article 6:262 Dutch Civil Code (BW).</li>
                  <li>If payment is not made on time, we may charge statutory interest and recover any costs reasonably incurred in collecting overdue amounts.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">5. Delivery, Risk and Title</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>We do not physically deliver Goods or hold inventory. Our role is limited to facilitating the transaction between the supplier and the Client.</li>
                  <li>Risk of loss or damage to Goods passes from the supplier to the Client in accordance with the delivery terms agreed between the supplier and Client.</li>
                  <li>Ownership of Goods transfers according to the agreement between the supplier and Client. PolyMaterialBridge is not a party to the transfer of title, unless set out in writing.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">6. Client Obligations</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>Clients must provide accurate, complete and timely information to enable us to properly facilitate Orders.</li>
                  <li>Clients acknowledge that we act solely as a broker; we are not a manufacturer, supplier, or seller of Goods and do not provide warranty on the quality, availability or condition of the Goods. Warranties, guarantees and conditions are provided by the supplier in accordance with their terms.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">7. Samples, Specifications and Descriptions</h2>
                <p className="ml-4">Samples, catalogues, drawings or specifications are indicative and are for guidance only. They do not form part of any warranty or agreement unless expressly stated in writing.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">8. Limitation of Liability</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>To the maximum extent permitted by law, PolyMaterialBridge's total liability under any claim arising out of or related to the Site, services, Orders or these Terms is limited to the fees paid by the Client to PolyMaterialBridge in connection with the transaction giving rise to the claim.</li>
                  <li>We are not liable for indirect, consequential, economic or business loss (including loss of profit, goodwill, opportunities), whether in contract, tort (including negligence), statutory duty, or otherwise.</li>
                  <li>Nothing in these Terms shall exclude liability for personal injury or death caused by our proven negligence or for other liability that cannot be lawfully excluded.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">9. Intellectual Property</h2>
                <p className="ml-4">All content on the Site (text, graphics, logos, icons) remains the property of PolyMaterialBridge. Standard usage rights are granted to view and interact with the Site; reproduction or distribution beyond that is prohibited unless agreed.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">10. Changes</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>We may update or change these Terms at any time by updating them on the Site. The updated Terms take effect from the date of posting.</li>
                  <li>Continued use of the Site or engagement of services following changes constitutes acceptance of the updated Terms.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">11. Governing Law and Dispute Resolution</h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>These Terms are governed by the laws of the Netherlands.</li>
                  <li>Any dispute arising out of or in connection with these Terms shall be resolved amicably where possible. Failing that, disputes shall be submitted to the competent court in Rotterdam, Netherlands.</li>
                </ol>
              </section>

              <section className="pt-12 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">12. Contact</h2>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <p className="font-semibold mb-2">Questions about these Terms?</p>
                  <p className="mb-2"><strong>PolyMaterialBridge</strong></p>
                  <p className="mb-2">Email: <a href="mailto:info@polymaterialbridge.com" className="text-teal-600 hover:underline">info@polymaterialbridge.com</a></p>
                  <p>Website: <a href="https://polymaterialbridge.com" className="text-teal-600 hover:underline">polymaterialbridge.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
