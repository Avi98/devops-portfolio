export default {
  color: {
    colorA: "#007cf0",
    colorB: "#00dfd8",
  },
  seo: {
    title: "Web Design",
    description:
      "We understand that your brand is more than just a logo or slogan, it's an experience. That's why we focus on the experience when designing user interfaces.",
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
      "We understand that your brand is more than just a logo or slogan, it's an experience. That's why we focus on the experience when designing user interfaces.",
    image: "/content/wdhero.svg",
    subtitle: "Designer.",
    title: "Website",
    type: "web-design" as any,
  },

  summaryInfo: [
    {
      id: "web-design_summary-item--1",
      icon: "/icons/blue/code-window.svg",
      title: "Discovery + Strategy",
      subtitle:
        "At the start of any project, we like to take a deep dive into understanding your business goals, technology in use, economics and objectives.",
    },
    {
      id: "web-design_summary-item--2",
      icon: "/icons/blue/cicd.svg",
      title: "UI/UX Web Design",
      subtitle:
        "Once the business insights and requirements are identified, we will use them to design a user interface (UI) that is tailored to enhance brand recognition and user experience.",
    },
    {
      id: "web-design_summary-item--3",
      icon: "/icons/blue/status.svg",
      title: "Minimal Viable Product (MVP)",
      subtitle:
        "At this stage of the process, we will have a hosted Minimum Viable Product (MVP) for the business to collaborate with us in real time.",
    },
  ],

  contentInfo: [
    {
      id: "better-converting-website",
      position: "left",
      title: "How to build the best website",
      description:
        "With thoughtful planning and consideration of each aspect of a website, you can create a site that achieves its desired outcomes – whether sales leads or engagement with customers – successfully. ",
      list: [
        {
          id: "best-website_list-item--1",
          title: "Design for your users.",
          description:
            "Defining the needs of the site’s users first. Once we established the functionality we have a foundation for the user experience (UX Design).",
        },
        {
          id: "best-website_list-item--2",
          title: "Design with a purpose.",
          description:
            "The best website has brains and beauty. We build with a clear view of the business goals and objectives to support the users journey.",
        },
        {
          id: "best-website_list-item--3",
          title: "Design for discoverability.",
          description:
            "We build relvant, discoverable content technically optimized for speed, accessibility, and engaging elements to drive conversions.",
        },
      ],
      image: {
        src: "/content/web_design_dashing.avif",
        alt: "Buchanan DevOps Client Dashing's Web Design and User Interface.",
      },
      gradient: "webGradient",
    },
    {
      id: "experience-matters",
      title: "Experience Matters",
      position: "right",
      description:
        "We use our 13 years of experience and knowledge to create engaging interfaces that not only looks great but also drive audiences to action, helping you reach and exceed your business goals.",
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
        image: "/content/people.svg",
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
  cta: {
    title: "Website Design Projects",
    subtitle:
      "Buchanan DevOps enables companies to design and develop their digital products and services while your team focuses on what they do best, running your business.",
    href: "/work-portfolio",
    hrefTitle: "View Portfolio",
  },
  portfolioCta: [
    {
      id: "web-design_portfolio-cta--1",
      title: "Deer Creek Seed",
      image: "/portfolio/21.avif",
      alt: "Buchanan DevOps Client Deer Creek Seed's Web Design and User Interface.",
    },
    {
      id: "web-design_portfolio-cta--2",
      title: "Railworks",
      image: "/portfolio/14.avif",
      alt: "Buchanan DevOps Client Railworks's Web Design and User Interface.",
    },
    {
      id: "web-design_portfolio-cta--3",
      title: "7 Acres",
      image: "/portfolio/5.avif",
      alt: "Buchanan DevOps Client 7 Acres's Web Design and User Interface.",
    },
  ],
  form: {
    id: "website-design-form",
    title: "Talk to an Expert.",
    type: "contact" as any,
    description: "We'll help you find the right soultion for your business.",
  },
}
