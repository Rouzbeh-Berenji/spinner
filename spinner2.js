const spinner = " |/-\\";
let delay = 0;
for (const char of spinner) {
  setTimeout(() => {
    // print the char here
    process.stdout.write('\r'+ char);
  }, delay += 200)
}
