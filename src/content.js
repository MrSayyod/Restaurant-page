import { nodeCreator, chainAppend } from './nodeCreator';

const Content = (() => {
  const addContent = () => {
    const container = document.getElementById('content');
    const divForContent = nodeCreator('div', { class: 'content-div' });
    chainAppend([container, divForContent]);
  };
  return { addContent };
})();

export default Content;