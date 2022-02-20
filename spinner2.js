const spinner = function() {
  const rotations = '|/-\\';
  let turn = 1;
  while (turn <= 10) {
    const spin = rotations[turn % rotations.length];
    setTimeout(() => {
      process.stdout.write(`\r${spin}   `);
    }, 180 * turn);
    turn ++;
  }
};

spinner();