const Immutable = require( "Immutable" );
const createReducer = require( "redux-immutablejs" ).createReducer;

describe( "测试Immutable", function () {
	it( "测试1", function () {
		var state = Immutable.fromJS( {
			test: 0,
			test2: "test"
		} );
		console.log( state );
	} );
} );