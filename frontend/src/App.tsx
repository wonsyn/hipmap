import React, { useState } from "react";
import Layout from "./components/layout";
import CommonButton from "./components/button/CommonButton";
import Modal from "./components/modal/Modal";

function App() {
  const [modalState, setModalState] = useState<boolean>(false);
  const modalHandler = () => {
    console.log(modalState);
    setModalState((prev) => {
      return !prev;
    });
  };
  return (
    <Layout>
      <div>
        <CommonButton
          width="100px"
          height="100px"
          color="red"
          onClick={modalHandler}
        >
          <div>이거는 버튼?</div>
        </CommonButton>
        {modalState ? <Modal modalHandler={modalHandler} /> : null}
      </div>
    </Layout>
  );
}

export default App;
