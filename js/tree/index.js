function tree(n) {
    const height = Number(n)
    if (isNaN(n) || height < 3) {
        return null
    }
    const lines = [];

    const width = height * 2 - 1;

    for (let i = 0; i < height - 1; i++) {
        const stars = i * 2 + 1
        const spaces = (width - stars - 2) / 2;

       lines.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
    }
     const trunkSpaces = (width - 1 - 2) / 2;
  lines.push(' '.repeat(trunkSpaces) + '|' + ' '.repeat(trunkSpaces));

  return lines.join('\n') + '\n';

}

