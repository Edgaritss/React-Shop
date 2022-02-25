import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount'
import NewPassword from '../pages/NewPassword'
import Orders from '../pages/Orders'
import Checkout from '../pages/Checkout'
import PasswordRecovery from '../pages/PasswordRecovery'
import SendEmail from '../pages/SendEmail'
import Home from '../pages/Home';
import CreateAccount from '../pages/CreateAccount';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
    return ( 
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />			
					<Route exact path="/recovery-password" element={<PasswordRecovery />} />
					<Route exact path="/signup" element={<CreateAccount/>}/>
					<Route exact path="/account" element={<MyAccount/>}/>
					<Route exact path="/orders" element={<Orders/>}/>
					<Route exact path="/checkout" element={<Checkout/>}/>
					<Route exact path="/send-email" element={<SendEmail/>}/>
					<Route exact path="/new-password" element={<NewPassword/>}/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter> 

     );
}
 
export default App;