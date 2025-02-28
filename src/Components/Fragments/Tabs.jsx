import {useState} from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {title: 'Winter 2025', content: 'Ini adalah halaman winter.'},
    {title: 'Spring 2025', content: 'Ini adalah halaman spring.'},
    {title: 'Summer 2025', content: 'Ini adalah halaman summer.'},
    {title: 'Fall 2025', content: 'Ini adalah halaman fall.'},
  ];

  return (
    <div className='w-full max-w-lg mx-auto mt-10'>
      {/* Tab Navigation */}
      <div className='flex border-b'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 text-center text-lg font-medium 
              ${
                activeTab === index
                  ? 'border-b-4 border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }
              transition-all duration-300`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='p-4 bg-white shadow-md mt-2 rounded-lg'>
        <p className='text-gray-700'>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
