import { connect } from 'react-redux';
import PlayerStatsList from '../components/PlayerStatsList';


const mapStateToProps = ({ player }) => ({
  hp: player.hp,
  maxHp: player.maxHp,
  level: player.level,
  exp: player.exp,
  weapon: player.weapon,
  armor: player.armor,
})

export default connect(mapStateToProps)(PlayerStatsList);