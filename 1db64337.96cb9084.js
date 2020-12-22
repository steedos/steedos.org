(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{120:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return o?r.a.createElement(b,c(c({ref:t},s),{},{components:o})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},70:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return d}));var n=o(3),r=o(7),a=(o(0),o(120)),i={title:"Steedos Platform Overview",sidebar_label:"Overview"},c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Steedos Platform Overview",description:"Steedos Platform is an Open Source Low-Code Development Platform in nodejs and mongodb.",source:"@site/docs/overview.md",slug:"/overview",permalink:"/docs/overview",editUrl:"https://github.com/steedos/steedos.org/tree/master/docs/overview.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/installation"}},l=[{value:"Click, Not Code",id:"click-not-code",children:[]},{value:"Steedos Metadata",id:"steedos-metadata",children:[]}],s={rightToc:l};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Steedos Platform is an Open Source Low-Code Development Platform in nodejs and mongodb."),Object(a.b)("h2",{id:"click-not-code"},"Click, Not Code"),Object(a.b)("p",null,"We live in a digital world. To keep up with employee and customer expectations, innovation through technology is increasingly becoming a nonnegotiable. "),Object(a.b)("p",null,"To accomplish your goals, there are two types of programming you can turn to: imperative programming and declarative programming. Both have benefits, but how do you figure out which is best for you? First, it\u2019s important to understand the difference between them."),Object(a.b)("p",null,"Imperative programming, otherwise known as traditional or code-oriented programming, denotes the means of programming by using certain coding languages \u2014 such as C#, C++, Java, and so on \u2014 to tell a computer exactly how to perform an action. This requires a skilled developer with programming knowledge. This developer will build the application brick by brick using blocks of code, usually in a terminal window or some other highly specialized development environment."),Object(a.b)("p",null,"On the other hand, declarative programming accomplishes the same results by basically telling the computer the end result and letting the computer figure out how to get there. In simpler terms, declarative programming denotes the kind of click or drag-and-drop solutions that allow someone without coding knowledge to build an application. The blocks of code are prewritten and packaged into components that you can just select as needed."),Object(a.b)("h2",{id:"steedos-metadata"},"Steedos Metadata"),Object(a.b)("p",null,"Metadata is core to the Steedos infrastructure. Metadata are core components or features in Steedos. Without Metadata most of the magic just isn\u2019t possible!"),Object(a.b)("p",null,"Metadata relates to the fields, configurations, code, logic, and page layouts that go into building the information architecture and look and feel of your Steedos environment."),Object(a.b)("p",null,"Metadata can be imported into Steedos, modified in the product interface, or manipulated via the Steedos Metadata API."),Object(a.b)("p",null,"There are several types of Metadata, with each one representing a unique way a business function can be customized. Here are a few broad categories for Metadata types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Data: the core components of the data structure on which most customization is built. E.g. Custom Objects, Fields, and Custom Apps."),Object(a.b)("li",{parentName:"ul"},"Programmability: custom code developed on top of the platform. E.g. Buttons, Form Events, Triggers."),Object(a.b)("li",{parentName:"ul"},"Presentation: customization on how users interact with the platform. E.g. Components, List View and Page Layouts.")),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/metadata/metadata"}),"Metadata")," for more information."))}d.isMDXComponent=!0}}]);