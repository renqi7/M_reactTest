// 作者
const mongoose = require('mongoose')

const moment = require('moment')

const Schema = mongoose.Schema
const Author = new Schema({
    first_name: {
        type: String,
        required: true,
        max: 10
    },
    family_name: {
        type: String,
        required: true,
        max: 100
    },
    date_of_birth: {
        type: Date
    },
    date_of_death: {
        type: Date
    },
})
// 虚拟属性'name'：表示作者全名
Author.virtual('name').get(function () {
    return this.family_name + ',' + this.first_name
})

// 虚拟属性‘lifespan’ 作者寿命
Author.virtual('lifespan').get(function () {
    return this.date_of_death.getYear() - this.date_of_birth.getYear()
})

// 虚拟属性'url'：作者 URL
Author
    .virtual('url')
    .get(function () {
        return '/catelog/author/' + this._id;
    });
Author
    .virtual('date_birth')
    .get(function () {
        return moment(this.date_of_birth).format('YYYY-MM-DD')
    });
Author
    .virtual('date_death')
    .get(function () {
        return moment(this.date_of_death).format('YYYY-MM-DD')
    });
Author
    .virtual('between_date')
    .get(function () {
        var birth_date = moment(this.date_of_birth)
        var death_date = moment(this.date_of_death)
        return death_date.diff(birth_date, 'years') == 0 ? ' ' : death_date.diff(birth_date, 'years')
    });

// 导出模型
module.exports = mongoose.model('Author', Author)