import { FILTER_BUTTONS } from "../machines-data";
import classes from "./FilterContainer.module.css";
import { getButtonStyle, getFilteredMachines } from "../utility";

export const FiltersContainer = ({activeButton, onButtonClick }) => {
  return (
    <div className={classes.filtersContainer}>
      <div className={classes.sideDiv}></div>
      <div className={classes.content}>
        <h2 className={classes.heading}>
          Compare Machines
        </h2>
        <hr className={classes.divider} />
        <div className={classes.buttonsContainer}>
          {FILTER_BUTTONS.map((button) => {
            const filteredMachines = getFilteredMachines(button.name);
            return (
              <button
                key={button.name}
                className={classes.button}
                style={getButtonStyle(
                  activeButton,
                  button.name,
                  button.bgColor
                )}
                onClick={() => onButtonClick(button.name)}
              >{`${button.name} (${filteredMachines.length})`}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
