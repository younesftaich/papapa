import React from 'react';
import Nav from './nav'
import Foot from './foot'
import Head from 'next/head'

const disclaimers = () => {
    return (
     
        <div>
             <Head>
        <title>COPYRIGHT POLICY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
               <Nav />
               <main>
  <div className="nf-container p-8">
    <div className="py-12">
      <h1 className="text-center text-3xl font-semibold mb-3">COPYRIGHT POLICY</h1>
    </div>
    <div className="leading-8 pb-12">
      <h3><strong>NOTIFICATION OF INFRINGEMENT</strong></h3>
      <span className="text-sm">LuxuryTV takes copyright and other intellectual property rights very seriously. It is LuxuryTV’s policy to (1) expeditiously block access to or remove content that it believes in good faith may contain material that infringes the copyrights of third parties and (2) remove and discontinue service to repeat offenders.</span>
      <span className="text-sm">LuxuryTV has adopted the following policy concerning copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. 512. The DMCA provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law.</span>
      <span className="text-sm">Procedure for Reporting Copyright Infringements: If you believe in good faith that any content residing on or accessible through LuxuryTV’s website or the LuxuryTV service infringes your copyrights, you may send us a notice requesting that the material be removed, or that access to it be blocked. The notice must include the following information (consult legal counsel or refer to 17 U.S.C. 512(c) to confirm these requirements): </span>
      <ul className="text-sm">
        <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed.</li>
        <li>Identification of the copyrighted works claimed to have been infringed on LuxuryTV’s website or the LuxuryTV service, or if multiple copyrighted works are covered by a single notification, a representative list of such works.</li>
        <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit LuxuryTV to locate the material.</li>
        <li>Contact information for the notifier, such as an address, telephone number and, if available, an e-mail address.</li>
        <li>A statement that the notifier has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the notifying party is authorized to act on behalf of the owner of the copyright that is allegedly infringed.</li>
        <span className="text-sm">Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.</span>
        <span className="text-sm">copyright.Please_note_2</span>
      </ul>
      <h3><strong>COUNTER-NOTIFICATION</strong></h3>
      <span className="text-sm">If you elect to send us a counter notice, to be effective it must be a written communication that includes the following (please consult your legal counsel or See 17 U.S.C. Section 512(g)(3) to confirm these requirements):</span>
      <ul className="text-sm">
        <li>A physical or electronic signature of the subscriber.</li>
        <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled.</li>
        <li>A statement under penalty of perjury that the subscriber has a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.</li>
        <li>The subscriber&quot;s name, address, and telephone number, and a statement that the subscriber consents to the jurisdiction of Federal District Court for the judicial district in which the address is located, or if the subscriber&quot;s address is outside of the United States, for any judicial district in which LuxuryTV may be found, and that the subscriber will accept service of process from the person who provided notification under subsection (c)(1)(C) or an agent of such person.</li>
      </ul>
      <h3><strong> DESIGNATED COPYRIGHT AGENT</strong></h3>
      <span className="text-sm">All notifications of claimed infringement with respect to LuxuryTV’s website or the LuxuryTV service should be sent to: <a className="text-blue-500 underline" href="mailto:fastiptvshop@gmail.com">fastiptvshop@gmail.com</a></span>
      <span className="text-sm">For clarity, only DMCA notices should go to the LuxuryTV Designated Copyright Agent. Any other feedback, comments, requests for technical support or other communications should be directed to LuxuryTV customer service through the LuxuryTV Contact Center. You acknowledge that if you fail to comply with all of the requirements of this section, your DMCA notice may not be valid.</span>
    </div>
  </div>
</main>
<Foot />
        </div>
    );
};

export default disclaimers;