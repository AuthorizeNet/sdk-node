function delete_null_properties(test: any, recurse: boolean): any {
  for (var i in test) {
    //skip clientId here, as we are setting it in apicontrollerbase.js
    if (i == "clientId") {
      continue;
    }
    if (test[i] === null) {
      delete test[i];
    } else if (recurse && typeof test[i] === "object") {
      delete_null_properties(test[i], recurse);
    }
  }
}

export default { delete_null_properties };
