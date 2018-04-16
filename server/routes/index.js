const leaderboardRoutes = require('./leaderboard_routes');

module.exports = function(app, db) {
  leaderboardRoutes(app, db);
}