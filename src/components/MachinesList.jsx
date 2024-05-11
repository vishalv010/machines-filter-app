import { BUTTON_STATUS } from "../machines-data";

export const MachinesList = (props) => {
  const { machinesList } = props;
  return (
    <table>
      <tr>
        <th>Model</th>
        <th>Name</th>
        <th>Type</th>
        <th>Status</th>
        <th>Manufacturer</th>
      </tr>
      {machinesList.length > 0 ? (
        machinesList.map((machine) => {
          return (
            <tr key={machine.mode}>
              <td>{machine.model}</td>
              <td>{machine.name}</td>
              <td>{machine.type}</td>
              <td>{machine.status === BUTTON_STATUS.NO_STATUS ? '' : machine.status}</td>
              <td>{machine.manufacturer}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="5" style={{textAlign: 'center'}}>Please select machine type to see machine details</td>
        </tr>
      )}
    </table>
  );
};
