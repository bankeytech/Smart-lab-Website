import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithubAlt, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const contactCards = [
  {
    title: "Email Us",
    desc: "For general inquiries and partnerships",
    value: "lab@email.com",
    type: "email",
    icon: MdEmail,
  },
  {
    title: "Visit Us",
    desc: "Come see our lab in person",
    value: "University Campus Engineering Building, Room 304",
    type: "location",
    icon: MdLocationOn,
  },
];

const socialLinks = [
  { label: "GitHub", icon: FaGithubAlt, href: "#" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { label: "Twitter", icon: FaTwitter, href: "#" },
];

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-20">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-center">
            Have questions about our projects, research, or how to get involved?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-20 text-center">
          
          {contactCards.map(({ title, desc, value, type, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center gap-2 bg-[#DAF1DE] text-[#163832] rounded-lg p-8 transition hover:shadow-lg hover:-translate-y-1"
            >
              <Icon className="bg-[#163832] text-[#DAF1DE] w-9 h-9 p-2 rounded-full mb-3" />
              
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm">{desc}</p>

              {type === "email" ? (
                <a
                  href={`mailto:${value}`}
                  className="text-sm font-medium hover:underline"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm font-medium">{value}</p>
              )}
            </div>
          ))}

          {/* Social Card */}
          <div className="flex flex-col items-center justify-center gap-2 bg-[#DAF1DE] text-[#163832] rounded-lg p-8 transition hover:shadow-lg hover:-translate-y-1">
            <FaGithub className="bg-[#163832] text-[#DAF1DE] w-9 h-9 p-2 rounded-full mb-3" />
            
            <h3 className="font-bold text-lg">Follow Us</h3>
            <p className="text-sm">Check out our open source code</p>

            <div className="flex space-x-5 mt-4 text-lg">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-[#051F20] transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
