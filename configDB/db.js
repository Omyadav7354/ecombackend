const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://palashgoud84:pDXr2aSiI0Bwmxuz@cluster0.wa6lc.mongodb.net/noice', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
