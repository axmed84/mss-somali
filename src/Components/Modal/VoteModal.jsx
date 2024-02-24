import Modal from "react-modal"
import { useState } from "react";
import styles from './vote.module.scss';
import { FaPlus,FaMinus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../store";
import { handleModal } from "../../features/modal/modalSlice";
import { addVoteToCompetitor, decreaseVote, increaseVote, resetState } from "../../features/competitors/competitorSlice";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
export default function VoteModal() {
  const dispatch = useDispatch();
    let subtitle;

  const {isOpen}= useSelector( (store) => store.modal)
  const {currentCompetitor, voteCount} = useSelector( (store) => store.competitor)
  

  function closeModal() {
    dispatch(handleModal())
  }

  if(!currentCompetitor) return;

  const backgroundStyle = {
    width: "100%",
    height: "500px",
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),
    url('${currentCompetitor.Photo}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderBottomRightRadius: "10px"
};

const handleSubmit =(event) => {
  event.preventDefault()
  dispatch(addVoteToCompetitor(currentCompetitor.Id))
  dispatch(resetState)
  closeModal()
}
  return (
    <div>
        {/* <button onClick={() => dispatch(handleModal())}>Open Modal</button> */}
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" className={styles.modal} 
        overlayClassName={styles.overlay}>
            <div className={styles.modal_container}>
                <div className={styles.competitor_info}>
                    <div style={backgroundStyle}></div>
                    <div className={styles.bio}>
                        <div className={styles.divider}>
                            <label htmlFor="">Name</label>
                            <span>{currentCompetitor.FirstName + " " + 
                            currentCompetitor.LastName}
                            </span>
                        </div>
                        <div className={styles.divider}>
                            <label htmlFor="">State</label>
                            <span>{currentCompetitor.RepresentingState}</span>
                        </div>
                        <div className={styles.divider}>
                            <label htmlFor="">Background Study</label>
                            <span>{currentCompetitor.PersonalBackground}</span>
                        </div>
                        <div className={styles.divider}>
                            <label htmlFor="">Employment</label>
                            <span>{currentCompetitor.EmploymentorSchool}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.vote_container}>
                    <div className={styles.vote_count}>
                        <span>Purchase Vote</span>
                        <div className={styles.vote_controls}>
                            <button type="button" onClick={() => dispatch(decreaseVote())}>
                            <FaMinus  className={styles.icon}/>
                            </button>
                            <span>{voteCount}</span>
                            <button type="button" onClick={() => dispatch(increaseVote())}>
                            <FaPlus  className={styles.icon}/>
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <span>Pay With EVC, Zaad and Sahal</span>
                    <input type="number" placeholder="Enter Your Number"
                    className={styles.form_control}/>
                    <button type="submit">Vote Now</button>
                </form>
                </div>

             
            </div>
      </Modal>
    </div>
  )
}
