const mongoose = require('../db/connection');
// Add Schema
const Schema = mongoose.Schema

const platformSchema = new Schema({
    id: Number,
    name: String,
    site_detail_url: String
})

const imageSchema = new Schema ({
    icon_url: String,
    medium_url: String,
    screen_url: String,
    screen_large_url: String,
    small_url: String,
    super_url: String,
    thumb_url: String,
    tiny_url: String,
    original_url: String,
    image_tags: String
})

const PS3Schema = new Schema({
    name: String,
    deck: String,
    platforms: [platformSchema],
    image: [imageSchema],
    original_release_date: Date,
    site_detail_url: String,
})

// Export module Schema
module.exports = mongoose.model('PS3', PS3Schema);