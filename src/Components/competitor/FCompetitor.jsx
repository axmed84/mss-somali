import styles from './competitor.module.scss';
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { setCurrentCompetitor } from '../../features/competitors/competitorSlice';

function FCompetitor ({competitor}) {


    const dispatch = useDispatch();

    const voteNow = () => {
        dispatch(setCurrentCompetitor(competitor))
        dispatch(handleModal());
    }
    
    const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),
        url(${competitor.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

    return(
        <div className={styles.competitor} style={backgroundStyle}>
        <div className={styles.info}>
            <span className={styles.name}>{competitor.FirstName}</span>
            <span className={styles.state}>{competitor.RepresentingState}</span>
            <span className={styles.vote_count}>{competitor.NumberofVotes}</span>
        </div>
        <div className={styles.vote} onClick={voteNow}>
        <MdOutlineHowToVote className={styles.vote_icon}/>
        </div>
    </div>
    )
}

export default FCompetitor