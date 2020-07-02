const sessionModel = require('../models/session');

module.exports = {
    async create(session) {
        if (!session || !session._id || !session.user) 
            throw new Error('Missing session data');

        return await sessionModel.create(session);
    },

    async find(id) {
        await sessionModel.findById(id, (err, res) => {
            return {res, err};
        })
    },

    async delete(id) {
        sessionModel.delete({_id:id}, (err) => {
            if (err)
                throw new Error(err);
        })
    }
}