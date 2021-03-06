---
title: Object
sidebar_label: Object
---

Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.

<!-- This type extends the [Metadata](../metadata) metadata type and inherits its name field. -->

Specify all relevant fields when you create or update a custom object. You cannot update a single field on the object. 

<!-- For more information about custom objects, see [Administer Custom Objects](url) in Steedos Help. -->

You can also use this metadata type to work with customizations of standard objects, such as accounts.

All metadata components have a name field, which must be fully specified for any custom object.

For example, the following are fully specified names for a standard object and a custom object respectively:

```js
Account
MyCustomObject__c
```

And the following is a fully specified name for an external object:

```js
MyExternalObject__x
```

## Declarative Metadata File Suffix and Directory Location

Custom object names are automatically appended with __c. The file suffix is .object.yml for the custom object or standard object file.

External object names are automatically appended with __x. The file suffix is .object.yml for the external object file.

Custom, standard, and external objects are stored in the objects folder in the corresponding package directory.

You can define a object in the `*.object.yml` file and other additional part of the object component in the subfolders like `buttons`,`fields`,`listviews`,`permissions` etc.

```sh
my-app
├── steedos-app/main/default
├── ...
│   └── objects
// highlight-start
│       └── accounts
│           └── buttons
│               └── enableSupplier.button.yml
│               └── enableSupplier.button.js
│               └── ...
│           └── fields
│               └── rating.field.yml
│               └── ...
│           └── listviews
│               └── mine.listView.yml
│               └── ...
│           └── permissions
│               └── admin.permission.yml
│               └── contract_manager.permission.yml
│               └── user.permission.yml
│               └── ...
│           └── accounts.object.yml
│       └── ...
// highlight-end
├── ...
```

## Fields

Unless otherwise noted, all fields are createable, filterable, and nillable.

### name

The field type is text.

This value cannot be null.

The name of the table in the data source that contains the data for the object.

To comply with the naming convention, only lowercase letters, Numbers, must start with a letter, cannot end with an underscore character or contain two consecutive underscore characters.

Case sensitive. It is recommended to use all lowercase letters

### label

The field type is text.

This value cannot be null.

Label that represents the object throughout the Steedos user interface.

We recommend that you make object labels unique across all standard, custom, and external objects in the org.

### icon

The field type is text.

The name of the icon that mark the object throughout the Steedos user interface.

We recommend that you make object icons unique across all standard, custom, and external objects in the org.

For now, you can only choose one icon from [Light Design System](https://www.lightningdesignsystem.com/icons/)'s standard icons to set the icon name.

### is_enable

The field type is boolean.

Whether to enable the object, only the enabled object can be displayed in the end user interface. Takes effect by default.

### description

The field type is text.

Description that represents the object.

### enable_files

The field type is boolean.

Whether files are allowed to be uploaded on the current object. If allowed, the associated attachment list exists at the bottom of the record detail page as a child table of the object.

### enable_search

The field type is boolean.

Whether to allow a global search at the top of the page to quickly find the record of the current object.

### enable_notes

The field type is boolean.

Whether to allow notes to be created on the current object. If allowed, the associated note list exists as a child of the object at the bottom of the record details page.

### enable_events

The field type is boolean.

Whether to allow calendar events to be created on the current object. If allowed, the associated calendar event list exists as a child of the object at the bottom of the record details page.

### enable_tasks

The field type is boolean.

Whether a task is allowed to be created on the current object. If allowed, the associated task list exists as a child table of objects at the bottom of the record details page.

### enable_api

The field type is boolean.

Whether to allow access to objects through the API interface, enabled by default.

### enable_schema

The field type is boolean.

Whether the data is validated according to the defined field properties when the data is saved. On by default.

### enable_tree

The field type is boolean.

If this property is defined, a tree structure is used to represent the object record. The parent field must be defined on the object for this property to work properly.

### enable_share

The field type is boolean.

Whether sharing rules which can set how certain records under the current object are shared by others in the organization is allowed to be created on the current object.

Shared records can be viewed by organizations or users authorized by sharing rules, but they may not have the authority to modify or delete those records.

### enable_audit

The field type is boolean.

Whether to track the modification history of the fields on the current object, a feature that consumes more server resources, should only be configured for the necessary objects.

## Declarative Metadata Sample Definition

```yml title="my-app/steedos-app/main/default/objects/accounts/listviews/accounts.object.yml"
name: accounts
label: Accounts
icon: account
enable_files: true
enable_search: true
enable_notes: false
enable_events: true
enable_tasks: true
enable_api: true
enable_share: true
enable_audit: true
```

## Declarative Metadata Additional Components

CustomObject definitions can include additional components defined in the custom object for declarative metadata. The following components are defined in the CustomObject:

- [Buttons](button)
- [Fields](field)
- [ListViews](listview)
- [Permissions](permission)
- [Validation Rule](validation_rule)
- [Workflow Rule](workflow_rule)
