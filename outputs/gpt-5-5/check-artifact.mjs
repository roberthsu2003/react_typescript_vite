import { Workbook } from "@oai/artifact-tool";

const workbook = Workbook.create();
console.log(Object.keys(workbook));
console.log(
  workbook.help("chart", {
    include: "index,examples,notes",
    maxChars: 8000,
  }).ndjson,
);
