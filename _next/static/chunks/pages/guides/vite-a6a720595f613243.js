(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55743],{43891:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/vite",function(){return t(71225)}])},71225:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t(52322),i=t(45392),r=t(79016),a=t(33638);let o=(0,r.A)(a.us.Vite);function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{GetTemplates:t,InstallScript:r,NpmScript:a,PackagesInstallation:o}=n;return t||l("GetTemplates",!0),r||l("InstallScript",!0),a||l("NpmScript",!0),o||l("PackagesInstallation",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usage-with-vite",children:"Usage with Vite"}),"\n",(0,s.jsx)(t,{type:"vite"}),"\n",(0,s.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,s.jsxs)(n.p,{children:["Follow ",(0,s.jsx)(n.a,{href:"https://vitejs.dev/guide/",children:"Vite getting started"})," guide to create new Vite application:"]}),"\n",(0,s.jsx)(a,{yarnScript:"yarn create vite",npmScript:"npm create vite@latest"}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,s.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,s.jsx)(r,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"postcss.config.cjs"})," file at the root of your application with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Add styles imports and ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," to your application root component (usually ",(0,s.jsx)(n.code,{children:"App.tsx"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { MantineProvider } from '@mantine/core';\n\nexport default function App() {\n  return <MantineProvider>{/* Your app here */}</MantineProvider>;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})})}function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=43891)}),_N_E=e.O()}]);