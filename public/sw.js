if (!self.define) {
  let e,
    i = {}
  const c = (c, a) => (
    (c = new URL(c + ".js", a).href),
    i[c] ||
      new Promise(i => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = c), (e.onload = i), document.head.appendChild(e)
        } else (e = c), importScripts(c), i()
      }).then(() => {
        let e = i[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (a, s) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href
    if (i[r]) return
    let n = {}
    const o = e => c(e, r),
      d = { module: { uri: r }, exports: n, require: o }
    i[r] = Promise.all(a.map(e => d[e] || o(e))).then(e => (s(...e), n))
  }
}
define(["./workbox-588899ac"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/E2ibm_vjJ3NBN5m8L23Kk/_buildManifest.js",
          revision: "4056dc0b9769bfff6eacc567a9317d83",
        },
        {
          url: "/_next/static/E2ibm_vjJ3NBN5m8L23Kk/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/10.4c5d15848d3900a2.js",
          revision: "4c5d15848d3900a2",
        },
        {
          url: "/_next/static/chunks/118.750ec21edf638ac2.js",
          revision: "750ec21edf638ac2",
        },
        {
          url: "/_next/static/chunks/12.657a26c69b40ab43.js",
          revision: "657a26c69b40ab43",
        },
        {
          url: "/_next/static/chunks/142.f5e5705031fa679a.js",
          revision: "f5e5705031fa679a",
        },
        {
          url: "/_next/static/chunks/17.1289d187f662d96a.js",
          revision: "1289d187f662d96a",
        },
        {
          url: "/_next/static/chunks/199.0e1992985089b504.js",
          revision: "0e1992985089b504",
        },
        {
          url: "/_next/static/chunks/219.f391e5298c6bf31f.js",
          revision: "f391e5298c6bf31f",
        },
        {
          url: "/_next/static/chunks/282.fae00f3715056f92.js",
          revision: "fae00f3715056f92",
        },
        {
          url: "/_next/static/chunks/340.63fbe15ea6bd29b0.js",
          revision: "63fbe15ea6bd29b0",
        },
        {
          url: "/_next/static/chunks/349.702013682192e653.js",
          revision: "702013682192e653",
        },
        {
          url: "/_next/static/chunks/383.800cb470bbc1f5c1.js",
          revision: "800cb470bbc1f5c1",
        },
        {
          url: "/_next/static/chunks/424.3594905cf020c7f0.js",
          revision: "3594905cf020c7f0",
        },
        {
          url: "/_next/static/chunks/430.f7e61f85915bdaf5.js",
          revision: "f7e61f85915bdaf5",
        },
        {
          url: "/_next/static/chunks/444.df6e5ce48cc016ae.js",
          revision: "df6e5ce48cc016ae",
        },
        {
          url: "/_next/static/chunks/498.3cf024167782b49f.js",
          revision: "3cf024167782b49f",
        },
        {
          url: "/_next/static/chunks/511.b61d46a1c077393d.js",
          revision: "b61d46a1c077393d",
        },
        {
          url: "/_next/static/chunks/513.c8c9f349402d439a.js",
          revision: "c8c9f349402d439a",
        },
        {
          url: "/_next/static/chunks/549.f70c535503b1a6f6.js",
          revision: "f70c535503b1a6f6",
        },
        {
          url: "/_next/static/chunks/61.47bf5d38fe404077.js",
          revision: "47bf5d38fe404077",
        },
        {
          url: "/_next/static/chunks/661.26de5cf2f3ea85f4.js",
          revision: "26de5cf2f3ea85f4",
        },
        {
          url: "/_next/static/chunks/675.ad37e7e4a38efbd8.js",
          revision: "ad37e7e4a38efbd8",
        },
        {
          url: "/_next/static/chunks/682.bdc46e08ff9aa84d.js",
          revision: "bdc46e08ff9aa84d",
        },
        {
          url: "/_next/static/chunks/723.dbc13a2ce5fd299b.js",
          revision: "dbc13a2ce5fd299b",
        },
        {
          url: "/_next/static/chunks/816.a2171274d1febda1.js",
          revision: "a2171274d1febda1",
        },
        {
          url: "/_next/static/chunks/860.0e8d4e971117a247.js",
          revision: "0e8d4e971117a247",
        },
        {
          url: "/_next/static/chunks/892.3ba5ae36fee1b39c.js",
          revision: "3ba5ae36fee1b39c",
        },
        {
          url: "/_next/static/chunks/905.7ceb3b6b28a63c5d.js",
          revision: "7ceb3b6b28a63c5d",
        },
        {
          url: "/_next/static/chunks/921.92aa44abbd7e7ede.js",
          revision: "92aa44abbd7e7ede",
        },
        {
          url: "/_next/static/chunks/933.2b7f1e7fccb3463d.js",
          revision: "2b7f1e7fccb3463d",
        },
        {
          url: "/_next/static/chunks/959.43458cd4d3dcf4aa.js",
          revision: "43458cd4d3dcf4aa",
        },
        {
          url: "/_next/static/chunks/988.02169664dbedf26f.js",
          revision: "02169664dbedf26f",
        },
        {
          url: "/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",
          revision: "3b5a00d5d7e8d93b",
        },
        {
          url: "/_next/static/chunks/main-62d1391230fa3096.js",
          revision: "62d1391230fa3096",
        },
        {
          url: "/_next/static/chunks/pages/_app-fd45224205289752.js",
          revision: "fd45224205289752",
        },
        {
          url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
          revision: "8353112a01355ec2",
        },
        {
          url: "/_next/static/chunks/pages/app-development-030f7ec598fbc199.js",
          revision: "030f7ec598fbc199",
        },
        {
          url: "/_next/static/chunks/pages/contact-7cb144a24b3ba10b.js",
          revision: "7cb144a24b3ba10b",
        },
        {
          url: "/_next/static/chunks/pages/digital-marketing-0baa787d7600ca73.js",
          revision: "0baa787d7600ca73",
        },
        {
          url: "/_next/static/chunks/pages/index-be56f020696e01cf.js",
          revision: "be56f020696e01cf",
        },
        {
          url: "/_next/static/chunks/pages/legal-notices-816bd575a5c1daa2.js",
          revision: "816bd575a5c1daa2",
        },
        {
          url: "/_next/static/chunks/pages/search-engine-optimization-0a6d8fe73c1788b6.js",
          revision: "0a6d8fe73c1788b6",
        },
        {
          url: "/_next/static/chunks/pages/web-design-05778a812fb82d77.js",
          revision: "05778a812fb82d77",
        },
        {
          url: "/_next/static/chunks/pages/work-portfolio-58e06e8bed416c8f.js",
          revision: "58e06e8bed416c8f",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-91b3d44d73865a93.js",
          revision: "91b3d44d73865a93",
        },
        {
          url: "/_next/static/css/17f0d613640b4042.css",
          revision: "17f0d613640b4042",
        },
        {
          url: "/_next/static/media/2aaf0723e720e8b9.p.woff2",
          revision: "e1b9f0ecaaebb12c93064cd3c406f82b",
        },
        {
          url: "/_next/static/media/9c4f34569c9b36ca.woff2",
          revision: "2c1fc211bf5cca7ae7e7396dc9e4c824",
        },
        {
          url: "/_next/static/media/ae9ae6716d4f8bf8.woff2",
          revision: "b0c49a041e15bdbca22833f1ed5cfb19",
        },
        {
          url: "/_next/static/media/b1db3e28af9ef94a.woff2",
          revision: "70afeea69c7f52ffccde29e1ea470838",
        },
        {
          url: "/_next/static/media/b967158bc7d7a9fb.woff2",
          revision: "08ccb2a3cfc83cf18d4a3ec64dd7c11b",
        },
        {
          url: "/_next/static/media/c0f5ec5bbf5913b7.woff2",
          revision: "8ca5bc1cd1579933b73e51ec9354eec9",
        },
        {
          url: "/_next/static/media/d1d9458b69004127.woff2",
          revision: "9885d5da3e4dfffab0b4b1f4a259ca27",
        },
        {
          url: "/analytics/comprehensive-reporting.avif",
          revision: "aadff01680139fa2c2244f7953bf8bb7",
        },
        {
          url: "/analytics/customer-aquisition.avif",
          revision: "a362c73e7476e150fdad0783af99ce53",
        },
        {
          url: "/analytics/deep-learning.avif",
          revision: "1e30ffd1d1b93fccd87729a67374e680",
        },
        {
          url: "/analytics/merchandising-seo.avif",
          revision: "1be558eeddcc89b32bd5011c1db25f1d",
        },
        {
          url: "/analytics/seo-audit.avif",
          revision: "11ac6e9ed20d20e60f1f9bf3537b2087",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "24180eb1a5ce17592198bff55a30418f",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "271cdee67fbeb0b7982823ddd1d56c37",
        },
        {
          url: "/bgk/app-dark.svg",
          revision: "0932a981c319edc0bfa625fcf4412436",
        },
        {
          url: "/bgk/app-light.svg",
          revision: "6845719de06c3ab5d1d33ec597161706",
        },
        {
          url: "/bgk/app-red-dark.svg",
          revision: "090d4ad1092ec3ac287c81f287aa63b3",
        },
        {
          url: "/bgk/artifacts.svg",
          revision: "4beabe41ff5216311820390af9f0a19f",
        },
        { url: "/bgk/cicd.svg", revision: "e67a00ab5e5050e054e7a043f73be49d" },
        {
          url: "/bgk/code-search-brand.svg",
          revision: "318ee0982cde7123943a22786b418590",
        },
        {
          url: "/bgk/code-search-dark-red.svg",
          revision: "568476510108990957ffd14d67c1926e",
        },
        {
          url: "/bgk/code-search-dark.svg",
          revision: "055816f6db6fed782bb66baaa9b8f1b9",
        },
        {
          url: "/bgk/code-search-gradient.svg",
          revision: "3dd2d8e821b75bebfa906be6bb5cb84b",
        },
        {
          url: "/bgk/code-search-light.svg",
          revision: "bccf9401ea36e91c87507d37028d5efd",
        },
        {
          url: "/bgk/dapp-dark-red.svg",
          revision: "a9bfefac1b682fe6a3afa23625dab644",
        },
        {
          url: "/bgk/dapp-dark.svg",
          revision: "f1959ef1aa348cd361a014cfc8e7746b",
        },
        {
          url: "/bgk/design-brand.svg",
          revision: "2d360b0228cb03b85961114c98a9edbd",
        },
        {
          url: "/bgk/design-dark-red.svg",
          revision: "51fbf4d404f203284c1cbb7b7e06d72c",
        },
        {
          url: "/bgk/design-dark.svg",
          revision: "30155a7e01bd5fe281be22724c636a16",
        },
        {
          url: "/bgk/design-light.svg",
          revision: "5150dbb64db1d53c331787de05880d3f",
        },
        {
          url: "/bgk/ethereum-dark-red.svg",
          revision: "0ab3091629e1008557396401983b8455",
        },
        {
          url: "/bgk/ethereum-dark.svg",
          revision: "02c5b110c3ef2e047f5d07770608922e",
        },
        {
          url: "/bgk/ethereum-light.svg",
          revision: "cdb20dd0daf3e8509d31f8d232ea1a7f",
        },
        {
          url: "/bgk/glows/1.svg",
          revision: "32da57c6508bed616ecfb90867f585ce",
        },
        {
          url: "/bgk/glows/2.svg",
          revision: "adb785789f729cd51f7e7232c6c05559",
        },
        {
          url: "/bgk/glows/3.svg",
          revision: "8d48b1142ccf850e90185f9df5d31d5b",
        },
        {
          url: "/bgk/glows/4.svg",
          revision: "7cd46f297abb09a56b483735bef97b04",
        },
        {
          url: "/bgk/gradient/highlight.svg",
          revision: "dbed322c90addeca6ed9e5d5e52c3444",
        },
        {
          url: "/bgk/grid/grid1.svg",
          revision: "4694b0acdaca5a490539bd64377d4909",
        },
        {
          url: "/bgk/grid/grid2.svg",
          revision: "35f2ffceca17baaeba5e0f0e0a95934e",
        },
        {
          url: "/bgk/grid/grid3.svg",
          revision: "6ec60b99de028f6369ca6c46496c3ced",
        },
        {
          url: "/bgk/insights-light.svg",
          revision: "f5473c80f1d1fbcd168a961f0628ebe4",
        },
        {
          url: "/bgk/insights.svg",
          revision: "accc4d6c093f01bba5f493e28a4d3d37",
        },
        {
          url: "/bgk/security-dark.svg",
          revision: "da5528d683774a1335e3711c85854c74",
        },
        {
          url: "/bgk/security-light.svg",
          revision: "1c7ffa5250bb7db1ad1216843722ebb1",
        },
        {
          url: "/bgk/seo-dark-red.svg",
          revision: "f431390f47111dc3c3f2a8d8a779d357",
        },
        {
          url: "/bgk/seo-dark.svg",
          revision: "8469d8134ac35f2feb13c02f57254039",
        },
        {
          url: "/bgk/stack-brand.svg",
          revision: "2ea942b85d522492028f5a40a00bd400",
        },
        {
          url: "/bgk/stack-dark-red.svg",
          revision: "c42ede56608beca09de15bcc20b36daa",
        },
        {
          url: "/bgk/stack-dark.svg",
          revision: "0b8c727691fac322c66a9b55ec68cdd9",
        },
        {
          url: "/bgk/stack-light.svg",
          revision: "705e3b4580c9adb1a82abf6f8d0f5675",
        },
        {
          url: "/bgk/support-blue.svg",
          revision: "8edbaf67ab7843505ee65dc846d3d92c",
        },
        {
          url: "/bgk/support-dark.svg",
          revision: "34ec91d3428f43f71e8cf0666788e6d9",
        },
        {
          url: "/bgk/support-light.svg",
          revision: "38ccb19566c82480b5bd5afa038da66e",
        },
        {
          url: "/bgk/web-dark-red.svg",
          revision: "bff7fae067b20b5176b35eaf05afe5ad",
        },
        {
          url: "/bgk/web-dark.svg",
          revision: "eef5b808b4c3016a6f3ee20a880349bc",
        },
        {
          url: "/brand/b-logo.svg",
          revision: "9afa822cc7c52db87b0fa12518b33f11",
        },
        {
          url: "/brand/bdark.svg",
          revision: "5e78882d63bf5e3eb5a6a871209fdca2",
        },
        {
          url: "/brand/blight.svg",
          revision: "2539e326b491aa229f6f82a5170d7e20",
        },
        {
          url: "/brand/dark-small.png",
          revision: "a62e73699ddd4c4d75a2be7f4ad61985",
        },
        {
          url: "/brand/johnbuchanan.avif",
          revision: "256c64e0bbe1bcd60893c4e5f2270ee8",
        },
        {
          url: "/brand/light-small.png",
          revision: "48b7e72036be8ed68e2d8465aae66b11",
        },
        {
          url: "/browserconfig.xml",
          revision: "91489e9cf4a8c2844bc3dd24cb20e66a",
        },
        {
          url: "/content/agile_development.avif",
          revision: "5c0cf4592ebdcf9d3301f6b43a9b8d51",
        },
        {
          url: "/content/backend_monorepo.avif",
          revision: "220b3c2cafc82ed50e1f807799e675e6",
        },
        {
          url: "/content/bassnectar-unlimited.avif",
          revision: "246d5b3e7ada46542a6150a4c088d5cd",
        },
        {
          url: "/content/bassnectar-unlimited.png",
          revision: "a1f6a998ff96062afcceb73dbcebf00f",
        },
        {
          url: "/content/browser.avif",
          revision: "ef4275ea66be184786ba72aa9cae9b19",
        },
        {
          url: "/content/cicd_production_application.avif",
          revision: "f74feedc7dd63208ac4c33c074a531fe",
        },
        {
          url: "/content/code.svg",
          revision: "ae804ce6edf8461c05d931bc3228df1d",
        },
        {
          url: "/content/comments.webp",
          revision: "61dd512ac7ed9dc02c79fc481da1f08a",
        },
        {
          url: "/content/commerce.avif",
          revision: "7a89ae4312d230a35d30c0de652cb205",
        },
        {
          url: "/content/devops_planning_reviews_training.avif",
          revision: "3cf409dc9a065715219d9855ca04b747",
        },
        {
          url: "/content/frameworks/angular.svg",
          revision: "32e55d6d52b4199a8fa5cd9d484eab36",
        },
        {
          url: "/content/frameworks/ember.svg",
          revision: "62d7544674945dd89013425714213891",
        },
        {
          url: "/content/frameworks/gatsby.svg",
          revision: "fd46bd8b5c628afffe72ee59c97ba5da",
        },
        {
          url: "/content/frameworks/hugo.svg",
          revision: "faa2b7c44c1a589e43e26f155c565264",
        },
        {
          url: "/content/frameworks/nextjs.svg",
          revision: "c14648efdae27bf8b518c49160f5ecbd",
        },
        {
          url: "/content/frameworks/nuxt.svg",
          revision: "f3392fa86d0181039adfeb07cbb14f00",
        },
        {
          url: "/content/frameworks/react.svg",
          revision: "3070211662b495ed47926da82d14a05d",
        },
        {
          url: "/content/frameworks/svetle.svg",
          revision: "9c33edb037fc63d0b504220128c373bf",
        },
        {
          url: "/content/frameworks/vue.svg",
          revision: "ae27f8b1f2359c24ad92aa83435283e2",
        },
        {
          url: "/content/fshero.svg",
          revision: "a2896d404ba9cd8904154413a8bef77e",
        },
        {
          url: "/content/globe.avif",
          revision: "18b818c1b2fa7d238ff6904d8b19f0c5",
        },
        {
          url: "/content/labelbox-https.avif",
          revision: "340cb3b27749ceedd41784206918e1a0",
        },
        {
          url: "/content/middle-ware.avif",
          revision: "48c78e016a2472f7a259a90ead7956ef",
        },
        {
          url: "/content/mobile-gif.gif",
          revision: "4c99aa155165d64e5b48490d650dcb78",
        },
        {
          url: "/content/monitoring.avif",
          revision: "c70b707f180d154d9d20eb2ab4412c48",
        },
        {
          url: "/content/partners/seo/google.svg",
          revision: "efcd0326dade46509e2a9df9f88401f6",
        },
        {
          url: "/content/partners/seo/hubspot.svg",
          revision: "11230306b90d3c4d50698cb3df23b07f",
        },
        {
          url: "/content/partners/seo/microsoft.svg",
          revision: "25f25e4202dfd7197630eac7abc532e7",
        },
        {
          url: "/content/people.svg",
          revision: "905bb326c0e890d34f447957bb2851f1",
        },
        {
          url: "/content/performance.svg",
          revision: "f5c836f0b2421d87e7fc1011ea04218c",
        },
        {
          url: "/content/place.svg",
          revision: "d07b1d09a6c5da6668c2fda815cff068",
        },
        {
          url: "/content/product.svg",
          revision: "3b842fe6e9279ea18030f23244be2787",
        },
        {
          url: "/content/productd.svg",
          revision: "f4ecd1ded857b070016f7acf6ff29eee",
        },
        {
          url: "/content/production-dark.svg",
          revision: "978cee52f2ff470ea02b602a4c03f45c",
        },
        {
          url: "/content/production-light.svg",
          revision: "a827e27d6e590d310e3bc3d60d66f099",
        },
        {
          url: "/content/productl.svg",
          revision: "10d5e4044b74def4df2b56223d8157fc",
        },
        {
          url: "/content/providers/Basin.svg",
          revision: "a2ca4834832f698642e2ddbe3d4fa143",
        },
        {
          url: "/content/providers/GraphQL.svg",
          revision: "8e2128fdd7d8524394467010e298a4bf",
        },
        {
          url: "/content/providers/ImgIX.svg",
          revision: "c6c8f6643abc68194c5d2887957fcf10",
        },
        {
          url: "/content/providers/algolia-v2.svg",
          revision: "14bb9823932b0f65574ed208a8dde21b",
        },
        {
          url: "/content/providers/algolia.svg",
          revision: "8bbc37e5a3968d767c1b4e2918591391",
        },
        {
          url: "/content/providers/auth0.svg",
          revision: "0646c60e393d86aeb74090fb92c7dfbf",
        },
        {
          url: "/content/providers/badge/netlify.svg",
          revision: "4bbcb83cce8d842e3d4ab5ba371b3cc6",
        },
        {
          url: "/content/providers/badge/nextjs.svg",
          revision: "77290cb72e77e00a3d8b335957636805",
        },
        {
          url: "/content/providers/badge/swc.svg",
          revision: "77ca740716bcd1e498a562abe45225a3",
        },
        {
          url: "/content/providers/badge/swr.svg",
          revision: "b7cc22f8c3e423ed41628d6b849e27ba",
        },
        {
          url: "/content/providers/badge/turborepo.svg",
          revision: "dde53b53c9b3dcc139afd1c7d364f5b3",
        },
        {
          url: "/content/providers/badge/webpack.svg",
          revision: "62c7428790cd96f4edab51911b836b38",
        },
        {
          url: "/content/providers/big-commerce-sketch.svg",
          revision: "5474b8a1b8f82601459d1f589c093999",
        },
        {
          url: "/content/providers/big-commerce.svg",
          revision: "a63e44b302e703e0c87d0cfc4d094534",
        },
        {
          url: "/content/providers/contentful-v2.svg",
          revision: "64b96c1459e22781825fda3936063c0c",
        },
        {
          url: "/content/providers/contentful.svg",
          revision: "9b9167e2d8de69ee110af6ddb4632e79",
        },
        {
          url: "/content/providers/dato-cms.svg",
          revision: "5cc48b559decfaf7865b8e4758b0d29b",
        },
        {
          url: "/content/providers/geist.svg",
          revision: "d0ea38ddca8c87fee8b588dead7f7115",
        },
        {
          url: "/content/providers/github.svg",
          revision: "a6bf8ec4e69fa509ea9f53cbabab33ba",
        },
        {
          url: "/content/providers/graphql-light.svg",
          revision: "3ee708889fd5c9aaab546d0bc85633e0",
        },
        {
          url: "/content/providers/graphql-logo.svg",
          revision: "4b228e1dac5a2c8704ce811b21b9bcbf",
        },
        {
          url: "/content/providers/graphql.svg",
          revision: "4b228e1dac5a2c8704ce811b21b9bcbf",
        },
        {
          url: "/content/providers/hasura.svg",
          revision: "f0d2d6680b1c6c142a8eb6f5016c8e86",
        },
        {
          url: "/content/providers/ipfs.svg",
          revision: "d527587c3a6405f9740d3b04835cb440",
        },
        {
          url: "/content/providers/netlify.svg",
          revision: "d396bdec7451a2ea5facbd12c4517bba",
        },
        {
          url: "/content/providers/nextjs.svg",
          revision: "f51e4ba7f079ce510251b1934f3c6e46",
        },
        {
          url: "/content/providers/nextlogo.svg",
          revision: "15b30b16c761b782fc5fa8e3a135e50f",
        },
        {
          url: "/content/providers/prisma.svg",
          revision: "1ab3a2c8c0727d82fb8dbb882e34ed4d",
        },
        {
          url: "/content/providers/prismic.svg",
          revision: "b240ec4addb50f36a1e34b931d3a1618",
        },
        {
          url: "/content/providers/radix.svg",
          revision: "77e37849a82fee7328f50e8fec69e795",
        },
        {
          url: "/content/providers/react.svg",
          revision: "af5ac4213104607bd26433ede364dc4d",
        },
        {
          url: "/content/providers/shopify-other.svg",
          revision: "2bae917a0eb8f4c375f853fe72da2a0e",
        },
        {
          url: "/content/providers/shopify.svg",
          revision: "42edb77bdea3c7627fc8b0f0517fd809",
        },
        {
          url: "/content/providers/stitches.svg",
          revision: "d6ed8414b6b092f9b1cd24b2ead9cf22",
        },
        {
          url: "/content/providers/stripe.svg",
          revision: "12362f5199b30e280219840186d23fd3",
        },
        {
          url: "/content/providers/svelte.svg",
          revision: "586d175523a62e63590361469946956e",
        },
        {
          url: "/content/providers/tailwindscss.svg",
          revision: "801c7d2ba2cca7c897df94ebb4a49b7c",
        },
        {
          url: "/content/providers/typescript.svg",
          revision: "5e2577694b7b82b6332526a976929330",
        },
        {
          url: "/content/providers/vercel.svg",
          revision: "46109414b8a8eb596056c828113b17d0",
        },
        {
          url: "/content/providers/wagmi.svg",
          revision: "99a164c46824239fb1942a658802125e",
        },
        {
          url: "/content/react.svg",
          revision: "33bc68394d59dea5e8c6d471c49f4bca",
        },
        {
          url: "/content/seo.svg",
          revision: "234ff15a8553692d19313e5f2e4a4c91",
        },
        {
          url: "/content/seo_audit_metrics.avif",
          revision: "dd74a4651640c6130cd4161e5b278a6b",
        },
        {
          url: "/content/seo_code_content_context.avif",
          revision: "2d8abc1c22f94a40c23635fc319b1b32",
        },
        {
          url: "/content/seo_keyword_planning.avif",
          revision: "7ad6c8c8808f250bd1677c8e68106857",
        },
        {
          url: "/content/seo_measuring.avif",
          revision: "ae8f67a1449afe0c761871b7a9dda67f",
        },
        {
          url: "/content/seo_measuring_reporting.avif",
          revision: "985d3868a80cc4714947e4f6438e97e4",
        },
        {
          url: "/content/seo_technical.avif",
          revision: "28679e1390c8dbb5edb79df3f50a091f",
        },
        {
          url: "/content/target-mobile.avif",
          revision: "d994917e17536ba4024bb2c99cf8ae39",
        },
        {
          url: "/content/tracks.avif",
          revision: "edf2697e8cbbef99e06cabd5a73328ae",
        },
        {
          url: "/content/wdhero.svg",
          revision: "0e8fbe653c273f89655e46c6436ca12e",
        },
        {
          url: "/content/web_design_dashing.avif",
          revision: "a06178933e323a7c742729a0dbcd9f73",
        },
        {
          url: "/content/web_design_story.avif",
          revision: "b82213058f93a4e74b138767a5a9c587",
        },
        {
          url: "/favicon-16x16.png",
          revision: "3e75e5089827f621b16735d6fbd922a7",
        },
        {
          url: "/favicon-32x32.png",
          revision: "202c6cd47ca1837334ace0fe5ea894be",
        },
        { url: "/favicon.ico", revision: "3e75e5089827f621b16735d6fbd922a7" },
        { url: "/icons/bar.svg", revision: "68e323d41cce4c973e74885675468410" },
        {
          url: "/icons/blue/cicd.svg",
          revision: "1d40a349b68e7e421b239bce8af36f56",
        },
        {
          url: "/icons/blue/code-window.svg",
          revision: "6f82114cd722efb5d84c7d84e0318842",
        },
        {
          url: "/icons/blue/status.svg",
          revision: "65da8776ede4c340d2fc43cd768ea77e",
        },
        {
          url: "/icons/boost.svg",
          revision: "5f407af3689027af3487fc1cf97ca567",
        },
        {
          url: "/icons/check.svg",
          revision: "f387ab6667de7b3419b6401b9372363c",
        },
        {
          url: "/icons/code.svg",
          revision: "3fc2375d1674afa3c91f56cee565faf9",
        },
        {
          url: "/icons/command.svg",
          revision: "343617b2de5f12d85b829d16508e09c4",
        },
        { url: "/icons/cpu.svg", revision: "ba2e5c7bc2921713e2fe63c39a0fe09a" },
        {
          url: "/icons/design.svg",
          revision: "093b163162ac01ae8417c193102ed57b",
        },
        {
          url: "/icons/desktop.svg",
          revision: "b1c7854610d80de7f9fb4a473987928a",
        },
        {
          url: "/icons/ethereum.svg",
          revision: "e56144453e641397525665fceabe6f0b",
        },
        {
          url: "/icons/green/action.svg",
          revision: "d91817ba97b702ef566d7cde253c6e59",
        },
        {
          url: "/icons/green/collab.svg",
          revision: "bf0134688b9abb4888d67452a47e6f96",
        },
        {
          url: "/icons/green/document.svg",
          revision: "32f7ecd1723cbfbc4367d13caa49a43e",
        },
        {
          url: "/icons/orange/app-checklist.svg",
          revision: "3180cdecf5215253c8304ca964c48433",
        },
        {
          url: "/icons/orange/protected.svg",
          revision: "ec07c2bf9ed2fe8a96373c3db35c3fe3",
        },
        {
          url: "/icons/orange/seo-audit.svg",
          revision: "c679e6c39659e98d90e65e2fa104f2b5",
        },
        {
          url: "/icons/orange/seo-cpu.svg",
          revision: "004db406f3ec4b0b37310a5d95537a34",
        },
        {
          url: "/icons/orange/seo-keyword.svg",
          revision: "600a220c7a58a640b809aa1fc52e44aa",
        },
        {
          url: "/icons/orange/seo-measuring.svg",
          revision: "c130758a01a5215edb8013331eb9aadb",
        },
        {
          url: "/icons/orange/seo-organic.svg",
          revision: "1af0016d0e84b9a5bd87053a4ffc8047",
        },
        {
          url: "/icons/orange/seo-strategy.svg",
          revision: "3ebf4fbdaa3b3fcd3e62092fc92884d9",
        },
        {
          url: "/icons/orange/seo-technical.svg",
          revision: "f0b08bfb818b5231add624103ec7c723",
        },
        {
          url: "/icons/orange/users.svg",
          revision: "3a7a04c20c38b128ba06a97f905aa060",
        },
        {
          url: "/icons/purple/backend.svg",
          revision: "142cc19b8db5b2403848995d5926210f",
        },
        {
          url: "/icons/purple/devops.svg",
          revision: "17ab3a565cc333c55fcc0894d49e5e34",
        },
        {
          url: "/icons/purple/matrix.svg",
          revision: "1c2056dee141ce3302c74a4ba6df6994",
        },
        {
          url: "/icons/searchcheck.svg",
          revision: "ff11c69d5fdbc3ea51f59ccf9b352b3d",
        },
        {
          url: "/icons/searchcode.svg",
          revision: "0376f51ae7a399dde9ca2fc15eaceb8a",
        },
        {
          url: "/icons/security.svg",
          revision: "7c18f0110a52df2137fdedbcb78893e7",
        },
        {
          url: "/icons/stack.svg",
          revision: "557045fddeb0a05d1a14ca95fa7765dd",
        },
        {
          url: "/icons/support.svg",
          revision: "2ab72d88c7d50a8566053eb733c48980",
        },
        {
          url: "/icons/window.svg",
          revision: "f17f07225866b00d35774bfd045ca70d",
        },
        { url: "/isotipo.png", revision: "26aecd3a2e875f07abdc15f57d031760" },
        { url: "/isotipo.svg", revision: "920add063dba830d812fb8ec9910f0ab" },
        { url: "/manifest.json", revision: "96b26b0ee11e1f545de27ce9f473e1bf" },
        { url: "/noflash.js", revision: "5731f441aa27ae0e007ac5305a930794" },
        {
          url: "/portfolio/1.avif",
          revision: "25b46279b00cda71cdc3d83cca20c392",
        },
        {
          url: "/portfolio/10.avif",
          revision: "4ccc77098c9b7fb40ea65bfa4e9ee793",
        },
        {
          url: "/portfolio/11.avif",
          revision: "8689e5807da2c0c2863ef0e44aa6625f",
        },
        {
          url: "/portfolio/12.avif",
          revision: "86f7b0ab52caa70259c54f6d635098af",
        },
        {
          url: "/portfolio/13.avif",
          revision: "46b87d9298b3c1eb6c5f75e3f22b7b9f",
        },
        {
          url: "/portfolio/14.avif",
          revision: "efa19f22e6fcfece48f3e7ea054b50a9",
        },
        {
          url: "/portfolio/15.avif",
          revision: "ce45c474784c23259f44a2e2e1430335",
        },
        {
          url: "/portfolio/16.avif",
          revision: "dc45a6c906e3dba20576e2055aa8e7ab",
        },
        {
          url: "/portfolio/17.avif",
          revision: "6dce746d7e6c363c8c1404704242a55b",
        },
        {
          url: "/portfolio/18.avif",
          revision: "6f3b2a4e43aa3156750f52a546ef80f7",
        },
        {
          url: "/portfolio/19.avif",
          revision: "dc0fdfad858ba1c843bd4e8ec648a202",
        },
        {
          url: "/portfolio/2.avif",
          revision: "72d996fa7b052359e815a20ab0dc74e9",
        },
        {
          url: "/portfolio/20.avif",
          revision: "777a3b51188ac1293123de7e54bb61b5",
        },
        {
          url: "/portfolio/21.avif",
          revision: "851b6f93f4b9b8f58a323efa9d3f52a0",
        },
        {
          url: "/portfolio/22.avif",
          revision: "4e18a6d3004e5afc21d31d776ead638a",
        },
        {
          url: "/portfolio/23.avif",
          revision: "f02e36355ab9dead393988d86d1df2c4",
        },
        {
          url: "/portfolio/24.avif",
          revision: "3924022922a4df776a7585f32bffe7f8",
        },
        {
          url: "/portfolio/3.avif",
          revision: "9bf0e1c8a053b782c1115c2ce31fa7da",
        },
        {
          url: "/portfolio/4.avif",
          revision: "27544b8410e08d329ad143a094db9715",
        },
        {
          url: "/portfolio/5.avif",
          revision: "c804c35b02500d919cfc33a597a101b6",
        },
        {
          url: "/portfolio/6.avif",
          revision: "727d18caf05c4260841dffc6f8cdadef",
        },
        {
          url: "/portfolio/7.avif",
          revision: "5c750d1f425ba736fc7ed9374859f7a7",
        },
        {
          url: "/portfolio/8.avif",
          revision: "17c441027cddb24c3a1ba06812983bf0",
        },
        {
          url: "/portfolio/9.avif",
          revision: "3a33a6627e95d2e79355f5cb52d43061",
        },
        { url: "/robots.txt", revision: "88210a2acc1b0a97be0d62a856816bf8" },
        {
          url: "/safari-pinned-tab.svg",
          revision: "e53be28585add5c5d401ef3323cb15cb",
        },
        {
          url: "/twitter-cards/Buchanan_DevOps_SEO_Twitter_Card.avif",
          revision: "c1d23817031db8b0cc3353c24aca7c7b",
        },
        { url: "/unlimited.svg", revision: "d3101e78a80ef2501b85942c66f39566" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: c,
              state: a,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const i = e.pathname
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    )
})
