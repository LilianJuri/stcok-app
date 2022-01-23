import mongoose  from 'mongoose';

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isFeatured: {
        type: Boolean
    }
})

const Product = mongoose.model('Product', postSchema);

export default Product;
