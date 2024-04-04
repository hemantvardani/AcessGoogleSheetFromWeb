import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Header } from './layouts/Header';
import loadingGif from './assests/icons8-loading-circle.gif';
import './styles/App.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.min.css';
import { FormAddNewRow } from './components/FormAddNewRow';
import { CircularRefreshIcon } from './assests/circular-refresh';
import { TableContainingData } from './components/TableContainingData';

function App() {
  const REACT_APP_GOOGLE_SHEET_LINK = process.env.REACT_APP_GOOGLE_SHEET_LINK;

  const [apiData, setApiData] = useState([]);
  const [refreshIcon, setRefreshIcon] = useState(false);
  const [showSubmittingMessage, setShowSubmittingMessage] = useState(false);
  const [editableData, setEditableData] = useState(null);

  function submitFunction(e) {
    const formElement = document.querySelector('Form');
    e.preventDefault();

    setShowSubmittingMessage(true);

    console.log(e.target[1].value);

    const formData = {
      ID: e.target[0].value,
      Avatar_Name: e.target[2].value,
      Performance_Score: e.target[1].value,
    };

    const formSelected = document.getElementById('myForm');
    formSelected.reset();

    axios.post(REACT_APP_GOOGLE_SHEET_LINK, formData).then(submitting);
  }

  function fetchData() {
    axios.get(REACT_APP_GOOGLE_SHEET_LINK).then((e) => {
      setApiData(e.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [refreshIcon]);

  function SyncButtonFun() {
    setRefreshIcon(true);
    setTimeout(() => {
      setShowSubmittingMessage(false);
      setRefreshIcon(false);
    }, 1000);
  }

  function submitting() {
    setRefreshIcon(true);
    SyncButtonFun();
  }

  function deleteRow(index) {
    console.log(index);
    console.log(apiData.length);
    const newApiData = [...apiData];
    newApiData.splice(index, 1);
    console.log(newApiData.length);
    setApiData(newApiData);
    axios.delete(`${REACT_APP_GOOGLE_SHEET_LINK}/${index}`).then((e) => {
      console.log(e.data);
    });
  }

  function editRow(index) {
    setEditableData({
      index: index,
      ID: apiData[index].ID,
      Avatar_Name: apiData[index].Avatar_Name,
      Performance_Score: apiData[index].Performance_Score,
    });
  }

  function submitEditedRow(index) {
    const dupApiData = [...apiData];
    dupApiData[index] = {
      ID: editableData.ID,
      Avatar_Name: editableData.Avatar_Name,
      Performance_Score: editableData.Performance_Score,
    };

    setApiData(dupApiData);
    console.log('he' + JSON.stringify(dupApiData[index], null, 2));
    axios.put(`${REACT_APP_GOOGLE_SHEET_LINK}/${index}`, dupApiData[index]);
    setEditableData(null);
  }

  return (
    <div>
      <Header />

      <section id="section2" class="">
        <div className="App" class="pt-10 flex flex-col">
          <div class="flex flex-col items-center justify-center">
            <FormAddNewRow
              submitFunction={submitFunction}
              showSubmittingMessage={showSubmittingMessage}
            />
          </div>

          <div class="mt-10 mb-20">
            <div class=" flex flex-col  ">
              <div class="mr-5 mb-5 flex flex-row-reverse">
                <Button positive onClick={SyncButtonFun}>
                  <div className="flex items-center space-x-2">
                    <span>Refresh Table</span>
                    <CircularRefreshIcon />
                  </div>
                </Button>
              </div>

              <div class=" flex flex-col items-center justify-center">
                {refreshIcon ? (
                  <img src={loadingGif} alt="wait until the page loads" />
                ) : (
                  <div class=" w-[90%]">
                    <TableContainingData
                      apiData={apiData}
                      deleteRow={deleteRow}
                      editRow={editRow}
                      editableData={editableData}
                      setEditableData={setEditableData}
                      submitEditedRow={submitEditedRow}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
