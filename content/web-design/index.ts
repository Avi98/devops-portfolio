export default {
  color: {
    colorA: "#007cf0",
    colorB: "#00dfd8",
  },
  seo: {
    title: "Web Design",
    description:
      "Our website development services are tailored to deliver value for your business. We can provide everything from simple platform implementations to complete redesigns, bringing multiple teams together in order to build a solution that works best for you.",
    keywords:
      "web design, website design, website development, website designer, website development company, website design company, website design services, website development services, website design agency, website development agency, website design firm, website development firm, website design company near me, website development company near me, website design services near me, website development services near me, website design agency near me, website development agency near me, website design firm near me, website development firm near me",
  },

  hero: {
    buttonGroup: [
      {
        text: "Experience Matters",
        link: "#style-and-substance",
        style: "default" as any,
      },
      {
        text: "Style with Substance",
        link: "#testimonials",
        style: "web-design" as any,
      },
    ],
    description:
      "Our website development services are tailored to deliver value for your business. We can provide everything from simple platform implementations to complete redesigns, bringing multiple teams together in order to build a solution that works best for you.",
    image: "/content/wdhero.svg",
    subtitle: "Designer.",
    title: "Website",
    type: "web-design" as any,
  },

  summaryInfo: [
    {
      id: "web-design_summary-item--1",
      icon: "/icons/blue/code-window.svg",
      title: "Web Design",
      subtitle:
        "We build beautiful websites that are fast, secure, and easy to use. Our web design services include custom website design, website development, and website maintenance.",
    },
    {
      id: "web-design_summary-item--2",
      icon: "/icons/blue/cicd.svg",
      title: "E-Commerce",
      subtitle:
        "We build beautiful websites that are fast, secure, and easy to use. Our web design services include custom website design, website development, and website maintenance.",
    },
    {
      id: "web-design_summary-item--3",
      icon: "/icons/blue/status.svg",
      title: "Web Development",
      subtitle:
        "We build beautiful websites that are fast, secure, and easy to use. Our web design services include custom website design, website development, and website maintenance.",
    },
  ],

  contentInfo: [
    {
      id: "web-design_content-item--1",
      position: "left",
      title: "Rich Experiences",
      description:
        "Increased flexibility in frontend development and a fully composable architecture lets us build sites how you want with best-of-breed tools and deliver the interactive, personalized experience that users expect.",
      image: {
        src: "/content/web_design_dashing.avif",
        alt: "Buchanan DevOps Client Dashing's Web Design and User Interface.",
      },
      gradient: "webGradient",
    },
    {
      id: "web-design_content-item--2",
      title: "Streamlined Design",
      position: "right",
      description:
        "Leveraging a combination of style with substance leads to outstanding outcomes that are sure to be noticed by colleagues, clients, and other stakeholders alike.",
      image: {
        src: "/content/labelbox-https.avif",
        alt: "Buchanan DevOps Client Labelbox's Web Design and User Interface.",
      },
      gradient: "appGradient",
    },
  ],
  testimonials: [
    {
      id: "web-design_testimonial--1",
      quote:
        "The success of our MetLife Stadium web presence on the day of Super Bowl XLVIII was due in large part to the expertise and hosting knowledge provided by Buchanan DevOps. With their help, we were able to anticipate a massive influx of visitors and keep our site running at an optimal speed throughout the event. The traffic peaked shortly after halftime when nearly 84,000 users were visiting simultaneously - something that would not have been possible without Buchanan DevOps' guidance and solution implementation. We are extremely grateful for their assistance as it allowed us to meet all demands placed upon us during this major sporting event.",
      author: {
        name: "Nicole Fountain",
        image: "/portfolio/case-studies/metlife/Metlife_Logo.avif",
      },
      company: "MetLife Stadium",
    },
    {
      id: "web-design_testimonial--2",
      quote:
        "We build beautiful websites that are fast, secure, and easy to use. Our web design services include custom website design, website development, and website maintenance.",
      author: {
        name: "John Doe",
        image: "/content/people.svg",
      },
      company: "Company Name",
    },
  ],
}
