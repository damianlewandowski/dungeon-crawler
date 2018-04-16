import { connect } from 'react-redux';
import PlayerStatsList from '../components/PlayerStatsList';
import { determineTime } from '../util/util';

const mapStateToProps = ({ player, dungeonLevel, seconds }) => ({
  hp: player.hp,
  maxHp: player.maxHp,
  level: player.level,
  exp: player.exp,
  weapon: player.weapon,
  armor: player.armor,
  dungeonLevel,
  time: determineTime(seconds)
})

export default connect(mapStateToProps)(PlayerStatsList);