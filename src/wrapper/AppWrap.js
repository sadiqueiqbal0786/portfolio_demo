import React,{Component} from 'react';
import {NavigationDots,SocialMedia} from '../components';

const AppWrap = (Component,idName,classNames) => function HOC(){ {/*classNames Not used yet */}
  return (
    <div id={idName} className={"app__container ${classNames}"}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'>
        <Component/>
        <div className='copyright'>
          <p className='p-text'></p>
          <p className='p-text'></p>
        </div>
      </div>
      <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap