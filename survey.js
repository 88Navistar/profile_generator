const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
 rl.question('What\'s an activity you like doing? ', (activity) => {
  rl.question('What do you listen to during that activity? ', (listen) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
      rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
        rl.question('Which sport is your absolute favourite?) ', (sport) => {
          rl.question('What is your superpower? ', (power) => {
  
    console.log(`cool ${name}`,`You like to partake in ${activity}`,`I rock out to ${listen}`, `My fave meal is: ${meal}.`, `I eat lots of ${food}`, `My absolute fave sport iss ${sport}.`, `My superpower is ${power}.`);

  rl.close();
       });
      });
     });
    });
  });
 });
});
