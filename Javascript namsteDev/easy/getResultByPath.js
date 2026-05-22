function getResultByPath(path, obj) {
  // "data.results3333[0].status" ---> "data.results3333.0.status"
  const normalizePath = path.replace(/\[(\d+)\]/g, ".$1");

  //   // Part	Meaning
  // / /	Regex start and end
  // \[	Match literal [
  // (\d+)	Match one or more digits, and capture them
  // \]	Match literal ]
  // g	Global, replace all matches
  // In regex replacement, $1 means the value captured by the first bracket group:
  // "[0]"  -> ".0"
  // "[5]"  -> ".5"

  const keys = normalizePath.split(".");

  let result = obj;

  for (let key of keys) {
    if (result === undefined || result === null) break;
    result = result[key];
  }
  return result;
}
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
getResultByPath(path, obj);
module.exports = getResultByPath;
