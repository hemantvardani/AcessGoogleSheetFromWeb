import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Input } from 'semantic-ui-react';
import { Header } from './layouts/Header';
import loadingGif from './assests/icons8-loading-circle.gif';
import './styles/App.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.min.css';
import { FormAddNewRow } from './components/FormAddNewRow';
import { CircularRefreshIcon } from './assests/circular-refresh';

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
    console.log('sss');
    axios.get(REACT_APP_GOOGLE_SHEET_LINK).then((e) => {
      console.log(e.data);
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
                    <Table singleLine>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>ID</Table.HeaderCell>
                          <Table.HeaderCell>Avatar Name</Table.HeaderCell>
                          <Table.HeaderCell>Performance Score</Table.HeaderCell>
                          <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {apiData.map((data, index) => {
                          return editableData?.index === index ? (
                            <Table.Row>
                              <Table.Cell>
                                <Input
                                  value={editableData.ID}
                                  onChange={(e) => {
                                    setEditableData({
                                      ...editableData,
                                      ID: e.target.value,
                                    });
                                  }}
                                ></Input>
                              </Table.Cell>

                              <Table.Cell>
                                <Input
                                  value={editableData.Avatar_Name}
                                  onChange={(e) => {
                                    setEditableData({
                                      ...editableData,
                                      Avatar_Name: e.target.value,
                                    });
                                  }}
                                ></Input>
                              </Table.Cell>

                              <Table.Cell>
                                <Input
                                  value={editableData.Performance_Score}
                                  onChange={(e) => {
                                    setEditableData({
                                      ...editableData,
                                      Performance_Score: e.target.value,
                                    });
                                  }}
                                ></Input>
                              </Table.Cell>
                              <Table.Cell>
                                <i
                                  class="check circle icon"
                                  style={{ color: '#179c03' }}
                                  onClick={() => {
                                    submitEditedRow(index);
                                  }}
                                ></i>
                              </Table.Cell>
                            </Table.Row>
                          ) : (
                            <Table.Row
                              className="row-hover"
                              disabled={editableData ? true : false}
                            >
                              <Table.Cell>{data.ID}</Table.Cell>
                              <Table.Cell>{data.Avatar_Name}</Table.Cell>
                              <Table.Cell>{data.Performance_Score}</Table.Cell>
                              <Table.Cell
                                className="editOrDelete"
                                style={{ marginLeft: 40 }}
                              >
                                <i
                                  class="edit icon"
                                  style={{ color: '#91ed72' }}
                                  onClick={() => editRow(index)}
                                ></i>
                                <i
                                  class="trash alternate icon"
                                  style={{ color: '#f04d4d' }}
                                  onClick={() => deleteRow(index)}
                                ></i>
                              </Table.Cell>
                            </Table.Row>
                          );
                        })}
                      </Table.Body>
                    </Table>
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
