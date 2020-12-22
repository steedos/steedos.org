(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{120:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var l=a(0),i=a.n(l);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,n=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(a),b=l,h=d["".concat(n,".").concat(b)]||d[b]||m[b]||r;return a?i.a.createElement(h,o(o({ref:t},s),{},{components:a})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,n=new Array(r);n[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,n[1]=o;for(var s=2;s<r;s++)n[s]=a[s];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},166:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/summary-25ea738025b7fbea70954b1a20243ff4.png"},167:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/summary_field-5a0c16f64093277f2a09c77f6058f61c.png"},168:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/summary_filters-fffff7decadf8fc2f850b026fd863f1b.png"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var l=a(3),i=a(7),r=(a(0),a(120)),n={title:"Roll-Up Summary Field"},o={unversionedId:"formula/summary_field",id:"formula/summary_field",isDocsHomePage:!1,title:"Roll-Up Summary Field",description:"The Roll-Up summary field automatically calculates the value in the related record. You can create a Roll-Up summary field so that its value is based on the summary of the field value of a detail object in the Master Detail relationship, and display the summary result in the master object's record. The detail object's records must be directly related to the master object's record through the Master Detail field. For example, you want to display the total invoice amount of all related invoice custom object records in the customer's invoice related list. You can define this summary information in a custom amount field called \"Total Invoice Amount\".",source:"@site/docs/formula/summary_field.md",slug:"/formula/summary_field",permalink:"/docs/formula/summary_field",editUrl:"https://github.com/steedos/steedos.org/tree/master/docs/formula/summary_field.md",version:"current",sidebar:"someSidebar",previous:{title:"Build a Formula Field",permalink:"/docs/formula/create"},next:{title:"Using Date, DateTime, and Time Values in Formulas",permalink:"/docs/formula/date"}},c=[{value:"Create Roll-Up summary field",id:"create-roll-up-summary-field",children:[]},{value:"Filter conditions during aggregation",id:"filter-conditions-during-aggregation",children:[]},{value:"Batch recalculate summary value",id:"batch-recalculate-summary-value",children:[]},{value:"Implementation tips",id:"implementation-tips",children:[]},{value:"Best practices",id:"best-practices",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Roll-Up summary field automatically calculates the value in the related record. You can create a Roll-Up summary field so that its value is based on the summary of the field value of a detail object in the ",Object(r.b)("inlineCode",{parentName:"p"},"Master Detail")," relationship, and display the summary result in the master object's record. The detail object's records must be directly related to the master object's record through the ",Object(r.b)("inlineCode",{parentName:"p"},"Master Detail"),' field. For example, you want to display the total invoice amount of all related invoice custom object records in the customer\'s invoice related list. You can define this summary information in a custom amount field called "Total Invoice Amount".'),Object(r.b)("p",null,"You can use Roll-Up summary fields to perform different types of summary calculations. For example, you can calculate the number of detail object's records related to the master object's record, and you can also calculate the sum, minimum, or maximum of the fields in the detail object's records."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Summary field",src:a(166).default})),Object(r.b)("h2",{id:"create-roll-up-summary-field"},"Create Roll-Up summary field"),Object(r.b)("p",null,"Define the Roll-Up summary field on the object (located on the master side of the ",Object(r.b)("inlineCode",{parentName:"p"},"Master Detail"),")."),Object(r.b)("p",null,"If the relationship does not already exist, first create a ",Object(r.b)("inlineCode",{parentName:"p"},"Master Detail")," relationship between the master object and the detail object on the detail side to indicate the relationship between the value of the record being summarized and the record being summarized."),Object(r.b)("p",null,"Create a new field on the object where you want to display the value of the Roll-Up summary field. The summary field summarizes the values in the records on the related object, so the object (the field you created above) should be on the master side of the master object/detail object relationship. "),Object(r.b)("p",null,Object(r.b)("img",{alt:"Edit object field",src:a(167).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Object\uff1a"),"That is, the master object in the ",Object(r.b)("inlineCode",{parentName:"li"},"Master Detail")," relationship."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Label\uff1a"),"The name you want this summary field to display."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Field Name\uff1a"),"The unique api name of this field."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type:"),' Please select "Roll-Up Summary".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Default Value\uff1a"),"Because the field value is calculated, the default value is invalid here."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Group\uff1a"),"Which group do you want the field to be displayed on."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Precision\uff1a"),"The precision of the numeric field."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Scale\uff1a"),"The number of decimal places that you want this summary result to retain."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Object to Summarize\uff1a"),"Select the object on the detail side in the ",Object(r.b)("inlineCode",{parentName:"li"},"Master Detail")," relationship, which contains the records you want to summarize."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Roll-Up Type\uff1a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u25a0 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"COUNT\uff1a"))," Summarize the total number of records in the detail object, and return the total number of records."),Object(r.b)("li",{parentName:"ul"},"\u25a0 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"SUM\uff1a")),' Accumulate and summarize the values of the fields selected in the "Fields to Aggregate" option. Only number, amount, and percentage field types are available.'),Object(r.b)("li",{parentName:"ul"},"\u25a0 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"MIN\uff1a")),' Compare the values of the fields selected in the "Fields to Aggregate" option and get the minimum value. Only number, amount, percentage, date and datetime fields are available.'),Object(r.b)("li",{parentName:"ul"},"\u25a0 ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"MAX\uff1a")),' Compare the values of the fields selected in the "Fields to Aggregate" option and get the maximum value. Only number, amount, percentage, date and datetime fields are available.'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Field to Aggregate\uff1a"),"Please select a field on the detail object. This field is the field to be aggregated for SUM/MIN/MAX. For other summary types except COUNT, this item is required, otherwise, this field is not required."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filter Criteria:")," If you want to include only a specific record group in the summary calculation, please enter the filter criteria in the filter criteria, for example, only summarize the records created before 8 AM on January 1, 2021."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Others:")," Check the function switches that need to be enabled, and click Save to end the operation.")),Object(r.b)("h2",{id:"filter-conditions-during-aggregation"},"Filter conditions during aggregation"),Object(r.b)("p",null,"If you want to include only specific record groups in the summary calculation, you can enter the corresponding filter conditions in the filter conditions."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Summary filter",src:a(168).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"These filter conditions filter detail object's records instead of master object's records.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Listed in the field input box are the field names available for filtering in the detail object for selection.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'The operator input box lists the filter condition operators supported by the field type based on the field selected on the left. For example, the character type field has the "contains" operator, but the amount type does not.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The value is a plain text input box. When the type of the left field is different, please input text characters according to different input specifications:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Number, Currency, Percent\uff1a")," Please enter a valid number value, such as 1.2, 3000."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Boolean:")," Please enter ",Object(r.b)("inlineCode",{parentName:"li"},'"true", "True", "TRUE", "1"')," for true, or ",Object(r.b)("inlineCode",{parentName:"li"},'"false", "False", "FALSE", "0"')," for false ."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Date:")," Please enter a value similar to ",Object(r.b)("inlineCode",{parentName:"li"},"2020-02-12"),", the value it represents is ",Object(r.b)("inlineCode",{parentName:"li"},"2020-02-12T00:00:00.000Z"),", which is converted to a time value of 0 o\u2019clock in UTC To filter."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Datetime\uff1a")," Please enter a value similar to ",Object(r.b)("inlineCode",{parentName:"li"},"2020-02-12 12:00"),", which means the value is ",Object(r.b)("inlineCode",{parentName:"li"},"2020-02-12T04:00:00.000Z"),", which means it will be converted according to the current time zone Filter for the time value in the UTC time zone."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Lookup\uff1a")," Please enter the recorded _id value, such as",Object(r.b)("inlineCode",{parentName:"li"},"rbNxQ3mK6CFs8LWbr"),"Indicates the ID value of the record to be referenced."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Master Detail\uff1a")," Same as ",Object(r.b)("inlineCode",{parentName:"li"},"Lookup"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Others\uff1a")," Will be filtered as text value."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can enter multiple filter conditions, and finally output these conditions according to AND logic connection, does not support OR or more complex logic filtering."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(l.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(l.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(l.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(l.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"prompt")),Object(r.b)("div",Object(l.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The low code of Huayan Cube supports richer filter condition settings, such as filtering by OR logic, supporting multiple OR or AND nesting. "))),Object(r.b)("h2",{id:"batch-recalculate-summary-value"},"Batch recalculate summary value"),Object(r.b)("p",null,'For existing historical data, the Roll-Up summary field value will not be recalculated in many cases. In this case, you should select the "Batch recalculation summary value" button on the background detailed configuration page of the Roll-Up summary field to manually recalculate the value. These situations include but are not limited to the following situations:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Change the Roll-Up summary definition (such as objects, fields to be aggregated, summary types, filter conditions, etc.)."),Object(r.b)("li",{parentName:"ul"},'Change the related attributes of the referenced field in the Roll-Up summary field "fields to be aggregated", such as changing its field type, changing the expression of its formula field, etc.')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(l.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(l.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(l.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(l.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"prompt")),Object(r.b)("div",Object(l.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'In a formal environment, please be careful to modify certain field properties of the object, such as field type, field formula expression, drop-down selection box option list, etc., because the existing historical data may not trigger the recalculation of the field value again. The accumulated summary field value can only be corrected by manually operating the "Batch recalculation summary value" button here.'))),Object(r.b)("h2",{id:"implementation-tips"},"Implementation tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Roll-Up summary fields can be created on all master side objects with ",Object(r.b)("inlineCode",{parentName:"li"},"Master Detail")," object relationships, regardless of whether the objects on both sides are standard or custom objects."),Object(r.b)("li",{parentName:"ul"},"When a Roll-Up summary field cannot be created on an object, you should first create a ",Object(r.b)("inlineCode",{parentName:"li"},"Master Detail")," relationship on the detail side of the object."),Object(r.b)("li",{parentName:"ul"},"The types of fields that can be calculated in a Roll-Up summary field depend on the type of summary and the field type of the field to aggregate. For example:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"When sum is selected as the accumulation type, the number, amount, and percentage fields are available."),Object(r.b)("li",{parentName:"ul"},"When min or max is selected as the accumulation type, the number, amount, percentage, date, and date time fields are available."),Object(r.b)("li",{parentName:"ul"},'When count is selected as the Roll-Up type, the total number of records in the detail object will be summarized directly, which is independent of the fields of the detail object. There is no need to select "fields to aggregate".'))),Object(r.b)("li",{parentName:"ul"},"Sometimes, you cannot change the field type of the field you refer to in the Roll-Up summary field. This is because the field type that can be calculated in the Roll-Up summary field depends on the field type of the field to be aggregated. Huayan Rubik's cube has not handled such logic verification for the time being. Please change the field type in the formal environment carefully and arbitrarily."),Object(r.b)("li",{parentName:"ul"},"After the Roll-Up summary field is created on the object, the field type of the master object / detail object type field in the detail object object on which the summary field depends cannot be changed to the related table or other field types. Huayan Rubik's cube has not handled such logic verification for the time being. Please change the field type in the formal environment carefully and arbitrarily."),Object(r.b)("li",{parentName:"ul"},'The Roll-Up summary field can refer to the formula field, that is, "field to aggregate" can select the field of formula field type. When the formula value changes, the Roll-Up summary field will be triggered to summarize and calculate again and update the field value.'),Object(r.b)("li",{parentName:"ul"},"Roll-Up summary field can also be referenced in formula field. When the value of Roll-Up summary field changes, it will trigger relevant formula field to recalculate its field value."),Object(r.b)("li",{parentName:"ul"},"For now, cross object field references or functions (such as now or In today's formula field, Huayan Rubik's cube is treated in the way of ordinary formula, and is not treated differently. However, you should not configure it in this way. This is not only that there should not be such logic in actual demand, but also because this configuration will bring great loss in performance."),Object(r.b)("li",{parentName:"ul"},"Currently, formula calculations in workflow rules, validation rules, or other automatic rules that reference the summary field will not be triggered again when the Roll-Up summary field value changes."),Object(r.b)("li",{parentName:"ul"},"In the formal environment, please be careful to modify some field properties of the object, such as field type, field formula expression, because field value recalculation may not be triggered again for existing historical record data. Please refer to ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"#batch-recalculate-summary-value"}),"Batch recalculation summary value")," for details."),Object(r.b)("li",{parentName:"ul"},"Depending on the number of records affected and other factors, it may take 30 minutes or less to calculate the Roll-Up summary field value."),Object(r.b)("li",{parentName:"ul"},"If the Roll-Up summary field is referenced in the validation rule, the validation rule will not be triggered when the summary field value changes. For example, the master object has a validation rule, and the Roll-Up summary field value must be less than 100. If the user will input more than 100 values to change the related detail object's record, the user is expected to be unable to save the detail object's record. In fact, when the detail object's record changes, the verification rule of the master object's record will not be triggered. To achieve this requirement, the usual way is to configure the validation rule in the detail object instead of the master object, similar to: ",Object(r.b)("inlineCode",{parentName:"li"},"lookup_mater_object_field.summary_value + current_value >= 100\u3002"))),Object(r.b)("h2",{id:"best-practices"},"Best practices"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you do not want users to see the calculated value of the Roll-Up summary field, you can set the field as a hidden field. The fields on the detailed record that cannot be seen by the user are still calculated in the Roll-Up summary field."),Object(r.b)("li",{parentName:"ul"},"If you have validation rules, consider how they affect the Roll-Up summary field. When the value in the detail object record changes, the value of the Roll-Up summary field of the master object record will also change. Therefore, a verification error will be displayed when saving the master object / detail object record. Please refer to the last item of ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"#implementation-tips"}),"Implementation tips")),Object(r.b)("li",{parentName:"ul"},"Please note that there is a difference between referring to the master object Roll-Up summary field from the detail object field and referring to its own Roll-Up summary field from the master object field. Roll-Up summary fields referenced from child records may have obsolete values because the parent record was not updated when the child record was saved. However, if the Roll-Up summary field is referenced from the parent record, although the Roll-Up summary field will always have the latest update value, the verification rule of the master object's record will not be triggered when the child record is changed. Please refer to the last item of ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"#implementation-tips"}),"Implementation tips")),Object(r.b)("li",{parentName:"ul"},"Before creating a Roll-Up summary field, plan its implementation. Once created, you cannot change the selected detail object or delete any fields referenced in the Roll-Up summary definition."),Object(r.b)("li",{parentName:"ul"},"Before you create the Roll-Up total value, please implement the plan in batch. Especially in the production environment, once the valuable historical data is generated and some field attributes of the object are modified, such as field type, field formula expression, it is necessary to manually execute ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"#batch-recalculate-summary-value"}),"Batch recalculation of aggregate value")," to correct the historical data, which will increase the risk of non confirmation."),Object(r.b)("li",{parentName:"ul"},"Auto derived fields, such as current date or current user, are not allowed in Roll-Up summary fields. Disallows formula fields that contain functions that dynamically derive values, such as (DATEVALUE\u3001NOW and TODAY). The Roll-Up summary field is also not allowed to contain formula fields of related object consolidation fields.")))}u.isMDXComponent=!0}}]);