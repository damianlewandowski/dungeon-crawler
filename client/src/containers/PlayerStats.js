import { connect } from 'react-redux';
import PlayerStatsList from '../components/PlayerStatsList';


const mapStateToProps = ({ player, dungeonLevel }) => ({
  hp: player.hp,
  maxHp: player.maxHp,
  level: player.level,
  exp: player.exp,
  weapon: player.weapon,
  armor: player.armor,
  dungeonLevel
})

export default connect(mapStateToProps)(PlayerStatsList);