process.stdout.write('hello from spinner2.js... \rheyyy\n');

let charArray = ["/", "-", "\\", "|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

const spinner = function(characters) {
  let time = 0;
  for (const char of characters) {
    setTimeout (() => {
      process.stdout.write(`\r ${char}   `)
    }, time);
    time += 200;
  }
};

spinner(charArray);