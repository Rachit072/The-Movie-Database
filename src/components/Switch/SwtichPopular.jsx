import React from 'react'

export default function SwtichPopular() {
    const [activeComponent, setActiveComponent] = useState(null);
    
    const toggleComponent = (componentName) => {
    setActiveComponent(componentName === activeComponent ? null : componentName);
  };

  return (
    <div className='border-blue rounded-5 h-25 mt-2'>
      <button onClick={() => toggleComponent('Component1')}>Streaming</button>
      <button onClick={() => toggleComponent('Component2')}>On TV</button>
      <button onClick={() => toggleComponent('Component3')}>For Rent</button>
      <button onClick={() => toggleComponent('Component4')}>In Theatres</button>

      {activeComponent === 'Component1' && <Component1 />}
      {activeComponent === 'Component2' && <Component2 />}
      {activeComponent === 'Component3' && <Component3 />}
      {activeComponent === 'Component4' && <Component4 />}
    </div>
  )
}

