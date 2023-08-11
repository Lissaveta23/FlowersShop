import { FC, PropsWithChildren } from "react";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import "./Popup.scss";

interface PopupProps {
  handleClose: () => void;
};

const Popup: FC<PropsWithChildren<PopupProps>> = ({
  children,
  handleClose,
}) => {
  return (
    <div className="popup">
      <div className="popup__box">
        {children}
        <CloseIcon className="popup__close" onClick={handleClose} />
      </div>
    </div>
  );
};

export default Popup;
