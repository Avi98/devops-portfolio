export default {
  color: {
    colorA: "#ff4d4d",
    colorB: "#f9cb28",
  },
  seo: {
    title: "Search Engine Optimization (SEO)",
    description:
      "We analyze keywords, organic traffic levels, backlinks and other factors to improveme and help remediate any issues with organic performance on your website.",
    keywords:
      "seo, SERP, search, engine, optimization, expert,  performance, organic, traffic, backlinks, authorioty, organic, website, ",
  },

  hero: {
    announcement: {
      text: "Updated SEO Strategy!",
      status: "New" as any,
      href: "#seo-audit",
      hrefText: "Learn More",
    },
    buttonGroup: [
      {
        text: "How does it work?",
        link: "#how-it-works",
        style: "default" as any,
      },
      {
        text: "SEO Audit",
        link: "#seo-audit",
        style: "seo" as any,
      },
    ],
    title: "Search Engine",
    subtitle: "Optimization",
    description:
      "We analyze keywords, organic traffic levels, backlinks and other factors to improveme and help remediate any issues with organic performance on your website.",
    type: "seo" as any,
  },

  summaryInfo: [
    {
      id: "seo_summary-item--1",
      icon: "/icons/orange/app-checklist.svg",
      title: "Discovering Your Needs",
      subtitle:
        "Taking the time to understand your businesses past and present challenges with search engine optimization allow us to create an effective strategy for future success tailored to meet your needs and goals. ",
    },
    {
      id: "seo_summary-item--2",
      icon: "/icons/orange/protected.svg",
      title: "The Best SEO Strategy",
      subtitle:
        "The best search engine strategy is focusing on quality over quantity. Quality search engine results are based on a variety of factors such as relevance to the user's query, accuracy and timeliness of information provided, and overall usability. ",
    },
    {
      id: "seo_summary-item--3",
      icon: "/icons/orange/users.svg",
      title: "Synergistic Effect",
      subtitle:
        "By leveraging an experienced SEO expert’s strengths of applying multiple techniques, such as content marketing, keyword research and link building, the SEO expert creates a synergistic effect that maximizes the campaigns overall effectiveness.",
    },
  ],
  contentInfo: [
    {
      id: "seo_content-item--1",
      position: "left",
      title: "Code. Content. Context.",
      description:
        "By bringing together code, content, and context into an effective strategy, businesses can drive discovery and conversions. Not only will this help your website rank higher in organic search results, but it will also give you perpetual growth now and continuously for years to come. ",
      image: {
        src: "/content/seo.svg",
        alt: "Image of SEO Code, Context, and Content",
      },
      link: {
        text: "Learn More",
        href: "/services/seo",
      },
      gradient: "seoGradient",
    },
  ],

  form: {
    id: "seo-audit",
    title: "Want an SEO Audit?",
    type: "contact" as any,
    description:
      "Do you have an exisiting website and want to know how to improve your SEO? Fill out the form below and we'll get back to you with a comprenhensive SEO audit.",
  },
}
