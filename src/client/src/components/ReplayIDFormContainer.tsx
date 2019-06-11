import React, {useState} from 'react';
import ReplayIDForm from './ReplayIDForm';

const ReplayIDFormContainer = (props: any) => {
  const [input, setInput] = useState('432463590');
  const processForm = (event: any) => {
    event.preventDefault();
    
    fetch(`/api/process?replayID=${input}`)
      .then((res) => res.text())
      .then((text) => console.log(text))
      .catch((error) => console.log(event));
  }

  return <ReplayIDForm {...props} input={input} setInput={setInput} processForm={processForm} />
};

export default ReplayIDFormContainer;