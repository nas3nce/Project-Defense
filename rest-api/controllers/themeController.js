const { themeModel } = require('../models');
const { newPost } = require('./postController');

function getThemes(req, res, next) {
    themeModel.find()
        .populate('userId')
        .then(themes => res.json(themes))
        .catch(next);
}

function getTheme(req, res, next) {
    const { themeId } = req.params;

    themeModel.findById(themeId)
        .populate({
            path: 'posts',
            populate: {
                path: 'userId'
            }
        })
        .then(theme => res.json(theme))
        .catch(next);
}

function getLastFour(req, res, next) {
    themeModel.find()
        .sort({ created_at: -1 }).limit(4)
        .populate('userId')
        .then(themes => res.json(themes))
        .catch(next);
}

function deleteTheme(req, res, next) {
    const { themeId } = req.params;

    themeModel.findByIdAndDelete(themeId)
        .then(theme => res.json(theme))
        .catch(next);
}

function createTheme(req, res, next) {
    const { themeName, postText, breed, age, image, description } = req.body;
    const { _id: userId } = req.user;


    themeModel.create({ themeName, breed, age, image, description, userId, subscribers: [] })
        .then(theme => res.status(200).json(theme))
        .catch(next);
}

function subscribe(req, res, next) {
    const themeId = req.params.themeId;
    const { _id: userId } = req.user;
    themeModel.findByIdAndUpdate({ _id: themeId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedTheme => {
            res.status(200).json(updatedTheme);
        })
        .catch(next);
}

function editTheme(req, res, next) {
    const themeId = req.params.themeId;
    const { _id: userId } = req.user;
    console.log(req.body);
    themeModel.findByIdAndUpdate({ _id: themeId }, req.body)
        .then(updatedTheme => {
            res.status(200).json(updatedTheme);
        })
        .catch(next);
}

function search(req, res, next) {
    const { query } = req.body;
    const breed = query;
    console.log(req.body);

    themeModel.find()
        .populate('userId')
        .then(themes => {
            themesBreed = themes.filter(cat => cat.breed.toLowerCase().includes(breed.toLowerCase()));
            themesName = themes.filter(cat => cat.themeName.toLowerCase().includes(query.toLowerCase()));

            const uniqueResultOne = themesBreed.filter(function (obj) {
                return !themesName.some(function (obj2) {
                    return obj._id == obj2._id;
                });
            });

            const uniqueResultTwo = themesName.filter(function (obj) {
                return !themesBreed.some(function (obj2) {
                    return obj._id == obj2._id;
                });
            });

            matchingByBoth = themesBreed.filter(o => themesName.some(({ themeName }) => o.themeName === themeName));

            themes = (uniqueResultOne.concat(uniqueResultTwo)).concat(matchingByBoth);

            console.log({ themes });

            res.json(themes);
        })
        .catch(next);
}

module.exports = {
    getThemes,
    createTheme,
    getTheme,
    subscribe,
    deleteTheme,
    editTheme,
    getLastFour,
    search
};
