if(!self.define){let e,c={};const i=(i,s)=>(i=new URL(i+".js",s).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let n={};const d=e=>i(e,r),o={module:{uri:r},exports:n,require:d};c[r]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(a(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/130.952ae4ad13074d35.js",revision:"952ae4ad13074d35"},{url:"/_next/static/chunks/142.6c2bc4855db58283.js",revision:"6c2bc4855db58283"},{url:"/_next/static/chunks/16.1eda6826617d971c.js",revision:"1eda6826617d971c"},{url:"/_next/static/chunks/22.972dcd6b37d72e40.js",revision:"972dcd6b37d72e40"},{url:"/_next/static/chunks/336.45e72935be51ac25.js",revision:"45e72935be51ac25"},{url:"/_next/static/chunks/340.aaf5f778defd3f45.js",revision:"aaf5f778defd3f45"},{url:"/_next/static/chunks/349.f8c9f0373dcdf263.js",revision:"f8c9f0373dcdf263"},{url:"/_next/static/chunks/498.3cf024167782b49f.js",revision:"3cf024167782b49f"},{url:"/_next/static/chunks/511.fa30e2ae60091308.js",revision:"fa30e2ae60091308"},{url:"/_next/static/chunks/516.ea9aaac800fabfe6.js",revision:"ea9aaac800fabfe6"},{url:"/_next/static/chunks/549.f70c535503b1a6f6.js",revision:"f70c535503b1a6f6"},{url:"/_next/static/chunks/585.7718a5acf6a1fe9b.js",revision:"7718a5acf6a1fe9b"},{url:"/_next/static/chunks/723.c9e77224df37fe7b.js",revision:"c9e77224df37fe7b"},{url:"/_next/static/chunks/732.aaf80ddb0c6c91b3.js",revision:"aaf80ddb0c6c91b3"},{url:"/_next/static/chunks/762.dcbb37021cfa1b7a.js",revision:"dcbb37021cfa1b7a"},{url:"/_next/static/chunks/816.2771755ff3e1b861.js",revision:"2771755ff3e1b861"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-62d1391230fa3096.js",revision:"62d1391230fa3096"},{url:"/_next/static/chunks/pages/_app-c78c03de4fbfbec5.js",revision:"c78c03de4fbfbec5"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/app-development-3e09ae7218c5cc85.js",revision:"3e09ae7218c5cc85"},{url:"/_next/static/chunks/pages/contact-7cb144a24b3ba10b.js",revision:"7cb144a24b3ba10b"},{url:"/_next/static/chunks/pages/digital-marketing-4d65e28092645d4f.js",revision:"4d65e28092645d4f"},{url:"/_next/static/chunks/pages/index-e3918c0a6327d269.js",revision:"e3918c0a6327d269"},{url:"/_next/static/chunks/pages/legal-notices-944a2501d5887e79.js",revision:"944a2501d5887e79"},{url:"/_next/static/chunks/pages/search-engine-optimization-224047b893a9cfe7.js",revision:"224047b893a9cfe7"},{url:"/_next/static/chunks/pages/web-design-f68bc1553644ebe6.js",revision:"f68bc1553644ebe6"},{url:"/_next/static/chunks/pages/work-portfolio-5687aeaab9c9899b.js",revision:"5687aeaab9c9899b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c121b62615c89e4c.js",revision:"c121b62615c89e4c"},{url:"/_next/static/css/17f0d613640b4042.css",revision:"17f0d613640b4042"},{url:"/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/qL8ChaaxZ1N0JvS9jswgi/_buildManifest.js",revision:"ab47a915606a63b77fcf77615ff236bd"},{url:"/_next/static/qL8ChaaxZ1N0JvS9jswgi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/analytics/comprehensive-reporting.avif",revision:"aadff01680139fa2c2244f7953bf8bb7"},{url:"/analytics/customer-aquisition.avif",revision:"a362c73e7476e150fdad0783af99ce53"},{url:"/analytics/deep-learning.avif",revision:"1e30ffd1d1b93fccd87729a67374e680"},{url:"/analytics/merchandising-seo.avif",revision:"1be558eeddcc89b32bd5011c1db25f1d"},{url:"/analytics/seo-audit.avif",revision:"11ac6e9ed20d20e60f1f9bf3537b2087"},{url:"/android-chrome-192x192.png",revision:"24180eb1a5ce17592198bff55a30418f"},{url:"/android-chrome-512x512.png",revision:"271cdee67fbeb0b7982823ddd1d56c37"},{url:"/bgk/app-dark.svg",revision:"0932a981c319edc0bfa625fcf4412436"},{url:"/bgk/app-light.svg",revision:"6845719de06c3ab5d1d33ec597161706"},{url:"/bgk/app-red-dark.svg",revision:"090d4ad1092ec3ac287c81f287aa63b3"},{url:"/bgk/artifacts.svg",revision:"4beabe41ff5216311820390af9f0a19f"},{url:"/bgk/cicd.svg",revision:"e67a00ab5e5050e054e7a043f73be49d"},{url:"/bgk/code-search-dark-red.svg",revision:"568476510108990957ffd14d67c1926e"},{url:"/bgk/code-search-dark.svg",revision:"055816f6db6fed782bb66baaa9b8f1b9"},{url:"/bgk/code-search-gradient.svg",revision:"3dd2d8e821b75bebfa906be6bb5cb84b"},{url:"/bgk/code-search-light.svg",revision:"bccf9401ea36e91c87507d37028d5efd"},{url:"/bgk/dapp-dark-red.svg",revision:"a9bfefac1b682fe6a3afa23625dab644"},{url:"/bgk/dapp-dark.svg",revision:"f1959ef1aa348cd361a014cfc8e7746b"},{url:"/bgk/design-dark-red.svg",revision:"51fbf4d404f203284c1cbb7b7e06d72c"},{url:"/bgk/design-dark.svg",revision:"30155a7e01bd5fe281be22724c636a16"},{url:"/bgk/design-light.svg",revision:"5150dbb64db1d53c331787de05880d3f"},{url:"/bgk/ethereum-dark-red.svg",revision:"0ab3091629e1008557396401983b8455"},{url:"/bgk/ethereum-dark.svg",revision:"02c5b110c3ef2e047f5d07770608922e"},{url:"/bgk/ethereum-light.svg",revision:"cdb20dd0daf3e8509d31f8d232ea1a7f"},{url:"/bgk/glows/1.svg",revision:"32da57c6508bed616ecfb90867f585ce"},{url:"/bgk/glows/2.svg",revision:"adb785789f729cd51f7e7232c6c05559"},{url:"/bgk/glows/3.svg",revision:"8d48b1142ccf850e90185f9df5d31d5b"},{url:"/bgk/glows/4.svg",revision:"7cd46f297abb09a56b483735bef97b04"},{url:"/bgk/gradient/highlight.svg",revision:"dbed322c90addeca6ed9e5d5e52c3444"},{url:"/bgk/grid/grid1.svg",revision:"4694b0acdaca5a490539bd64377d4909"},{url:"/bgk/grid/grid2.svg",revision:"35f2ffceca17baaeba5e0f0e0a95934e"},{url:"/bgk/grid/grid3.svg",revision:"6ec60b99de028f6369ca6c46496c3ced"},{url:"/bgk/insights-light.svg",revision:"f5473c80f1d1fbcd168a961f0628ebe4"},{url:"/bgk/insights.svg",revision:"accc4d6c093f01bba5f493e28a4d3d37"},{url:"/bgk/security-dark.svg",revision:"da5528d683774a1335e3711c85854c74"},{url:"/bgk/security-light.svg",revision:"1c7ffa5250bb7db1ad1216843722ebb1"},{url:"/bgk/seo-dark-red.svg",revision:"f431390f47111dc3c3f2a8d8a779d357"},{url:"/bgk/seo-dark.svg",revision:"8469d8134ac35f2feb13c02f57254039"},{url:"/bgk/stack-dark-red.svg",revision:"c42ede56608beca09de15bcc20b36daa"},{url:"/bgk/stack-dark.svg",revision:"0b8c727691fac322c66a9b55ec68cdd9"},{url:"/bgk/stack-light.svg",revision:"705e3b4580c9adb1a82abf6f8d0f5675"},{url:"/bgk/support-blue.svg",revision:"8edbaf67ab7843505ee65dc846d3d92c"},{url:"/bgk/support-dark.svg",revision:"34ec91d3428f43f71e8cf0666788e6d9"},{url:"/bgk/support-light.svg",revision:"38ccb19566c82480b5bd5afa038da66e"},{url:"/bgk/web-dark-red.svg",revision:"bff7fae067b20b5176b35eaf05afe5ad"},{url:"/bgk/web-dark.svg",revision:"eef5b808b4c3016a6f3ee20a880349bc"},{url:"/brand/b-logo.svg",revision:"9afa822cc7c52db87b0fa12518b33f11"},{url:"/brand/bdark.svg",revision:"5e78882d63bf5e3eb5a6a871209fdca2"},{url:"/brand/blight.svg",revision:"2539e326b491aa229f6f82a5170d7e20"},{url:"/brand/dark-small.png",revision:"a62e73699ddd4c4d75a2be7f4ad61985"},{url:"/brand/johnbuchanan.avif",revision:"256c64e0bbe1bcd60893c4e5f2270ee8"},{url:"/brand/light-small.png",revision:"48b7e72036be8ed68e2d8465aae66b11"},{url:"/browserconfig.xml",revision:"91489e9cf4a8c2844bc3dd24cb20e66a"},{url:"/content/bassnectar-unlimited.avif",revision:"246d5b3e7ada46542a6150a4c088d5cd"},{url:"/content/bassnectar-unlimited.png",revision:"a1f6a998ff96062afcceb73dbcebf00f"},{url:"/content/code.svg",revision:"ae804ce6edf8461c05d931bc3228df1d"},{url:"/content/comments.webp",revision:"61dd512ac7ed9dc02c79fc481da1f08a"},{url:"/content/commerce.avif",revision:"7a89ae4312d230a35d30c0de652cb205"},{url:"/content/frameworks/angular.svg",revision:"32e55d6d52b4199a8fa5cd9d484eab36"},{url:"/content/frameworks/ember.svg",revision:"62d7544674945dd89013425714213891"},{url:"/content/frameworks/gatsby.svg",revision:"fd46bd8b5c628afffe72ee59c97ba5da"},{url:"/content/frameworks/hugo.svg",revision:"faa2b7c44c1a589e43e26f155c565264"},{url:"/content/frameworks/nextjs.svg",revision:"c14648efdae27bf8b518c49160f5ecbd"},{url:"/content/frameworks/nuxt.svg",revision:"f3392fa86d0181039adfeb07cbb14f00"},{url:"/content/frameworks/react.svg",revision:"3070211662b495ed47926da82d14a05d"},{url:"/content/frameworks/svetle.svg",revision:"9c33edb037fc63d0b504220128c373bf"},{url:"/content/frameworks/vue.svg",revision:"ae27f8b1f2359c24ad92aa83435283e2"},{url:"/content/fshero.svg",revision:"a2896d404ba9cd8904154413a8bef77e"},{url:"/content/globe.avif",revision:"18b818c1b2fa7d238ff6904d8b19f0c5"},{url:"/content/middle-ware.avif",revision:"48c78e016a2472f7a259a90ead7956ef"},{url:"/content/mobile-gif.gif",revision:"4c99aa155165d64e5b48490d650dcb78"},{url:"/content/monitoring.avif",revision:"039c566c1bce7fa9889c071b8d80b1ab"},{url:"/content/people.svg",revision:"905bb326c0e890d34f447957bb2851f1"},{url:"/content/performance.svg",revision:"f5c836f0b2421d87e7fc1011ea04218c"},{url:"/content/place.svg",revision:"d07b1d09a6c5da6668c2fda815cff068"},{url:"/content/product.svg",revision:"3b842fe6e9279ea18030f23244be2787"},{url:"/content/productd.svg",revision:"f4ecd1ded857b070016f7acf6ff29eee"},{url:"/content/production-dark.svg",revision:"978cee52f2ff470ea02b602a4c03f45c"},{url:"/content/production-light.svg",revision:"a827e27d6e590d310e3bc3d60d66f099"},{url:"/content/productl.svg",revision:"10d5e4044b74def4df2b56223d8157fc"},{url:"/content/providers/Basin.svg",revision:"a2ca4834832f698642e2ddbe3d4fa143"},{url:"/content/providers/GraphQL.svg",revision:"8e2128fdd7d8524394467010e298a4bf"},{url:"/content/providers/ImgIX.svg",revision:"c6c8f6643abc68194c5d2887957fcf10"},{url:"/content/providers/algolia-v2.svg",revision:"14bb9823932b0f65574ed208a8dde21b"},{url:"/content/providers/algolia.svg",revision:"8bbc37e5a3968d767c1b4e2918591391"},{url:"/content/providers/auth0.svg",revision:"0646c60e393d86aeb74090fb92c7dfbf"},{url:"/content/providers/badge/netlify.svg",revision:"4bbcb83cce8d842e3d4ab5ba371b3cc6"},{url:"/content/providers/badge/nextjs.svg",revision:"77290cb72e77e00a3d8b335957636805"},{url:"/content/providers/badge/swc.svg",revision:"77ca740716bcd1e498a562abe45225a3"},{url:"/content/providers/badge/swr.svg",revision:"b7cc22f8c3e423ed41628d6b849e27ba"},{url:"/content/providers/badge/turborepo.svg",revision:"dde53b53c9b3dcc139afd1c7d364f5b3"},{url:"/content/providers/badge/webpack.svg",revision:"62c7428790cd96f4edab51911b836b38"},{url:"/content/providers/big-commerce-sketch.svg",revision:"5474b8a1b8f82601459d1f589c093999"},{url:"/content/providers/big-commerce.svg",revision:"a63e44b302e703e0c87d0cfc4d094534"},{url:"/content/providers/contentful-v2.svg",revision:"64b96c1459e22781825fda3936063c0c"},{url:"/content/providers/contentful.svg",revision:"9b9167e2d8de69ee110af6ddb4632e79"},{url:"/content/providers/dato-cms.svg",revision:"5cc48b559decfaf7865b8e4758b0d29b"},{url:"/content/providers/geist.svg",revision:"d0ea38ddca8c87fee8b588dead7f7115"},{url:"/content/providers/github.svg",revision:"a6bf8ec4e69fa509ea9f53cbabab33ba"},{url:"/content/providers/graphql-light.svg",revision:"3ee708889fd5c9aaab546d0bc85633e0"},{url:"/content/providers/graphql-logo.svg",revision:"4b228e1dac5a2c8704ce811b21b9bcbf"},{url:"/content/providers/graphql.svg",revision:"4b228e1dac5a2c8704ce811b21b9bcbf"},{url:"/content/providers/hasura.svg",revision:"f0d2d6680b1c6c142a8eb6f5016c8e86"},{url:"/content/providers/ipfs.svg",revision:"d527587c3a6405f9740d3b04835cb440"},{url:"/content/providers/netlify.svg",revision:"d396bdec7451a2ea5facbd12c4517bba"},{url:"/content/providers/nextjs.svg",revision:"f51e4ba7f079ce510251b1934f3c6e46"},{url:"/content/providers/nextlogo.svg",revision:"15b30b16c761b782fc5fa8e3a135e50f"},{url:"/content/providers/prisma.svg",revision:"1ab3a2c8c0727d82fb8dbb882e34ed4d"},{url:"/content/providers/prismic.svg",revision:"b240ec4addb50f36a1e34b931d3a1618"},{url:"/content/providers/radix.svg",revision:"77e37849a82fee7328f50e8fec69e795"},{url:"/content/providers/react.svg",revision:"af5ac4213104607bd26433ede364dc4d"},{url:"/content/providers/shopify-other.svg",revision:"2bae917a0eb8f4c375f853fe72da2a0e"},{url:"/content/providers/shopify.svg",revision:"42edb77bdea3c7627fc8b0f0517fd809"},{url:"/content/providers/stitches.svg",revision:"d6ed8414b6b092f9b1cd24b2ead9cf22"},{url:"/content/providers/stripe.svg",revision:"12362f5199b30e280219840186d23fd3"},{url:"/content/providers/svelte.svg",revision:"586d175523a62e63590361469946956e"},{url:"/content/providers/tailwindscss.svg",revision:"801c7d2ba2cca7c897df94ebb4a49b7c"},{url:"/content/providers/typescript.svg",revision:"5e2577694b7b82b6332526a976929330"},{url:"/content/providers/vercel.svg",revision:"46109414b8a8eb596056c828113b17d0"},{url:"/content/providers/wagmi.svg",revision:"99a164c46824239fb1942a658802125e"},{url:"/content/react.svg",revision:"33bc68394d59dea5e8c6d471c49f4bca"},{url:"/content/seo.svg",revision:"234ff15a8553692d19313e5f2e4a4c91"},{url:"/content/target-mobile.avif",revision:"d994917e17536ba4024bb2c99cf8ae39"},{url:"/content/tracks.avif",revision:"edf2697e8cbbef99e06cabd5a73328ae"},{url:"/content/wdhero.svg",revision:"0e8fbe653c273f89655e46c6436ca12e"},{url:"/favicon-16x16.png",revision:"3e75e5089827f621b16735d6fbd922a7"},{url:"/favicon-32x32.png",revision:"202c6cd47ca1837334ace0fe5ea894be"},{url:"/favicon.ico",revision:"3e75e5089827f621b16735d6fbd922a7"},{url:"/icons/bar.svg",revision:"68e323d41cce4c973e74885675468410"},{url:"/icons/blue/app-checklist.svg",revision:"76312ebdd60993dccd96896ec80168f5"},{url:"/icons/blue/backend.svg",revision:"48799999bfd7598bfa77020195c3dbfc"},{url:"/icons/blue/cicd.svg",revision:"7a554c5775c532d667126e4cb672f220"},{url:"/icons/blue/code-window.svg",revision:"012c2151584c805cf113e5a7d02d64e9"},{url:"/icons/blue/devops-blue.svg",revision:"6eac34c23db624bd4c0f45841bdcf492"},{url:"/icons/blue/matrix.svg",revision:"d91304b4ee98bea6182d2e50dcc7e0bf"},{url:"/icons/blue/protected.svg",revision:"c77bd4971dd04dd14b402ecf03738f46"},{url:"/icons/blue/status.svg",revision:"2fecbb1363b03bc4aa31b360387c1dd5"},{url:"/icons/blue/users.svg",revision:"22fe4b4bf0b5550f9ea159ebc85f0e59"},{url:"/icons/boost.svg",revision:"5f407af3689027af3487fc1cf97ca567"},{url:"/icons/check.svg",revision:"f387ab6667de7b3419b6401b9372363c"},{url:"/icons/code.svg",revision:"3fc2375d1674afa3c91f56cee565faf9"},{url:"/icons/command.svg",revision:"343617b2de5f12d85b829d16508e09c4"},{url:"/icons/cpu.svg",revision:"ba2e5c7bc2921713e2fe63c39a0fe09a"},{url:"/icons/design.svg",revision:"093b163162ac01ae8417c193102ed57b"},{url:"/icons/desktop.svg",revision:"b1c7854610d80de7f9fb4a473987928a"},{url:"/icons/ethereum.svg",revision:"e56144453e641397525665fceabe6f0b"},{url:"/icons/searchcheck.svg",revision:"ff11c69d5fdbc3ea51f59ccf9b352b3d"},{url:"/icons/searchcode.svg",revision:"0376f51ae7a399dde9ca2fc15eaceb8a"},{url:"/icons/security.svg",revision:"7c18f0110a52df2137fdedbcb78893e7"},{url:"/icons/stack.svg",revision:"557045fddeb0a05d1a14ca95fa7765dd"},{url:"/icons/support.svg",revision:"2ab72d88c7d50a8566053eb733c48980"},{url:"/icons/window.svg",revision:"f17f07225866b00d35774bfd045ca70d"},{url:"/isotipo.png",revision:"26aecd3a2e875f07abdc15f57d031760"},{url:"/isotipo.svg",revision:"920add063dba830d812fb8ec9910f0ab"},{url:"/manifest.json",revision:"ee57811f102b0878aaf19dcf507ee6c9"},{url:"/noflash.js",revision:"5731f441aa27ae0e007ac5305a930794"},{url:"/portfolio/favicon.ico",revision:"3e75e5089827f621b16735d6fbd922a7"},{url:"/portfolio/port-1.avif",revision:"8be6f7fbca060191a9659ad39680fbec"},{url:"/portfolio/port-10.avif",revision:"cc9c309fecdef75543a7f37f66c26488"},{url:"/portfolio/port-11.avif",revision:"4a55d33bd1345332a2f6a5c1fe7e5a22"},{url:"/portfolio/port-12.avif",revision:"6b2f1e39fc0022646f7af512752403a0"},{url:"/portfolio/port-13.avif",revision:"78b82046ccf7e11fef628691ca16e88f"},{url:"/portfolio/port-14.avif",revision:"03a5acc184ca1912dfab869cab29c194"},{url:"/portfolio/port-15.avif",revision:"05abdbd52e6e5d8d8d0c22a7c510f03a"},{url:"/portfolio/port-17.avif",revision:"fb1d4182f21043e5b18dc245180e2b43"},{url:"/portfolio/port-2.avif",revision:"d814bfbcc30f316d0d457f375b1f48fe"},{url:"/portfolio/port-3.avif",revision:"7a513b58e5706dfed7899e43ec3f5df4"},{url:"/portfolio/port-4.avif",revision:"c3ec695e3cb6f6c9c6975eb1929a27c0"},{url:"/portfolio/port-5.avif",revision:"51d36dab8f67e2b208f9563cc2a9eec1"},{url:"/portfolio/port-6.avif",revision:"c3024805af240bd01aabb0c902d42d72"},{url:"/portfolio/port-7.avif",revision:"efdcb8220923566b02c7bbefdc121ad1"},{url:"/portfolio/port-8.avif",revision:"54bef952c51709d0029161519a771d47"},{url:"/portfolio/port-9.avif",revision:"457f65d7ae6798e699ecacf42d1487f4"},{url:"/robots.txt",revision:"88210a2acc1b0a97be0d62a856816bf8"},{url:"/safari-pinned-tab.svg",revision:"e53be28585add5c5d401ef3323cb15cb"},{url:"/twitter-cards/Buchanan_DevOps_SEO_Twitter_Card.avif",revision:"c1d23817031db8b0cc3353c24aca7c7b"},{url:"/unlimited.svg",revision:"d3101e78a80ef2501b85942c66f39566"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:i,state:s})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
