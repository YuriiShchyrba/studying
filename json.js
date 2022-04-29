function JSONParser(string) {
  if (string === "true" || string === "false") return parseBool(string);
  if (string === "null") return parseNull();
  if (string[0] === '"') return parseString(string);
  if (string[0] === "{" || string[0] === "[") return partitionData(string);
  else return parseNum(string);
}

function parseString(string) {
  return string.slice(1, -1).replace(/\\/g, '');
}

function parseBool(string) {
  return string === "true";
}

function parseNum(string) {
  return Number(string);
}

function parseNull() {
  return null;
}

function partitionData(string) {
  const bracketDict = { "[": "]", "{": "}" };
  const bracketStack = [];
  const chunks = [];
  let currChunk = "";

  for (let i = 1; i < string.length - 1; i++) {

    if (string[i] === '"') {
      currChunk += string[i++];
      while ((string[i] === '"' && string[i - 1] === "\\") || string[i] !== '"') {
        currChunk += string[i++];
      }
    }

    if (string[i] in bracketDict) {
      bracketStack.push(string[i]);
    }

    else if (string[i] === bracketDict[bracketStack[bracketStack.length - 1]]) {
      bracketStack.pop();
    }

    else if (string[i] === "," && bracketStack.length === 0) {
      chunks.push(currChunk);
      currChunk = "";
      continue;
    }


    currChunk += string[i];
    if (i === string.length - 2) {
      chunks.push(currChunk);
    }
  }

  if (string[0] === "[") return parseArray(chunks);
  return parseObj(chunks);
}

function parseArray(chunks) {
  return chunks.map((chunk) => JSONParser(chunk));
}

function parseObj(chunks) {
  const outputObj = {};

  for (let chunk of chunks) {
    let key = "";
    let val = "";

    for (let i = 1; i < chunk.length; i++) {

      if ((chunk[i] === '"' && chunk[i - 1] === "\\") || chunk[i] !== '"') {
        key += chunk[i]
      } else {
        val = chunk.slice(i + 2)
        break
      }
    }

    outputObj[key] = JSONParser(val);
  }
  return outputObj;
}

let boolValue = true;
let number = 123;
let str = 'Hello"NY-33';
let n = null;

let jsonBool = JSON.stringify(boolValue);
let jsonNumber = JSON.stringify(number);
let jsonString = JSON.stringify(str);
let jsonNull = JSON.stringify(n);

let transformedBool = JSONParser(jsonBool);
let transformedNumber = JSONParser(jsonNumber);
let transformedString = JSONParser(jsonString);
let transformedNull = JSONParser(jsonNull);

const obj = {
  str: str,
  obj1: {
    num: number,
    arr: [1, 2, null]
  }
};

const jsonObj = JSON.stringify(obj);
const transformedObj = JSONParser(jsonObj);

const data = {
  str: str,
  number: number,
  obj: {
    booleanVal: boolValue,
    array: [1, 2, 3, null, undefined, { str: str }]
  }
};


const jsonData = JSON.stringify(data);
const transformedData = JSONParser(jsonData);


const circularObject1 = {
  num: 1
};
const circularObject2 = {
  str: 'NY-33'
};

circularObject1.circular = circularObject2;
circularObject2.anotherCircular = circularObject1;

const notWorking = JSON.stringify(circularObject1);

console.log('End');
