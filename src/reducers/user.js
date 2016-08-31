export default function update( state = { loading: true }, action ) {
	console.log( "user reducer" );
	if ( action.type === "user/login" ) {
		console.log( "login reducer" );
		return state;
	}
	return state
}