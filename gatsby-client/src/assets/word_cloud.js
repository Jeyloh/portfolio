var d3 = require('d3'),
  cloud = require('./word-cloud-lib');

function useWindowSize() {
  const w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;


  return [ x / 1.5, y / 1.5 ]
}

const wordCloud = cloud()
  .size(useWindowSize())
  .padding(2)
  .rotate(function() {
    return ~~(Math.random() * 2) * 90;
  })
  .font('Impact')
  .fontSize(function(d) {
    return d.size;
  })
  .on('end', draw);

const w_words = (words) =>
  wordCloud.words(
    words.map(function(d) {
      return { text: d, size: 10 + Math.random() * 90 };
    }),
  );

export default w_words;

export function draw(words) {
  d3.select('#word_cloud')
    .attr('width', wordCloud.size()[0])
    .attr('height', wordCloud.size()[1])
    .append('g')
    .attr('transform', 'translate(' + wordCloud.size()[0] / 2 + ',' + wordCloud.size()[1] / 2 + ')')
    .selectAll('text')
    .data(words)
    .enter()
    .append('text')
    .style('font-size', function(d) {
      return d.size + 'px';
    })
    .style('font-family', 'Impact')
    .style('fill', "#"+((1<<24)*Math.random()|0).toString(16))
    .attr('text-anchor', 'middle')
    .attr('transform', function(d) {
      return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
    })
    .text(function(d) {
      return d.text;
    });
}
