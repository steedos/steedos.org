module.exports = {
  someSidebar: {
    "Getting Started": ['overview', 'installation'],
    "Metadata": ['metadata/metadata', {
      "Object": ['metadata/object/summary', 'metadata/object/field', 
      // {
      //   "Field Type": ["metadata/object/field_type/basic", "metadata/object/field_type/complex", "metadata/object/field_type/built_in"]
      // }, 
      'metadata/object/listview', 'metadata/object/button', 'metadata/object/permission', 'metadata/object/validation_rule', 'metadata/object/workflow_rule']
    }, 'metadata/application', 'metadata/report','metadata/permission_set', 'metadata/profile'],
    "Calculate With Formulas":[
      "formula/summary",
      "formula/create", 
      "formula/summary_field",
      "formula/date",
      // {
      //   "Formula API": ["formula/functions", "formula/operator_math", "formula/operator_logical", "formula/operator_text", "formula/function_date", "formula/function_logical", "formula/function_math", "formula/function_text", "formula/function_advanced"],
      // }, 
      "formula/best_practices", 
      // "formula/examples"
    ],
    "Steedos API": ['api', {
      "GraphQL": ["api/graphql", "api/graphql_auth", "api/graphql_query", "api/graphql_add", "api/graphql_edit", "api/graphql_delete"]
    }]
  },
};
