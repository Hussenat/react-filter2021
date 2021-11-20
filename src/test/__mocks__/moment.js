const moment = require.requireActual("moment"); //Node way of importing libraries

export default (timestamp = 0) => {
    return moment(timestamp);
};