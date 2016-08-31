import { createAction } from 'redux-actions';
import Ajax from "../commons/ajax";

export const loginStart = createAction( "user/login/start" );

export const loginSuccess = createAction( "user/login/success" );

export const loginError = createAction( "user/login/error" );

export function login() {
	return dispatch=> {
		dispatch( loginStart() );
		fetch( "http://admin.ireadercity.com/Api/AdList?source=HuangliTianQi&appid=huanglitianqi&width=200&height=136&imgonly=true" )
			.then( res=>res.json() )
			.then( res=> {
				dispatch( loginSuccess() );
				console.log( res );
			} );
	};
};