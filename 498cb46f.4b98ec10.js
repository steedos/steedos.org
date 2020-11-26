(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(96)),c={title:"Metadata"},i={unversionedId:"metadata/metadata",id:"metadata/metadata",isDocsHomePage:!1,title:"Metadata",description:"This is the base class for all metadata types. You cannot edit this object. A component is an instance of a metadata type.",source:"@site/docs/metadata/metadata.md",slug:"/metadata/metadata",permalink:"/docs/metadata/metadata",editUrl:"https://github.com/steedos/steedos-platform/edit/master/docs/metadata/metadata.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Object",permalink:"/docs/metadata/object/summary"}},s=[{value:"Fields",id:"fields",children:[{value:"name",id:"name",children:[]}]}],m={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is the base class for all metadata types. You cannot edit this object. A component is an instance of a metadata type.\nMetadata is analogous to sObject, which represents all standard objects. Metadata represents all components and fields in Metadata API. Instead of identifying each component with an ID, each custom object or custom field has a unique name, which must be distinct from standard object names, as it must be when you create custom objects or custom fields in the Salesforce user interface."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"The field type is text."),Object(o.b)("p",null,"Required. The name of the component. If a field, the name must specify the parent object, for example ",Object(o.b)("inlineCode",{parentName:"p"},"Account.FirstName"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"__c suffix")," must be appended to custom object names and custom field names when you are setting the name. For example, a custom field in a custom object could have a name of ",Object(o.b)("inlineCode",{parentName:"p"},"MyCustomObject__c.MyCustomField__c"),"."),Object(o.b)("p",null,"To reference a component in a package, prepend the package\u2019s namespace prefix to the component name in the name field. Use the following syntax: ",Object(o.b)("inlineCode",{parentName:"p"},"namespacePrefix__ComponentName"),". For example, for the custom field component ",Object(o.b)("inlineCode",{parentName:"p"},"MyCustomObject__c.MyCustomField__c")," and the namespace ",Object(o.b)("inlineCode",{parentName:"p"},"MyNS"),", the full name is ",Object(o.b)("inlineCode",{parentName:"p"},"MyNS__MyCustomObject__c.MyCustomField__c"),"."))}l.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),l=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(f,i(i({ref:t},m),{},{components:n})):r.a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=n[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);