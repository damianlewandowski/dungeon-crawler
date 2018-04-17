import { connect } from 'react-redux';
import ResultsInfo from '../components/ResultsInfo'
import { determineTime } from '../util/util';

const mapStateToProps = ({ player, dungeonLevel, seconds, bossAlive }) => ({
  playerAlive: player.alive,
  bossAlive: bossAlive,
  level: player.level,
  weapon: player.weapon.name,
  armor: player.armor.name,
  dungeonLevel: dungeonLevel,
  time: determineTime(seconds),
  playerName: player.name,
})

export default connect(mapStateToProps)(ResultsInfo)