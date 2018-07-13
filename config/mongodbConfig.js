var config = {
    connectPath: 'mongodb://localhost:27017/myDB'
};

var docker_config = {
    connectPath: 'mongodb://my_mongodb:27017/myDB'
};

var docker_env_config = {
    connectPath: 'mongodb://' + process.env.DB_NAME + ':' + process.env.DB_PORT + '/' + process.env.DB_COLLECTION_NAME
};

module.exports = docker_env_config;
