import { Table, Input } from 'semantic-ui-react';

export function TableContainingData(props) {
  const apiData = props.apiData;
  const deleteRow = props.deleteRow;
  const editRow = props.editRow;
  const editableData = props.editableData;
  const setEditableData = props.setEditableData;
  const submitEditedRow = props.submitEditedRow;

  return (
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
              <Table.Cell className="editOrDelete" style={{ marginLeft: 40 }}>
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
  );
}
