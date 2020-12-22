(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{120:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||r;return a?o.a.createElement(d,i(i({ref:t},s),{},{components:a})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(120)),l={title:"Logical Operators"},i={unversionedId:"formula/operator_logical",id:"formula/operator_logical",isDocsHomePage:!1,title:"Logical Operators",description:"= and = = (equal to)",source:"@site/docs/formula/operator_logical.md",slug:"/formula/operator_logical",permalink:"/docs/formula/operator_logical",editUrl:"https://github.com/steedos/steedos.org/tree/master/docs/formula/operator_logical.md",version:"current"},c=[{value:"= and = = (equal to)",id:"-and---equal-to",children:[]},{value:"&lt;&gt; And !=\uff08Not equal to\uff09",id:"-and-\uff08not-equal-to\uff09",children:[]},{value:"&lt;\uff08less than\uff09",id:"\uff08less-than\uff09",children:[]},{value:"&gt;\uff08greater than\uff09",id:"\uff08greater-than\uff09",children:[]},{value:"&lt;= (less than or equal)",id:"-less-than-or-equal",children:[]},{value:"&gt;=\uff08Greater than or equal to\uff09",id:"\uff08greater-than-or-equal-to\uff09",children:[]},{value:"&amp;&amp;\uff08And\uff09",id:"\uff08and\uff09",children:[]},{value:"||\uff08Or\uff09",id:"\uff08or\uff09",children:[]}],s={rightToc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"-and---equal-to"},"= and = = (equal to)"),Object(r.b)("p",null,"Calculates whether two values are equal. = and = = operators are interchangeable."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use:")," ",Object(r.b)("inlineCode",{parentName:"p"},"expression 1 = expression 2 or expression 1 = = expression 2"),"to replace each expression with a merged field, expression, or other numeric value."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"ExpiringDate = CreatedDate + 5\n")),Object(r.b)("p",null,"Returns true if the due date is equal to the sum of the record's creation date and five days."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"IF(Probability = 1, ROUND(Amount*0.02, 2), 0)\n")),Object(r.b)("p",null,"This formula is used to calculate the commission amount, and the Commission is calculated as 2% for business opportunities with 100% probability. The Commission value for all other opportunities is zero."),Object(r.b)("p",null,"Opportunities with a 90% probability will not receive commission."),Object(r.b)("p",null,"Opportunities with 100% probability and $100000 amount will receive a commission of $2000."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Do not use this function for null comparisons, such as MyDateTime__c == null.Instead, use ",Object(r.b)("inlineCode",{parentName:"p"},"ISBLANK"),". "))),Object(r.b)("h2",{id:"-and-\uff08not-equal-to\uff09"},"<",">"," And !=\uff08Not equal to\uff09"),Object(r.b)("p",null,"Calculates whether two values are not equal."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use:")," ",Object(r.b)("inlineCode",{parentName:"p"},"expression 1 <> expression 2")," or ",Object(r.b)("inlineCode",{parentName:"p"},"expression 1 != expression 2"),"to replace each expression with a merged field, expression, or other numeric value."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'IF(Maint_Amount__c + Services_Amount__c <> Amount,\n\xa0"DISCOUNTED", "FULL PRICE")\n')),Object(r.b)("p",null,'If the sum of the maintenance amount and service amount of the product is not equal to the product amount, this formula will show "DISCOUNTED" (discounted amount) on the product.Otherwise, show "FULL PRICE" (full price).Note that this example uses two custom amount fields for Maint Amount and Services Amount.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Do not use this function for null comparisons, such as MyDateTime__c != null.Instead, use ",Object(r.b)("inlineCode",{parentName:"p"},"ISBLANK"),"."))),Object(r.b)("h2",{id:"\uff08less-than\uff09"},"<\uff08less than\uff09"),Object(r.b)("p",null,"Calculates whether a value is less than the value following this symbol."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use:")," ",Object(r.b)("inlineCode",{parentName:"p"},"Value 1 < Value 2"),",Replace each value with a merged field, expression, or other numeric value."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"IF(AnnualRevenue < 1000000, 1, 2)\n")),Object(r.b)("p",null,'Give a value of "1" to income less than one million and a value of "2" to income greater than one million.'),Object(r.b)("h2",{id:"\uff08greater-than\uff09"},">","\uff08greater than\uff09"),Object(r.b)("p",null,"Calculates whether a value is greater than the value following this symbol."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use:")," ",Object(r.b)("inlineCode",{parentName:"p"},"Value 1 > Value 2"),",Replace each value with a merged field, expression, or other numeric value."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'IF(commission__c > 1000000, "High Net Worth", "General")\n')),Object(r.b)("p",null,"Give a commission of more than one million dollars to the High Net Worth value.Note that this is a text formula field using a commission custom field."),Object(r.b)("h2",{id:"-less-than-or-equal"},"<= (less than or equal)"),Object(r.b)("p",null,"Calculates whether a value is less than or equal to the value following this symbol."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use:")," ",Object(r.b)("inlineCode",{parentName:"p"},"Value 1 <= Value 2"),",Replace each value with a merged field, expression, or other numeric value."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"IF(AnnualRevenue <= 1000000, 1, 2)\n")),Object(r.b)("p",null,'Give a value of "1" to income less than or equal to one million and a value of "2" to income greater than one million.'),Object(r.b)("h2",{id:"\uff08greater-than-or-equal-to\uff09"},">","=\uff08Greater than or equal to\uff09"),Object(r.b)("p",null,"Calculates whether a value is greater than or equal to the value following this symbol."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use:")," ",Object(r.b)("inlineCode",{parentName:"p"},"Value 1>= Value 2"),",Replace each value with a merged field, expression, or other numeric value."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'IF(Commission__c >= 1000000, "YES", "NO")\n')),Object(r.b)("p",null,'Give a commission of more than or equal to one million yuan with the value "YES".Note that this is a text formula field using the Custom Currency Field Commission.'),Object(r.b)("h2",{id:"\uff08and\uff09"},"&&\uff08And\uff09"),Object(r.b)("p",null,"Evaluates whether both values or expressions are true. Use this operator as an alternative to the logical function and."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use\uff1a")," ",Object(r.b)("inlineCode",{parentName:"p"},"\uff08logic 11\uff09&&\uff08logic 22\uff09"),", and replace logic 1 and logic 2 with the value or expression you want to evaluate."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"IF((Price<100 && Quantity<5),\u201cSmall\u201d, null)\n")),Object(r.b)("p",null,'If the price is less than 100 and the quantity is less than five, the formula displays "small". Otherwise, this field is empty.'),Object(r.b)("h2",{id:"\uff08or\uff09"},"||\uff08Or\uff09"),Object(r.b)("p",null,"Evaluates whether at least one of multiple values or expressions is true. Use this operator as an alternative to the logical function or."),Object(r.b)("p",null,"Replace any number of logical references with the value or expression you want to evaluate."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return value:")," Boolean"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'IF(Priority = "High" || Status = "New", ROUND(NOW()-CreatedDate, 0), null)\n')),Object(r.b)("p",null,'If the Status of the case is "new" or the Priority is "High", the formula returns the number of days the case has not been processed. If the case is open today, the field displays zero.'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"(Discount_Rate__c < 0) || (Discount_Rate__c > 0.40)\n")),Object(r.b)("p",null,'When the value of the custom field discount rate is not between 0 and 40%, the validation rule formula displays the following error message: "discount rate cannot exceed 40%.". )'))}u.isMDXComponent=!0}}]);