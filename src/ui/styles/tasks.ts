import Styles from "@core/types/styles";

const taskStyles: Styles = {
  taskItem: {
    margin: "3px 0px",
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "dimgray",
    border: "solid 1px #ccc",
    borderRadius: "5px",
    userSelect: "none",
  },
  taskItemLabel: {
    width: "317px",
    paddingRight: "5px",
    display: "inline-block",
  },
  taskItemDoneButton: {
    backgroundColor: "#1a1",
    color: "white",
    padding: "3px",
    border: "1px solid #161",
    borderRadius: "4px",
    cursor: "pointer",
    boxSizing: "border-box",
    display: "inline-block",
  },
  tasksList: {
    height: "499px",
    userSelect: "none",
  },
  taskInputText: {
    width: "80%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRight: "none",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    boxSizing: "border-box",
  },
  taskInputButton: {
    width: "20%",
    backgroundColor: "#ccc",
    color: "dimgray",
    padding: "12px 20px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderLeft: "none",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    cursor: "pointer",
    boxSizing: "border-box",
    display: "inline-block",
  }
}

export default taskStyles;
