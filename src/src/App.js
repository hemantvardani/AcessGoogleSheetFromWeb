import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import { Table, Button , Input } from 'semantic-ui-react'
import loadingGif from './assests/icons8-loading-circle.gif'
import './styles/App.css';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.css';

function App() {
  
const REACT_APP_GOOGLE_SHEET_LINK = process.env.REACT_APP_GOOGLE_SHEET_LINK

const [apiData,setApiData] = useState([]);
const [refreshIcon, setRefreshIcon]= useState(false);
const [showSubmittingMessage, setShowSubmittingMessage] = useState(false);
const [editableData, setEditableData]= useState(null);


function submitFunction(e){
              const formElement=document.querySelector('Form');
              e.preventDefault();
              

              setShowSubmittingMessage(true);


              console.log(e.target[1].value);
            
              const formData= { "ID" : e.target[0].value, "Avatar_Name" : e.target[2].value, "Performance_Score":   e.target[1].value };
            

              const formSelected = document.getElementById('myForm');
              formSelected.reset();

              axios.post(REACT_APP_GOOGLE_SHEET_LINK, formData)
              .then( submitting ) 
            
              
            }



  
  function fetchData(){
              console.log("sss")
              axios.get(REACT_APP_GOOGLE_SHEET_LINK)
              .then((e)=>{console.log(e.data); setApiData(e.data)});  }

  

  useEffect(()=>{ fetchData();  },[refreshIcon]);



  function scrollToSection2() {
                  const section2 = document.getElementById('section2');
                  if (section2) {
                    section2.scrollIntoView({ behavior: 'smooth' });
                  }}



  function  SyncButtonFun(){
                setRefreshIcon(true);
                setTimeout(() => {
                  
                  setShowSubmittingMessage(false);
                  setRefreshIcon(false);
                }, 1000);   }

  function submitting(){

    setRefreshIcon(true);
    SyncButtonFun();
  }

  function deleteRow(index)
  {
    console.log(index)
    console.log(apiData.length)
    const newApiData=[...apiData];
    newApiData.splice(index,1);
    console.log(newApiData.length)
    setApiData(newApiData)
    axios.delete(`${REACT_APP_GOOGLE_SHEET_LINK}/${index}`).then((e)=>{console.log(e.data)});
  }

  function editRow(index){
    setEditableData({index:index,
      ID:apiData[index].ID,
      "Avatar_Name":apiData[index].Avatar_Name,
       "Performance_Score":apiData[index].Performance_Score
    });
  }

  function submitEditedRow(index){
    const dupApiData=[...apiData];
    dupApiData[index]={ ID:editableData.ID,
      "Avatar_Name":editableData.Avatar_Name,
       "Performance_Score":editableData.Performance_Score};

    setApiData(dupApiData)
    console.log("he"+ JSON.stringify(dupApiData[index],null,2));
    axios.put(`${REACT_APP_GOOGLE_SHEET_LINK}/${index}`,dupApiData[index]);
    setEditableData(null)

  }
           



  return (


        <div>
          <div class="flex flex-col h-screen   items-center justify-center">

             <div class=' min-w-[100%] min-h-[100%]  flex flex-col items-center justify-center  border border-gray-200 rounded-1xl shadow-lg bg-violet-700'>
                <p class='font-mono	 text-purple-400 text-3xl font-bold italic'>Now...</p>
          
                <p class="font-black text-6xl text-white drop-shadow-lg mt-10">Access Your <span class="text-[#50d71e]">Google Sheet</span></p>
                <p class="font-black text-6xl text-white"> From Web</p>
              
            
                   <button type="button"   onClick ={scrollToSection2} class=" font-mono	 items-center justify-center  text-white w-[20%] h-[10%] bg-blue-800 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg font-bold text-2xl px-5 py-2.5 text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        
                    See Example
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                   </button>


             </div>
          </div>

          
          <section id="section2" class=''>


              <div className="App" class="pt-10 flex flex-col" >
                
            



              <div class="flex flex-col items-center justify-center">
                  <div class= " p-20 h-[30%] w-[50%] items-center justify-center bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 border-gray-200 rounded-3xl shadow-lg " >

                      <p class="font-black text-2xl text-white drop-shadow-lg" > Adding New Row </p>
                      <form id="myForm" class=" flex flex-col items-center justify-center border w-[50%]"  className='Form' onSubmit={(e)=>submitFunction(e)} >
                          <div class="flex flex-wrap -mx-3 mb-6">
                              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label class=" text-lg block uppercase tracking-wide text-black  font-bold mb-2" for="grid-first-name">
                                    ID
                                  </label>
                                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" required placeholder="ID"/>
                                  <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                              </div>  
                              <div class="w-full md:w-1/2 px-3">
                                  <label class="  text-lg block uppercase tracking-wide  text-black  font-bold mb-2" for="grid-last-name">
                                    Performance Score
                                  </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" required type="number" placeholder="Performance Score"/>
                              </div>
                          </div>

                          <div class="flex flex-wrap -mx-3 mb-6">
                              <div class="w-full px-3">
                                  <label class=" text-lg   block uppercase tracking-wide text-black    font-bold mb-2" for="grid-password">
                                    Avatar Name
                                  </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" required type="text" placeholder="Avatar Name" />
                              
                              
                              </div>
                          </div>
                        

                          <div class="flex flex-row items-center justify-center relative ">
                             
                              {
                              showSubmittingMessage ? (
                                
                                      <p class=" text-3xl text-white p-2  absolute top-0 mt-4">
                                        Submitting...
                                      </p>
                              ):
                              (<Button primary  ><input type="submit" name='Submit' /></Button>)
                            }

                        </div>
                        {/* onClick={ SyncButtonFun} */}
                        
                      </form>

                  </div>
              </div>




                <div  class= "mt-10 mb-20">





                     <div  class=" flex flex-col  ">

              
                        <div class="mr-5 mb-5 flex flex-row-reverse">
                            <Button positive onClick={SyncButtonFun}>
                                <div className="flex items-center space-x-2">
                                <span>Refresh Table</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          >
                                            <polyline points="23 4 23 10 17 10"></polyline>
                                            <polyline points="1 20 1 14 7 14"></polyline>
                                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                          </svg>
                                  
                                </div>
                            </Button>
                        </div>


                        <div class=" flex flex-col items-center justify-center">

                              { refreshIcon? 
                              // <button></button>
                              // <img src={require('../assets/load.gif')} alt="loading..." />
                              <img src={loadingGif} alt="wait until the page loads" />

                              : 
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
                                    
                                    {
                                    
                                    
                                    apiData.map((data,index)=>{

                                      return (

                                    editableData?.index===index
                                      ?
                                       
                                       <Table.Row  >
                                         <Table.Cell>
                                           <Input value={editableData.ID} onChange={(e)=>{setEditableData({...editableData,ID:e.target.value})}}>
                                           </Input>
 
                                         </Table.Cell>
 
                                         <Table.Cell>
                                           <Input value={editableData.Avatar_Name} onChange={(e)=>{  setEditableData({...editableData,Avatar_Name:e.target.value})}}>
                                           </Input>
 
                                         </Table.Cell>
 
 
                                         <Table.Cell>
                                           <Input value={editableData.Performance_Score} onChange={(e)=>{   setEditableData({...editableData,Performance_Score:e.target.value})}}>
                                           </Input>
 
                                         </Table.Cell>
                                         <Table.Cell>
                                         <i class="check circle icon" style={{color:'#179c03' }}  onClick={()=>{submitEditedRow(index)}}></i>
                                  
                                         </Table.Cell>
               
                                       </Table.Row>
                                      :
                                      <Table.Row className= 'row-hover' disabled={editableData?true:false}>

                                        
                                      <Table.Cell>{data.ID}                                       
                                      </Table.Cell>
                                      <Table.Cell>{data.Avatar_Name}</Table.Cell>
                                      <Table.Cell>
                                      
                                          {data.Performance_Score} 
                                          
                                          </Table.Cell> 
                                          <Table.Cell className='editOrDelete' style={{marginLeft:40}}>
                                           <i class="edit icon"  style={{color:'#91ed72'}} onClick={()=>editRow(index)} ></i>
                                         <i class="trash alternate icon" style={{color:'#f04d4d'}} onClick={()=>
                                          deleteRow(index)
                                         }   ></i>
                                        
                                      </Table.Cell>              
                                    </Table.Row>
                                    )



                                   
                                     


                                       
                                        

                                        
                                      
                                      

                                    })
                                    }
                                    
                                    

                                    
                                    </Table.Body>
                                        </Table>
                                </div>
                              }


                        </div>
                        
                     </div>
                
                </div>


              </div>
          </section>


        </div>
  );}

export default App;
