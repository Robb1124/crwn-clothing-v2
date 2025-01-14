import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

import './navigation-bar.styles.scss';

const NavigationBar = () => {

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/SignIn'>
                    Sign In
                </Link>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
            </div>
        
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default NavigationBar;