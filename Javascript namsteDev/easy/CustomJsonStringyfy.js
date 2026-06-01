function JSONStringify(value) {
  let result = "";

  // Your implementation
  function formStringHandler(value, result) {
    if (value === null) {
      result = "null";
    }
    let type = typeof value;

    if (type === "string") return `"${value}"`;
    if (type === "number" || type === "boolean") return value.toString();
    if (type === "function" || type === "undefined") return undefined;

    if (Array.isArray(value)) {
      let res = "";
      res = value.map((ele) => {
        let valData = formStringHandler(ele);
        if (valData === undefined) return "null";
        return valData;
      });
      return `[${res.join(",")}]`;
    }

    if (type === "object") {
      const props = Object.entries(value)
        .map(([key, val]) => {
          let valData = formStringHandler(val);
          if (valData === undefined) return undefined;
          return `"${key}":${valData}`;
        })
        .filter(Boolean);

      return `{${props.join(",")}}`;
    }
  }
  result = formStringHandler(value);
  return result;
}

//For the purpose of user debugging.
// JSONStringify([1, 4, function () {}, "ddd", { a: "lavi", b: "dd" }]);
JSONStringify({
  a: "lavi",
  xy: () => {
    console.log("ddd");
  },
  ab: [1, 4, 5, "ddd"],
});
