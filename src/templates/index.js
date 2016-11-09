// upon drop pass parent and assign to each 1st lvl item
// then make nxt lvl recursively using container id as parent
const __ = Object.assign
const uuid = require('uuid-v4');

const homepage = [
  {style: `
    .fold {
      height: 100vh;
      text-align: center;
      background-color: orange;
      position: relative;
      font-size: 2rem;
    }
    .fold h1 {
      color: white;
      font-size: 4rem;
    }
    .v-center {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .square-md-3 {
      height: 0;
      padding-bottom: 33.3333%;
    }
  `},
  { Jumbotron: [
    { Container: [
      { Row: [
        { Col: [
          { h1: 'Lorem Ipsum' },
          { p: 'Dolor sit amet, consectetur adipiscing elit.' }
        ] }
      ] }
    ], attrs: { className: 'v-center' } }
  ], attrs: { fluid: true, className: 'fold' } },
  { Container: [
    { Row: [
      { Col: [
        { div: [
          { h1: 'Header' }, { p: 'More Words Here' }
        ] }
      ], attrs: { md: 4, className: 'square-md-3' } },
      { Col: [
        { h1: 'Another' }, { p: 'Another P' }
      ], attrs: { md: 4 } },
      { Col: [
        { h1: 'Another' }, { p: 'Another P' }
      ], attrs: { md: 4 } },
      { Col: [
        { h1: 'Header' }, { p: 'More Words Here' }
      ], attrs: { md: 4 } },
      { Col: [
        { h1: 'Another' }, { p: 'Another P' }
      ], attrs: { md: 4 } },
      { Col: [
        { h1: 'Another' }, { p: 'Another P' }
      ], attrs: { md: 4 } },
    ] }
  ] }
]

const header = [
  { Container : [
    { Row: [
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 4 } },
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 4 } },
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 4 } }
    ]}
  ]},
  { Container : [
    { Row: [
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 6 } },
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 6 } }
    ]}
  ]},
  { Container : [
    { Row: [
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 6 } },
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 6 } }
    ]}
  ]}
]

function flatten(template, parentID, into = []){
  const array = (Array.isArray(template))
    ? template.map(each => flatten(each, parentID, into))
    : null
  if (array) return into;

  let item = { component: {} }
  if (parentID) item.parent = {id: parentID}
  const keys = Object.keys(template)
  keys.forEach(each => {
    if (each !== 'attrs') {
      const id = uuid()
      __(item.component, { type: each, id: id })
      into.push(item)
      if (Array.isArray(template[each])) {
        __(item.component, {children: []})
        flatten(template[each], id, into)
      } else { __(item.component, {children: [template[each]]}) }
    } else { __(item.component, template[each]) }
  })

  return into
}

module.exports = {
  homepage: id => flatten(homepage, id),
  header: id => flatten(header, id)
}
