const si = require('systeminformation');  // reads real CPU/RAM from OS

exports.getMetrics = async () => {
  const [cpu, mem, disk] = await Promise.all([
    si.currentLoad(),      // CPU usage %
    si.mem(),              // RAM in bytes
    si.fsSize()            // Disk usage
  ]);

  return {
    cpu: {
      usage: Math.round(cpu.currentLoad),
      cores: cpu.cpus.length
    },
    memory: {
      total: mem.total,
      used:  mem.used,
      free:  mem.free,
      usagePercent: Math.round((mem.used / mem.total) * 100)
    },
    disk: disk.map(d => ({
      mount: d.mount,
      total: d.size,
      used:  d.used,
      usagePercent: Math.round(d.use)
    }))
  };
};