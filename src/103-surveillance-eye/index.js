const COUNT = 10;

d3.select('.circles')
  .selectAll('span')
  .data(d3.range(COUNT))
  .style('--n', (d) => d + 1);
