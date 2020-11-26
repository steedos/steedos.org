(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(97)),o={title:"Profile"},l={unversionedId:"metadata/profile",id:"metadata/profile",isDocsHomePage:!1,title:"Profile",description:"Represents a user profile. A profile defines a user\u2019s permission to perform different functions within Steedos.",source:"@site/docs/metadata/profile.md",slug:"/metadata/profile",permalink:"/docs/metadata/profile",editUrl:"https://github.com/steedos/steedos-platform/edit/master/docs/metadata/profile.md",version:"current"},c=[{value:"Declarative Metadata File Suffix and Directory Location",id:"declarative-metadata-file-suffix-and-directory-location",children:[]},{value:"Declarative Metadata Sample Definition",id:"declarative-metadata-sample-definition",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Represents a user profile. A profile defines a user\u2019s permission to perform different functions within Steedos."),Object(i.b)("p",null,"This type extends the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"metadata"}),"Metadata")," metadata type and inherits its name field."),Object(i.b)("h2",{id:"declarative-metadata-file-suffix-and-directory-location"},"Declarative Metadata File Suffix and Directory Location"),Object(i.b)("p",null,"The file suffix is ",Object(i.b)("inlineCode",{parentName:"p"},".profile"),". There is one file for each profile, stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"profiles")," folder in the corresponding package directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"my-app\n\u251c\u2500\u2500 steedos-app/main/default\n\u251c\u2500\u2500 ...\n// highlight-start\n\u2502\xa0\xa0 \u2514\u2500\u2500 profiles\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 customer.profile.yml\n// highlight-end\n\u251c\u2500\u2500 ...\n")),Object(i.b)("h2",{id:"declarative-metadata-sample-definition"},"Declarative Metadata Sample Definition"),Object(i.b)("p",null,"When adding or changing a profile, you should to include all permissions\u2014you need to include the permissions you're adding or changing."),Object(i.b)("p",null,"One user can and must have only one profile."),Object(i.b)("p",null,"A sample yml definition of a profile for the customer is shown below."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml",metastring:'title="my-app/steedos-app/main/default/profiles/customer.profile.yml"',title:'"my-app/steedos-app/main/default/profiles/customer.profile.yml"'}),"name: customer\nlabel: Customer\nlicense: community\ndescription: A collection of permissions and profile for a customer.\n")))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),u=r,m=f["".concat(o,".").concat(u)]||f[u]||d[u]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);