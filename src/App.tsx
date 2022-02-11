import React from "react";

import Button from "./components/Button/button";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Button>默认按钮</Button>
			<Button type="primary">主要按钮</Button>
			<Button type="success">主要按钮</Button>
			<Button type="info">主要按钮</Button>
			<Button type="warning">主要按钮</Button>
			<Button type="danger">主要按钮</Button>
			<Button type="text">文本</Button>
			<Button shape="circle">A</Button>
			<Button shape="round">主要按钮</Button>
			<Button size="medium">中等按钮</Button>
			<Button size="small">小型按钮</Button>
			<Button size="mini">超小按钮</Button>
			<Button disabled size="mini">禁用</Button>
			<Button loading size="mini">加载</Button>
      <div><Button href="www.baidu.com">链接</Button></div>
		</div>
	);
}

export default App;
