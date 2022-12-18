export type ProcessProps = {
  id: string
  type: "design" | "develop" | "optimize" | string
  title: string
  subTitle: string
  tag: string
  slug: string
  description: string[]
  features?: {
    title: string
    description: string
  }[]
  image?: string
}

const process = [
  {
    id: "1",
    type: "design",
    gradient: "design",
    title: "Design.",
    subTitle: "Website Design",
    tag: "Frontend",
    slug: "web-design",
    description: [
      "Buchanan DevOps approach to the design process begins with a combination of cultural philosophies, best practices and software required to achieve your vision. By mapping and building your workflow we can guage the project requirements.",
      "After doing our initial research into your industry, we'll put together a preliminary wireframe to define the components required for the development stage. Once the project is outlined we'll begin designing the components required.",
    ],
    features: [
      {
        title: "Ecommerce Storefronts",
        description:
          "Create a robust differentiated online storefront that is easy to use and maintain empowering your customers to find what they need quickly and easily.",
      },
      {
        title: "Mobile App Design",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
      },
      {
        title: "Web Design",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
      },
    ],
    image: "/content/target-mobile.avif",
  },
  {
    id: "2",
    type: "develop",
    gradient: "develop",
    title: "Develop.",
    subTitle: "Full Stack Apps",
    tag: "Backend",
    slug: "app-development",
    description: [
      "At Buchanan DevOps, we understand the importance of delivering top-notch technical talent to build great apps and keep them running. Our team is comprised of experienced professionals with a deep understanding of coding languages and development frameworks who are dedicated to creating robust applications that will help your business succeed. ",
      "With our expertise in app design, development and maintenance, you can rest assured that your application will be up-to-date with modern standards while providing exceptional performance for users on all platforms. We also have an extensive network of developers from around the United States, allowing us access to specialized skillsets when needed. ",
    ],
  },
  {
    id: "3",
    type: "optimize",
    gradient: "optimize",
    title: "Optimize.",
    subTitle: "SEO Strategy",
    tag: "SEO",
    slug: "search-engine-optimization",
    description: [
      "Search Engine Optimization (SEO) is an invaluable strategy for businesses to increase their visibility. SEO helps your business stand out from the competition by applying semantic logic, schemas, and structured data to optimize your website’s content for search engine algorithms. ",
      "By utilizing SEO techniques such as keyword research, meta tags optimization and link building you can improve your website's ranking on major search engines like Google or Bing. This will help potential customers find you more easily when searching for the products or services that you offer. ",
      "The key benefits of implementing a successful SEO campaign are increased traffic to your site, improved brand awareness in organic searches and higher conversion rates due to better user experience onsite which leads directly into more sales opportunities overall! Additionally, if done correctly it can also provide long-term results that continue even after campaigns have ended - making this an ideal investment into any business’s digital marketing efforts! ",
      "By investing in a good quality Search Engine Optimization service provider who understands how best to apply these strategies within today's ever changing landscape - businesses can ensure they remain competitively visible online while still staying true their core values & goals as well as maximizing ROI potential over time.",
    ],
  },
]

export default process
