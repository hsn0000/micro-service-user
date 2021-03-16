const { User } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;

    const user = await User.findByPk(id);

    if(!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }
  
    await user.destroy();

    return res.status(200).json({
        status: 'success',
        message: ''+user.name+' has been delete'
    })

}