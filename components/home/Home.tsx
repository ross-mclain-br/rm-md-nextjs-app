﻿import HomeHeader from './HomeHeader';
import HomeDetail from './HomeDetail';
import React, { useContext, useEffect, useRef } from 'react';
import ButWaitThereIsMore from './ButWaitThereIsMore';
import GlobalContext from '../common/GlobalContext';

const Home = () => {
  const { setHomeRef } = useContext(GlobalContext);
  const homeRef = useRef();

  useEffect(() => {
    setHomeRef(homeRef);
  }, []);

  return (
    <div ref={homeRef} className={'vh-100 d-flex flex-column container justify-content-between pt-5'}>
      <HomeHeader />
      <HomeDetail />
      <ButWaitThereIsMore />
    </div>
  );
};

export default Home;
