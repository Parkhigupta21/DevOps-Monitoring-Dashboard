const mongoose = require('mongoose');

const deploymentSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  version:   { type: String, required: true },
  status:    { type: String, enum: ['success', 'failed', 'running'], default: 'running' },
  triggeredBy: { type: String },          // user or CI system
  commitHash:  { type: String },
  duration:    { type: Number },          // seconds
  environment: { type: String, enum: ['dev', 'staging', 'production'], default: 'dev' }
}, { timestamps: true });

module.exports = mongoose.model('Deployment', deploymentSchema);