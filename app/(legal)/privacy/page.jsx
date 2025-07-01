import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

export default function page() {
  return (
    <>
      <div style={{ lineHeight: 1 }} className="bg-primary relative h-fit ">
        <Nav />

        <div className="pt-[10vh] px-4 text-black md:px-8 flex flex-col gap-[2vh] mb-20">
          <p className="font-bold">Last updated: June 21, 2025</p>
          <h1 className="text-[6vw]  md:text-[3vw] md:w-4/5 font-bold">
            At Évelle, we value your privacy and are committed to protecting
            your personal information. This privacy notice outlines how we
            collect, use, and safeguard your data when you interact with our
            website.
          </h1>
          <div className="flex flex-col gap-[2vh]  md:w-1/3">
            <p className=" text-[3vw] md:text-[1vw]">
              This policy is designed to inform visitors who are concerned about
              how their personally identifiable information (PII) is being used
              online. As defined in global privacy standards, PII refers to data
              that can be used on its own or with other data to identify,
              contact, or locate a person.
            </p>
            <p>
              Please review our policy carefully to understand how we manage and
              protect your personal information.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              What information do we collect?
            </h1>
            <p>
              When you interact with our site, you may be asked to enter your
              name, email address, or other details to enhance your experience
              or complete a request.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              How do we use your information?
            </h1>
            <p>We use the information we collect in the following ways:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                To personalise your experience and deliver content that is most
                relevant to you.
              </li>
              <li>To improve our website to better serve our visitors.</li>
            </ul>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              How do we protect your information?
            </h1>
            <p>
              Your personal information is stored on secure servers and only
              accessible by authorised individuals. We implement appropriate
              technical and organisational measures to maintain the security of
              your data. While we take security seriously, we do not currently
              use Malware Scanning tools.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              Cookies
            </h1>
            <p>
              Yes, we use cookies. These are small files transferred to your
              computer via your web browser that allow us to recognise your
              browser and store certain information.
            </p>
            <p>We use cookies to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Understand and save your preferences for future visits.</li>
              <li>
                Compile aggregate data about site traffic and interactions.
              </li>
              <li>Improve our site functionality and user experience.</li>
            </ul>
            <p>
              You can choose to have your browser warn you before a cookie is
              set, or disable cookies altogether. Disabling cookies may impact
              the functionality of some parts of our site.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              Third-party disclosure
            </h1>
            <p>
              We do not sell, trade, or otherwise transfer your PII to outside
              parties except to trusted partners who assist in operating our
              site, provided they agree to maintain confidentiality. We may also
              release information when required by law or to protect our rights
              or the rights of others.
            </p>
            <p>
              Non-personally identifiable visitor information may be shared for
              marketing or research purposes.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              Third-party links
            </h1>
            <p>
              We may include or offer third-party products or services. These
              sites have independent privacy policies, and we have no
              responsibility for their content or activities.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              Analytics & Tracking
            </h1>
            <p>
              We use Google Analytics (GA4) and Google Search Console to collect
              anonymised data about site usage and performance.
            </p>
            <p>
              We, along with third-party vendors such as Google, use first-party
              cookies (e.g., Google Analytics cookies) to collect data about
              user interactions on our website.
            </p>
            <p>
              You can set preferences via the Google Ad Settings page or opt out
              using the Google Analytics Opt-out Browser Add-on.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              Children's Privacy
            </h1>
            <p>
              We do not knowingly collect information from individuals under 18.
              If we learn that we have collected such information, we will
              delete it promptly.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              User rights
            </h1>
            <p>You may contact us to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access or update your personal data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent for any data use.</li>
            </ul>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              Policy Updates
            </h1>
            <p>
              Any changes to this privacy policy will be posted on this page. We
              encourage you to review this policy periodically.
            </p>

            <h1 className="   text-[5vw] md:text-[2vw] font-bold border-b border-black/10 pb-2 mt-[4vh]">
              Contacting Us
            </h1>
            <p>
              If you have any questions about this policy, please contact us:
            </p>
            <div className="mt-2 space-y-1">
              <p>www.evellehouse.com</p>
              <p>
                Évelle Studio
                <br />
                14 Rue du Vertbois
                <br />
                75003 Paris, France
              </p>
              <p>contact@evellehouse.com</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
