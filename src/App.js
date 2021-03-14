import React from 'react'
import { connect } from 'react-redux'

import * as CounterActions from './store/actions/Counter'
import * as TextActions from './store/actions/Text'

const App = ({ valueCounter, textValue, dispatch }) => {
    return (
        <div className="App">
            <h1>Contador</h1>
            <b>{valueCounter}</b><br/>
            <button onClick={ () => dispatch(CounterActions.increment())} >Adicionar</button>
            <button onClick={ () => dispatch(CounterActions.decrement())} >Incrementar</button>

            <br/><br/><br/>
            <b>{textValue}</b><br/>
            <input placeholder="Texto" onChange={(e) => dispatch(TextActions.setNewValue(e.target.value))}></input>
        </div>
    );
}

const mapStateToProps = store =>({
    valueCounter: store.counter.value,
    textValue: store.text.value
})

export default connect(mapStateToProps)(App);
