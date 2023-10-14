const path = require("path");
console.log(path.sep);

// For Windows user forward slash (\\)
// BUt in POSIX system or linux the output will be different if written in below syntax

const user = "foo\\bar\\baz".split(path.sep);
console.log(user);
// Expected Returns: ['foo', 'bar', 'baz']
// But Return in Linux - [ 'foo\\bar\\baz' ]

// For POISX or Linux/Unix backward sash (/) based system the output will
const user2 = "foo/bar/baz".split(path.sep);
console.log(user2);
// Returns: ['foo', 'bar', 'baz']

// Path Join
const filePath = path.join("./PathContent", "PathSubContent", "test.txt");
console.log("Line19 FilePath" + " " + filePath);

// Path basename
// path.basename() method retuns the last portion of a path.
const base = path.basename(filePath);
console.log("Line23 Basename" + " " + base);


// path.resolve() method resolves a sequence of paths or path segments into an absolute path
const absolutePath = path.resolve(
  __dirname,
  "PathContent",
  "PathSubContent",
  "test.txt"
);
console.log(absolutePath);
