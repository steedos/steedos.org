(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),l=(a(0),a(120)),i={title:"Build a Formula Field"},o={unversionedId:"formula/create",id:"formula/create",isDocsHomePage:!1,title:"Build a Formula Field",description:"How to build formula fields",source:"@site/docs/formula/create.md",slug:"/formula/create",permalink:"/docs/formula/create",editUrl:"https://github.com/steedos/steedos-platform/edit/master/docs/formula/create.md",version:"current",sidebar:"someSidebar",previous:{title:"Calculate Field Values With Formulas",permalink:"/docs/formula/summary"},next:{title:"Roll-Up Summary Field",permalink:"/docs/formula/summary_field"}},c=[{value:"How to build formula fields",id:"how-to-build-formula-fields",children:[]},{value:"Recalculate formula value",id:"recalculate-formula-value",children:[]},{value:"Tips for using date and datetime formula fields",id:"tips-for-using-date-and-datetime-formula-fields",children:[]},{value:"Tips for using numeric formula fields",id:"tips-for-using-numeric-formula-fields",children:[]},{value:"Tips for using text formula fields",id:"tips-for-using-text-formula-fields",children:[]},{value:"Tips on cross-object formulas",id:"tips-on-cross-object-formulas",children:[]},{value:"Tips about formula cascade trigger",id:"tips-about-formula-cascade-trigger",children:[]}],u={rightToc:c};function s(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"how-to-build-formula-fields"},"How to build formula fields"),Object(l.b)("p",null,Object(l.b)("img",{alt:"How_to_build_formula_fields",src:a(169).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Start building a formula field in the same way as creating a custom field, and select the formula for the field type."),Object(l.b)("li",{parentName:"ul"},"Select the data type of the formula. Select the appropriate data type for your formula based on the calculated output value."),Object(l.b)("li",{parentName:"ul"},"Select the number of decimal places for the numeric, amount, or percentage data type. The length of the number is up to 18 digits."),Object(l.b)("li",{parentName:"ul"},"If your formula references any number, amount, or percentage fields, you should select an option to handle blank fields."),Object(l.b)("li",{parentName:"ul"},'You can refer to the "Related Table" or "Main Table/Sub Table" field on the current object in the formula to implement cross-object formulas.'),Object(l.b)("li",{parentName:"ul"},"You can enter _id in the formula to refer to the id value of the current record."),Object(l.b)("li",{parentName:"ul"},"You can enter the $user variable in the formula to refer to the relevant information of the currently logged in user."),Object(l.b)("li",{parentName:"ul"},"You can also enter the formula field description in the description box, and click Save to complete the operation.")),Object(l.b)("h2",{id:"recalculate-formula-value"},"Recalculate formula value"),Object(l.b)("p",null,'For the existing historical data, the formula field value will not be recalculated in many cases. In this case, you should select the "Recalculate Formula Value" button on the detailed configuration page of the formula field background to manually recalculate the value. These situations include but are not limited to the following situations:'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Change the definition of formula fields (such as decimal places, formula content, data type, blank field handling, etc.)."),Object(l.b)("li",{parentName:"ul"},"Change the related attributes of the referenced field in the formula content, such as changing its field type, decimal places, and changing the data type, formula expression or other attributes of its formula field.")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"prompt")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},'In a formal environment, please be careful to modify certain field properties of the object, such as field type, field formula expression, drop-down selection box option list, etc., because the existing historical data may not trigger the recalculation of the field value again. For formula field values, historical data can only be corrected by manually operating the "recalculate formula value" button here.'))),Object(l.b)("h2",{id:"tips-for-using-date-and-datetime-formula-fields"},"Tips for using date and datetime formula fields"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Date and datetime fields cannot be used interchangeably. The name itself cannot indicate whether a field is a date or a datetime. For example, the creation date and the last modification date are date time fields, and the last activity date is a date field. Use the DATEVALUE function to convert a datetime field to a date field.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Use addition and subtraction operators in conjunction with date or datetime fields to calculate duration. For example, subtract one date from another date to calculate the number of days between the two. Similarly, you can subtract one date and time from another date and time to get the number of days between the two in numbers.For recommended usage, see",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/formula/function_date#now"}),"NOW")," OR ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/formula/function_date#today"}),"TODAY"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Combine addition and subtraction operators with numbers to return other dates or datetimes. E.g,",Object(l.b)("inlineCode",{parentName:"p"},"CreatedDate + 5")," Calculate the date and time five days after the creation date of the record. Note that the data type returned by the expression is the same as the given data type; the date field plus or minus a number will return the date, and the date time field plus or minus a number will return the date and time. ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"When using decimals to calculate dates, the formula ignores all numbers after the decimal point. E.g:")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," formula",Object(l.b)("inlineCode",{parentName:"em"},"TEXT(TODAY())"),"Will return today's date string, such as2020-09-30, TODAY is to get the date according to utc time, which is the same as TODAY()."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," The formula ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 1")," will return the date value of today's date + 1 day, that is, you can directly use the + sign to run the calculation."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," The formula ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 0.7")," will return today\u2019s date value instead of +1 day\u2019s date value, because the decimal part will be ignored during date calculation and only the integer part will be taken. The formula ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 1.2")," will return today\u2019s date +1 day date value."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," The formula ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 1.5 + 0.5")," or ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 0.5 + 1.5")," will return the current day's date + 1 day instead of +2 days of the date value, because all decimals will be ignored when calculating the date. Will accumulate. The correct way to write is to use parentheses to calculate the value first: ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + (1.5 + 0.5)"),"."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," The formula ",Object(l.b)("inlineCode",{parentName:"em"},"NOW() + 1.1")," will return the time value after the current time is increased by 1.1 days, that is, 1 day, 2 hours and 24 minutes (1 day 0.1). In other words, the time type supports decimal point calculation, and the unit is day."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," The formula ",Object(l.b)("inlineCode",{parentName:"em"},"T1-T2"),", if the difference between the above two date and time field values is 5.52, it means that the two values are separated by 5 days, 12 hours (0.5 for 1 day) and 28 minutes (0.02 for 1 day)."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"To calculate the value of two decimals first, you should use parentheses to group them together. E.g:")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 0.5 + 0.5")," is the same as ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 0 + 0"),", which is today\u2019s date."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + (0.5+0.5)")," is the same as ",Object(l.b)("inlineCode",{parentName:"em"},"TODAY() + 1")," ,which is tomorrow\u2019s date."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"For time zone, please refer to","[Use date, datetime, and time values in formulas]","(/help/formula/date#Use date, datetime, and time values in formulas)"))),Object(l.b)("h2",{id:"tips-for-using-numeric-formula-fields"},"Tips for using numeric formula fields"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When using a percentage field in a formula, use the decimal form of the percentage. E.g,",Object(l.b)("inlineCode",{parentName:"li"},"IF(Probability =1...)")," Means 100% probability,",Object(l.b)("inlineCode",{parentName:"li"},"IF(Probability =0.9...)"),"Means 90% probability."),Object(l.b)("li",{parentName:"ul"},"Reference the auto-number field as a text field in the formula."),Object(l.b)("li",{parentName:"ul"},"The output value of your formula must be less than 18 digits."),Object(l.b)("li",{parentName:"ul"},"The formula can contain a mixture of numbers, percentages and currencies:",Object(l.b)("inlineCode",{parentName:"li"},"AnnualRevenue / NumberOfEmployees"),"."),Object(l.b)("li",{parentName:"ul"},"When the formula is calculated, other fields referenced by the formula are passed in as variables and when the formula field is displayed on the Huayan Cube interface, the decimal places set on the field will be recognized and the formula field value will be processed by the rounding rule. For example, 12.345 becomes 12.35 and \u221212.345 becomes -12.35. But the output value of the formula field itself is not affected by the number of decimal places set here, so it should be used in the formula."),Object(l.b)("li",{parentName:"ul"},"ROUND function to deal with the number of decimal places of the calculation result."),Object(l.b)("li",{parentName:"ul"},'To treat any blank field as a zero value, select Treat blank fields as zero. To leave these fields blank, please choose to treat blank fields as blanks.In the low code of Huayan Cube, this attribute defaults to "blank fields as zero".')),Object(l.b)("h2",{id:"tips-for-using-text-formula-fields"},"Tips for using text formula fields"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'To insert text in the formula field, enclose the text in quotation marks. For example, to display "CASE: 123", use this formula ',Object(l.b)("inlineCode",{parentName:"li"},'"CASE: "& CaseNumber__c.')),Object(l.b)("li",{parentName:"ul"},"Use the backslash (",")"," character before the quotation mark or backslash to insert it as a literal value in your output value. For example, ",Object(l.b)("inlineCode",{parentName:"li"},'"Trouble\\ \\Case \\"Ticket\\": \u201d')," in the formula will display ",Object(l.b)("inlineCode",{parentName:"li"},'Trouble\\Case "Ticket":')," on the detailed information page (not currently supported, that is, it is currently not possible to write quoted or reverse Slashed string)")),Object(l.b)("h2",{id:"tips-on-cross-object-formulas"},"Tips on cross-object formulas"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'A cross-object formula is a formula that spans two related objects and references merge fields on these objects. If the object is on the side of the child table of the "main table/child table", the cross-object formula can reference the merge field from the main ("parent") object. Cross-object formulas can also be used with "related tables".'),Object(l.b)("li",{parentName:"ul"},"Cross-object formulas can be used wherever formulas are used."),Object(l.b)("li",{parentName:"ul"},"The formula cannot include objects as reference fields. To refer to an object, refer to the _id field of the object or another field on the object. For example, ",Object(l.b)("inlineCode",{parentName:"li"},"account.owner")," is invalid because it directly refers to the object. ",Object(l.b)("inlineCode",{parentName:"li"},"account.owner.name")," or ",Object(l.b)("inlineCode",{parentName:"li"},"account.owner._id")," are valid references for formulas."),Object(l.b)("li",{parentName:"ul"},"Cross-object formulas can only start from a certain field of the object where the formula is located, that is, they cannot reference unrelated object fields."),Object(l.b)("li",{parentName:"ul"},"Please use dot notation to connect each object field to form a reference chain. Theoretically, unlimited levels of references are supported, but for performance reasons, please avoid too many reference levels.\nYou can enter the ",Object(l.b)("inlineCode",{parentName:"li"},"$user")," variable in the formula to refer to the relevant information of the currently logged in user. As a cross-object formula, you should also use dot notation to extend the reference chain. ",Object(l.b)("inlineCode",{parentName:"li"},"$user")," points to ",Object(l.b)("inlineCode",{parentName:"li"},"space_users")," table instead of ",Object(l.b)("inlineCode",{parentName:"li"},"users")," table, so you can only extend its reference chain from related fields in the ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/steedos/steedos-platform/blob/master/packages/standard-objects/space_users.object.yml"}),"space_users")," object, such as ",Object(l.b)("inlineCode",{parentName:"li"},"$user.organization.owner.name"),".",".")),Object(l.b)("h2",{id:"tips-about-formula-cascade-trigger"},"Tips about formula cascade trigger"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In the case that a formula field A is referenced by another formula field B, when the update recalculation of field A is triggered for some reason, the cascade triggers the update recalculation of formula field B."),Object(l.b)("li",{parentName:"ul"},"When there are multiple cascading references between multiple formula fields, if one of the fields is triggered to update and recalculate, the cascading update and recalculation will be triggered layer by layer."),Object(l.b)("li",{parentName:"ul"},"If the cumulative summary field summarizes a formula field, when the formula field value changes, the summary field will be triggered to re-summarize the updated value."),Object(l.b)("li",{parentName:"ul"},"If the cumulative summary field is referenced by a formula field, then when the summary field is updated, it will also trigger the formula field update recalculation.")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"prompt")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If there are circular references between formula fields, Huayan Cube can intelligently identify and prevent relevant field configurations from taking effect."))))}s.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(i,".").concat(m)]||d[m]||b[m]||l;return a?n.a.createElement(f,o(o({ref:t},u),{},{components:a})):n.a.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},169:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/field-70bd08160b338bf7e24ac9efb5a4aedb.png"}}]);