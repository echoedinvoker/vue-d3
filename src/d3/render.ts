import * as d3 from 'd3'


export const render = (value: string[]) => {
  const graph = d3.select('svg').selectAll('.node').data(value) // select by class

  graph.exit()
    .transition().duration(750)
    .style('opacity', 0)
    .remove()

  graph
    .each(function(d: string, i: number) {
      if (d === 'circle') {
        d3.select(this as SVGCircleElement)
          .transition().duration(1000)
          .attr('cx', () => 500 - (i * 60 - 25)) // i from each callback
      } else {
        d3.select(this as SVGRectElement)
          .transition().duration(1000)
          .attr('x', () => 500 - (i * 60))
      }
    })

  graph.enter().append(value[value.length - 1])
    .attr('class', 'node')
    .each(function(d: string) {
      if (d === 'circle') {
        d3.select(this as SVGCircleElement)
          .attr('r', 25)
          .attr('cx', 60 + 25)
          .attr('cy', 50)
          .attr('fill', 'red')
          .style('opacity', 0)
          .transition().duration(750)
          .style('opacity', 1)

      } else {
        d3.select(this as SVGRectElement)
          .attr('width', 50)
          .attr('height', 50)
          .attr('x', 60)
          .attr('y', 25)
          .attr('fill', 'blue')
          .style('opacity', 0)
          .transition().duration(750)
          .style('opacity', 1)
      }
    })
}
