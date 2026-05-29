import React from 'react';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function CPUChart({ currentValue }) {
  // Keep last 20 data points for a rolling chart
  const [history, setHistory] = useState(Array(20).fill({ value: 0 }));

  useEffect(() => {
    if (currentValue === undefined) return;
    setHistory(prev => [...prev.slice(1), { value: currentValue }]);
  }, [currentValue]);

  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={history}>
        <XAxis dataKey="time" hide/>
        <YAxis domain={[0, 100]} tick={{ fill: '#9ca3af', fontSize: 11 }}/>
        <Tooltip
          contentStyle={{ background: '#1f2937', border: 'none', borderRadius: 8 }}
          labelStyle={{ color: '#9ca3af' }}
          itemStyle={{ color: '#60a5fa' }}
          formatter={v => [`${v}%`, 'CPU']}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}          // no dots — cleaner for live data
          isAnimationActive={false}  // disable animation for live updates
        />
      </LineChart>
    </ResponsiveContainer>
  );
}