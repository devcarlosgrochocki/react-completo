import React from 'react';

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', description);
  }, []);

  return <></>;
};

export default Head;
