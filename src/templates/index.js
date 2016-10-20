// upon drop pass parent and assign to each 1st lvl item
// then make nxt lvl recursively using container id as parent
const __ = Object.assign
const uuid = require('uuid-v4');

const homepage = [
  { Jumbotron: [
    { Container: [
      { Row: [
        { Col: [
          { h1: 'Hello World!' },
          { p: 'This is cool' }
        ] }
      ] }
    ] }
  ], attrs: { fluid: true } },
  { Container: [
    { Row: [
      { Col: [
        { h1: 'Header' }, { p: 'More Words' }
      ], attrs: { xs: 4 } },
      { Col: [
        { h1: 'Another' }, { p: 'Another P' }
      ], attrs: { xs: 8 } },
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
