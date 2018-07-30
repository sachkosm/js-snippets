import React, { Component } from 'react';
import PropTypes from 'prop-types';

class react-component-snippet extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

react-component-snippet.propTypes = {

};

export default react-component-snippet;

==============================================
//Class component with redux and connect
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class react-component-snippet extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}



function mapStateToProps(state) {
	return {
		rows: state.data.rows,
		dataLoaded: state.data.dataLoaded,
		selectedPIs: state.data.selectedPIs,
		modalIsOpen: state.data.modalIsOpen,
		stateFromServer: state.data.stateFromServer,
		selectAllCkbState: state.data.selectAllCkbState
	};
}
const mapDispatchToProps = dispatch =>
	bindActionCreators({
		fetchData,
	//	changePage: () => push('/ccsge/reports'),
		filterData,
		manageSelectedPIs,
		openModal,
		closeModal,
		clearFilter

	}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(react-component-snippet);
==============================
//Class Pure Component
import React, { PureComponent } from 'react'

export default class react-component-snippet extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

=============================
//Stateless component - functional component
import React from 'react';
import PropTypes from 'prop-types';

const react-component-snippet = props => {
    return (
        <div>
            
        </div>
    );
};

react-component-snippet.propTypes = {
    
};

export default react-component-snippet;

==================================
