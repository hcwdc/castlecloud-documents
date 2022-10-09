import React from 'react';
import Style from './style.css';
import Logo from './image/logo.png';

export default () => {
  function onLink() {
    window.location.href = '/#/cframe/介绍/项目介绍';
  }
  return (
    <div className={Style.content}>
      <img src={Logo} alt="logo" className={Style.logo} />
      <h1>Castle 开放平台</h1>
      <h4>面向应用业务的开发框架</h4>
      <button onClick={onLink}>开始使用</button>
    </div>
  );
};
