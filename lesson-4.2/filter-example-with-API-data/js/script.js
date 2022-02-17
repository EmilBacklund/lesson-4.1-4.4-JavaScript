import teams from "./data/team.js";
import { renderTeams } from "./ui/renderTeams.js";
import { searchTeams } from "./ui/searchTeams.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://noroff.herokuapp.com/v1/nba-teams/teams";
async function getTeams() {
  try {
    const response = await fetch(url);
    const NBATeams = await response.json();

    console.log(NBATeams);

    renderTeams(NBATeams);
    searchTeams(NBATeams);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".team-container");
  }
}
getTeams();
