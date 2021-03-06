---
title: Calculate Field Values With Formulas
sidebar_label: Overview
---

A formula is an algorithm that derives its value from other fields, expressions, or values. Formulas help you automatically calculate the value of a field based on other fields.

## Where can formulas be used?

The formula can be used in many places of  Steedos. Before you start using formulas, understand the differences in their usage.

- **Approval process:** The condition for entering the approval process is that the definition record must be met. 
- **Approval steps:** The condition for entering the approval step is that the definition record must be met.
- **Field default value：**Apply a value to a custom field when the user creates a record. Use formulas to define default values. The user can change the default value. The default value can be determined by a formula that uses the value you specify, the merge field, or the expression.
- **Formula field：**Automatically calculates the value of a custom field using the value, merge field, or expression you specify. You cannot change the value of a formula field.
- **Validation rules：**To prevent users from entering invalid values in standard / custom fields, validation rules can be based on formulas and display error messages to users when they enter invalid values.
- **Field update：**Automatically changes the field value to the value you specify. Formulas can include other values, merged fields, or expressions. Field updates can be set to occur due to workflow rules or approval processes.
- **Workflow rules：**It is used to define the conditions that must be met when records trigger workflow rules.

Common formula process

Usage | When will it be implemented? | Read only? | Null processing can be specified?
:- | :-: | :-: | :-:
**Approval Process** | Record submitted for approval | Not applicable | No
**Approval Step** | Record submitted for approval | Not applicable | No
**Field Default Value** | When creating a record | No | No
**Formula Field** | After the record is saved | Yes | Yes
**Validation Rules** | Before the record is saved | Not applicable | No
**Field Update** | During workflow or approval process | Not applicable | No
**Workflow Rule** | When records are kept | Not applicable | No

 ## Formula data type

 The data type of the formula determines the type of data expected to be returned from the formula.

 - **Text：**Returns a character string. To display text in addition to formula output, place the text in quotation marks. Use the text data type for fields such as text, multiline text, web address, email address, and AutoNumber.
 - **Boolean：**Returns true or false. This field appears as a check box on the record details page and in reports. Use true as the checked value and false as the unselected value.
 - **Amount of money:** Only numeric value can be entered. The default number is 2 decimal places. You can also specify the number of decimal places.
 - **Date:**Returns the date representing a day in the calendar. The current date can be obtained by calling the internal function TODAY () in the formula.
 - **Time and date：**Returns data representing a time in time. The datetime field includes the date and the time of the day consisting of hours, minutes, and seconds. You can use the NOW() function to insert the current date and time into the formula.
 - **Number：**Returns a positive or negative integer or decimal (up to 18 digits). Steedos uses the rule of rounding and bisecting formula fields. For example, 12.345 becomes 12.35 and - 12.345 becomes - 12.35.
 - **Percentage：**Returns a number in percent format followed by a percent sign (up to 18 digits). The percentage data is stored as a decimal, and the value is the decimal divided by 100, that is, 90% is equal to 0.90.
 - **Time (temporarily not supported)：**Returns data representing a time in time, no date. The time field contains hours, minutes, seconds, and milliseconds. You can use the TIMENOW() function to insert the current date into the formula.

## Elements in formulas

 Formulas can contain references to field values, operators, functions, literal representation values, or other formulas, Use any or all of these elements to build a formula.

### Text representation value

 A text string or number that you enter that has not been calculated or changed.

 For example, if you have a value that is always multiplied by 2% of the amount, the formula will contain the literal value of 2% of the amount:

 ```js
 ROUND((amount of money*0.02), 2)
 ```

 This example contains each possible part of the formula:

- A function called round is a function that returns a numeric value rounded to a specified number of decimal places.
- A field reference named amount.
- An operator * Tells the formula builder to text the value of the 0.02 times amount field.
- A text represents the value of 0.02. Use decimal values for all percentages. To include the actual text in your formula, enclose it in quotation marks.
- The last digit in this formula, 2, is the input required by the round function to determine the number of decimal places to return.

### Function

And return a number of system defined values, that is, the value of a function you may need to input. For example, TODAY() does not need to enter a value, but returns the current date. The TEXT (value) function requires you to enter a percentage, number, or currency and return text.

### Operator

A symbol that specifies the type of calculation to perform or the order in which it is performed. For example, the "+" sign specifies that two values should be added. The left and right parentheses specify the expression you want to evaluate first.

### Field reference

Use a merge field to reference the value of another custom or standard field.
The syntax of the merge field is `field_name` for the standard field,For custom fields, it is `field_name__c`. The syntax for merge fields on related objects is `reference_to_field_name.field_name`,The syntax of merge fields on related objects is a. if necessary, you can insert merged fields into your formula. In theory, it supports infinite levels of extended references. For example, three-level references are written as follows: `reference_to1_field_name.reference_to2_field_name.field_name`.

It supports the reference of the current login user. The writing method starts with `$user` to indicate the reference of the current login user, and uses the dot symbol to connect the attributes to be extended.For example, `$user.name` refers to the name of the current user, and `$user.organization.name` refers to the name of the organization to which the current user belongs.

To refer to the record ID pointed to by the associated field, simply connect `_id` with a dot symbol.For example `reference_to_field_name._id`，`$user._id`.

### Comments (not supported)

Notes in formulas begin with a backslash plus an asterisk (*) and end with an asterisk and a backslash (* /). For example,

```js
/*This is a note on the formula*/
```

Comments are ignored when processing formulas.

Comments are used to explain certain parts of a formula to those who view the definition of a formula. For example:

```js
AND(
/*competitor field is required, please check if it is empty * /
LEN(Competitor__c) = 0，
)
```

The comment content supports any character other than '/ *'. When the comment is complicated, you can write multiple lines of text to comment, for example:

```js
AND(
/*competitor Field is required,
Please check that the field is empty.
More notes
LEN(Competitor__c) = 0，
)
```

Nested comments can cause syntax errors. For example, you cannot save a formula with the following statements:

```js
/* /* comment */ */
```

### Operators and functions in formulas

Many operators and functions can be used when building formulas. Please refer to: [Operators and Functions in Formulas](/docs/formula/functions).
