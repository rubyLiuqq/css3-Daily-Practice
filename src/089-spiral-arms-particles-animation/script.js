const PARTICLES_PER_CIRCLE = 18;
const CIRCLES = 5;
const COUNT_OF_PARTICLES = PARTICLES_PER_CIRCLE * CIRCLES;

d3.select('.container')
  .style('--circles', CIRCLES)
  .style('--particles-per-circle', PARTICLES_PER_CIRCLE)
  .selectAll('div')
  .data(d3.range(COUNT_OF_PARTICLES))
  .enter()
  .append('div')
  .style('--n', (d) => d + 1)
  .append('span')
