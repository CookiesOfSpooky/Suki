const config = require("../config.json");
module.exports = async(client) => {

    client.user.setPresence({
        statut: "inactive",
        activity: {
            name: config.statut,
            type: config.type
        }
    })
}