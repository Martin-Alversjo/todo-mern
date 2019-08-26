var configFiles = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return "mongodb+srv://" + configFiles.uname + ":" + configFiles.pwd + "@nodetodo-qf3ip.mongodb.net/test?retryWrites=true&w=majority"; 
    }

}