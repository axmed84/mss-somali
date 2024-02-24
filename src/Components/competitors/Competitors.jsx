import styles from './competitors.module.scss';
// import competitors from '../../assets/competitors.json'
import FCompetitor from '../competitor/FCompetitor';
import { useSelector } from 'react-redux';

function Competitors() {

  const {competitors} = useSelector((store) => store.competitor)
  return (
    <div className={styles.competitors_container}>
    <div className={styles.competitor_header}>
      <span>Miss Somali</span>
      <p>
        Built with React.Js - the template is a well-structured, thoughtfully
        componentized next.js project, giving you a codebase that's productive
        and enjoyable to work in
      </p>
    </div>
    <div className={styles.competitors}>
        {
            competitors.map((competitor) => (
               
                <FCompetitor key={competitor.Id} competitor={competitor}/>
            ))
            
        }
    </div>
    </div>
  )
}

export default Competitors