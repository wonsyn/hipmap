/** @jsxImportSource @emotion/react */
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SuccessAlerts = ({
  content,
  open,
  openHandler,
}: {
  content: string;
  open: boolean;
  openHandler: () => void;
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={openHandler}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key={"bottom" + "center"}
    >
      <Alert onClose={openHandler} severity="success">
        {content}
      </Alert>
    </Snackbar>
  );
};

export default SuccessAlerts;

export const FailedAlerts = ({
  content,
  open,
  openHandler,
}: {
  content: string;
  open: boolean;
  openHandler: () => void;
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={openHandler}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key={"bottom" + "center"}
    >
      <Alert onClose={openHandler} severity="error">
        {content}
      </Alert>
    </Snackbar>
  );
};
