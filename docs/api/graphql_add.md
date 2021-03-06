---
title: Insert data by GraphQL API
sidebar_label: Insert by GraphQL
---

To insert data into Steedos via the GraphQL API, you should prefix the script with `mutation` instead of `query` in the following format:

```graphql
mutation {
  tasks__insert(data:{name:"Task One"}) {
    name
    _id
  }
}
```

That represents you shoud replace the `tasks` above with the object name you want to insert record, and replace the `{name:"Task One"}` above with a JSON data you want to insert.

The keyword `__insert` in the above script represents to insert one record into Steedos via the GraphQL API.

The graphql script above may return some data like this:

```json
{
  "data": {
    "tasks__insert": {
      "name": "Task One",
      "_id": "5cb98489d09a343e14daae95"
    }
  }
}
```

When somebody insert data via the GraphQL API on Steedos, they can insert record of the object only they have permission to insert, see [About data permissions](/docs/api/graphql#about-data-permissions) for more information.
