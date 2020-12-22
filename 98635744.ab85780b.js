(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.a.createElement(f,s(s({ref:t},p),{},{components:n})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(120)),o={title:"Permission Set"},s={unversionedId:"metadata/permission_set",id:"metadata/permission_set",isDocsHomePage:!1,title:"Permission Set",description:"Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.",source:"@site/docs/metadata/permission_set.md",slug:"/metadata/permission_set",permalink:"/docs/metadata/permission_set",editUrl:"https://github.com/steedos/steedos.org/tree/master/docs/metadata/permission_set.md",version:"current",sidebar:"someSidebar",previous:{title:"Report",permalink:"/docs/metadata/report"},next:{title:"Profile",permalink:"/docs/metadata/profile"}},c=[{value:"Declarative Metadata File Suffix and Directory Location",id:"declarative-metadata-file-suffix-and-directory-location",children:[]},{value:"Declarative Metadata Sample Definition",id:"declarative-metadata-sample-definition",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access."),Object(i.b)("p",null,"This type extends the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"metadata"}),"Metadata")," metadata type and inherits its name field."),Object(i.b)("h2",{id:"declarative-metadata-file-suffix-and-directory-location"},"Declarative Metadata File Suffix and Directory Location"),Object(i.b)("p",null,"The file suffix is ",Object(i.b)("inlineCode",{parentName:"p"},"permissionset"),". There is one file for each permission set, stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"permissionsets")," folder in the corresponding package directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"my-app\n\u251c\u2500\u2500 steedos-app/main/default\n\u251c\u2500\u2500 ...\n// highlight-start\n\u2502\xa0\xa0 \u2514\u2500\u2500 permissionsets\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 contract_manager.permissionset.yml\n// highlight-end\n\u251c\u2500\u2500 ...\n")),Object(i.b)("h2",{id:"declarative-metadata-sample-definition"},"Declarative Metadata Sample Definition"),Object(i.b)("p",null,"When adding or changing a permission set, you don't need to include all permissions\u2014you only need to include the permissions you're adding or changing."),Object(i.b)("p",null,"Every user may have more than one permission set, for example, that means that a user may belong to both the contract manager and the organization manager."),Object(i.b)("p",null,"A sample yml definition of a permission set for the contract managers is shown below."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml",metastring:'title="my-app/steedos-app/main/default/permissionsets/contract_manager.permissionset.yml"',title:'"my-app/steedos-app/main/default/permissionsets/contract_manager.permissionset.yml"'}),"name: contract_manager\nlabel: Contract Managers\nlicense: platform\ndescription: A collection of privileges for a contract manager.\n")))}l.isMDXComponent=!0}}]);