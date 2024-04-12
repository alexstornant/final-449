import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function RunLogs() {
  const [runLogs, setRunLogs] = useState([]);
  const [newRunLog, setNewRunLog] = useState({date: '', distance: '', time: ''});

  /**
   * Set runs info
   * use effect called when data updates
   */
  useEffect(() => {
    getRunLogs();
  }, []);

  async function getRunLogs() {
    const { data } = await supabase.from("runLogs").select();
    setRunLogs(data);
  }

  function handleInputChange(e) {
    // sets run log but with new value added
    setNewRunLog({ ...newRunLog, [e.target.id]: e.target.value }); 
  };

  async function addRunLog() {
    await supabase.from('runLogs').insert(newRunLog);
    setNewRunLog({date: '', distance: '', time: ''}) // reset new log
    getRunLogs(); // refresh page
    
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center my-10'>
        <div className='flex items-center justify-center rounded-3xl mb-6 bg-orange w-[500px] h-[90px]'>
          <h1 className='font-bold text-white text-5xl'>Your Run Logs</h1>
        </div>
      </div>
      <div className="min-h-[300px] w-[100%] bg-grey mb-10 py-4">
        <div className="mx-[20%] flex justify-evenly items-center">
          <div className="min-h-[300px] w-[32%] flex flex-col items-center justify-evenly">
            <h1 className='text-4xl mt-2 mb-4'>Date</h1>
            <div className="flex-grow flex flex-col">
              {runLogs.map(runLog => (
                <div key={runLog.id} className='flex items-center justify-center rounded-md mb-6 bg-white w-[200px] h-[55px]'>
                  <p className='text-orange text-3xl font-light'>{runLog.date}</p>
                </div>
              ))}
              <input
              id="date"
              type="text"
              value={newRunLog.date}
              onChange={handleInputChange}
              className='text-center rounded-md mb-6 bg-white w-[200px] h-[55px] text-orange text-3xl font-light placeholder:text-orange'
              placeholder='Date...' />
            </div>
          </div>
          <div className="min-h-[300px] w-[32%] flex flex-col items-center justify-evenly">
            <h1 className='text-4xl mt-2 mb-4'>Distance</h1>
            <div className="flex-grow flex flex-col">
              {runLogs.map(runLog => (
                <div key={runLog.id} className='flex items-center justify-center rounded-md mb-6 bg-white w-[200px] h-[55px]'>
                  <p className='text-orange text-3xl font-light'>{runLog.distance}</p>
                </div>
              ))}
              <input
              id="distance"
              type="text"
              value={newRunLog.distance}
              onChange={handleInputChange}
              className='text-center rounded-md mb-6 bg-white w-[200px] h-[55px] text-orange text-3xl font-light placeholder:text-orange'
              placeholder='Distance...' />
            </div>
          </div>
          <div className="min-h-[300px] w-[32%] flex flex-col items-center justify-evenly">
            <h1 className='text-4xl mt-2 mb-4'>Time</h1>
            <div className="flex-grow flex flex-col">
              {runLogs.map(runLog => (
                <div key={runLog.id} className='flex items-center justify-center rounded-md mb-6 bg-white w-[200px] h-[55px]'>
                  <p className='text-orange text-3xl font-light'>{runLog.time}</p>
                </div>
              ))}
              <input
              id="time"
              type="text"
              value={newRunLog.time}
              onChange={handleInputChange}
              className='text-center rounded-md mb-6 bg-white w-[200px] h-[55px] text-orange text-3xl font-light placeholder:text-orange'
              placeholder='Time...' />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button
          onClick={addRunLog}
          className='w-[250px] h-[55px] bg-orange rounded-md text-white text-2xl font-light'>Add New Run</button>
        </div>
      </div>
    </>

  );
}

export default RunLogs;
