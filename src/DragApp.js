const React = require('react');
const { connect } = require('react-redux');
const add = require('./actions');
const AHello = require('./AHello');
const UList = require('./Draggable');

const mapStateToProps = state => ({ hellos: state });
const mapDispatchToProps = { add };

// const Hello = ({ hellos, add }) => {
//   return (
//     <div>
//       { hellos.map(
//           (hello, i) =>
//             <AHello key={ i } onClick={ () => add('Hello') }>{ hello }</AHello>
//         )
//       }
//     </div>
//   );
// }

const Hello = ({ hellos, add }) => {
  return (
    <UList>
    { hellos.map(
      (hello, i) =>
        <AHello key={ i } onClick={ () => add('Hello') }>{ hello }</AHello>
      )
    }
    </UList>
  )
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Hello);
// module.exports = () => { return (<h1>Hello</h1>)}
