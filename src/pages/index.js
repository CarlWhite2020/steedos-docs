import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    // 这部分代码将在页面加载完成后执行
    const language = navigator.language || navigator.userLanguage;

    // 检查语言是否是中文
    if (language.includes('zh-CN') || language.includes('zh')) {
      window.location.href = '/zh-CN/overview';
    } else {
      // 为其他语言添加更多条件或保留为默认语言
      window.location.href = '/overview';  // 示例
    }
  }, []);

  // 页面内容（如果有的话）在重定向发生之前可能会短暂显示
  return <div></div>;
}

export default Home;