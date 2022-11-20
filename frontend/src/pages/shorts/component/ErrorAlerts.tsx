/** @jsxImportSource @emotion/react */
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorAlerts = ({
  open,
  openHandler,
}: {
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
        문제가 발생하였습니다.
      </Alert>
    </Snackbar>
  );
};

export default ErrorAlerts;
