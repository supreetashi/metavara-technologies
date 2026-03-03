import React, { useEffect, useRef } from 'react';
import ServicePage from '../components/ServicePage';
import '../styles/DigitalTransformation.css';

const config = {
  hero: {
    title: 'Digital',
    highlight: 'Transformation',
    desc: 'We re-engineer enterprises from the inside out - modernizing infrastructure, culture, and capabilities to thrive in a digital-first world.',
    heroImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&fit=crop',
  },
  cards: [
    {
      tag: 'STRATEGY',
      icon: '🗺️',
      accent: '#3b82f6',
      title: 'Digital Strategy & Roadmapping',
      desc: 'Aligning your digital vision with business outcomes. We craft a clear, phased roadmap that drives measurable value at every milestone.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&fit=crop',
    },
    {
      tag: 'CLOUD',
      icon: '☁️',
      accent: '#6366f1',
      title: 'Cloud Migration & Modernization',
      desc: 'From legacy lift-and-shift to cloud-native re-architecture. We move fast, safely, and without disrupting your operations.',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&fit=crop',
    },
    {
      tag: 'DATA',
      icon: '📊',
      accent: '#06b6d4',
      title: 'Data & Analytics Transformation',
      desc: 'Unlock the intelligence in your data. We build pipelines, lakes, and dashboards that fuel confident, real-time decisions.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
    },
    {
      tag: 'CULTURE',
      icon: '🤝',
      accent: '#10b981',
      title: 'Culture & Change Management',
      desc: 'Technology alone does not transform organizations - people do. We build adoption programs and mindset shifts that last.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&fit=crop',
    },
  ],
  why: {
    title: 'Transformation That Actually Sticks',
    body: "We don't hand you a slide deck and disappear. Metavara embeds with your teams, transfers capability, and measures success by outcomes - not hours billed.",
  },
};

function DTIllustration() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    const setSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    setSize();
    window.addEventListener('resize', setSize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const NODES = [
      { label: 'Cloud', icon: '☁️' },
      { label: 'Data', icon: '📊' },
      { label: 'AI/ML', icon: '🤖' },
      { label: 'CX', icon: '🎯' },
      { label: 'Automate', icon: '⚙️' },
      { label: 'Security', icon: '🔒' },
    ];

    const orbitNodes = NODES.map((n, i) => ({
      ...n,
      angle: (i / NODES.length) * Math.PI * 2,
      pulse: Math.random() * Math.PI * 2,
      _x: 0,
      _y: 0,
    }));

    const packets = Array.from({ length: 20 }, (_, i) => ({
      edge: i % NODES.length,
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.004,
      size: 2 + Math.random() * 2,
      toCenter: Math.random() > 0.5,
    }));

    const arcPairs = [[0, 2], [1, 3], [2, 4], [3, 5], [4, 1], [0, 5]];

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: -(0.05 + Math.random() * 0.12),
      o: 0.08 + Math.random() * 0.18,
    }));

    const rain = Array.from({ length: 10 }, (_, i) => ({
      x: 0.06 + (i / 10) * 0.88,
      y: Math.random(),
      chars: Array.from({ length: 7 }, () => (Math.random() > 0.5 ? '1' : '0')),
      speed: 0.0008 + Math.random() * 0.0015,
      o: 0.03 + Math.random() * 0.05,
    }));

    let t = 0;

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, W(), H());

      const bg = ctx.createLinearGradient(0, 0, W(), H());
      bg.addColorStop(0, '#edf5fc');
      bg.addColorStop(1, '#f8fcff');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W(), H());

      ctx.save();
      ctx.strokeStyle = 'rgba(41,128,185,0.05)';
      ctx.lineWidth = 1;
      const gc = 18;
      const gr = 12;
      for (let i = 0; i <= gc; i += 1) {
        ctx.beginPath();
        ctx.moveTo((i / gc) * W(), 0);
        ctx.lineTo((i / gc) * W(), H());
        ctx.stroke();
      }
      for (let j = 0; j <= gr; j += 1) {
        ctx.beginPath();
        ctx.moveTo(0, (j / gr) * H());
        ctx.lineTo(W(), (j / gr) * H());
        ctx.stroke();
      }
      ctx.restore();

      rain.forEach((col) => {
        col.y += col.speed;
        if (col.y > 1.2) {
          col.y = -0.1;
          col.chars = col.chars.map(() => (Math.random() > 0.5 ? '1' : '0'));
        }
        ctx.save();
        ctx.font = '10px monospace';
        col.chars.forEach((ch, i) => {
          ctx.fillStyle = `rgba(26,82,118,${col.o * (1 - i / col.chars.length)})`;
          ctx.fillText(ch, col.x * W(), (col.y + i * 0.055) * H());
        });
        ctx.restore();
      });

      particles.forEach((p) => {
        p.x += p.dx * 0.001;
        p.y += p.dy * 0.012;
        if (p.y < -0.05) {
          p.y = 1.05;
          p.x = Math.random();
        }
        if (p.x < 0 || p.x > 1) p.dx *= -1;
        ctx.beginPath();
        ctx.arc(p.x * W(), p.y * H(), p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,128,185,${p.o})`;
        ctx.fill();
      });

      const cx = W() * 0.5;
      const cy = H() * 0.47;
      const orbitR = Math.min(W(), H()) * 0.3;

      orbitNodes.forEach((node) => {
        node.angle += 0.004;
        node.pulse += 0.045;
        node._x = cx + Math.cos(node.angle) * orbitR;
        node._y = cy + Math.sin(node.angle) * orbitR * 0.65;
      });

      arcPairs.forEach(([a, b], i) => {
        const na = orbitNodes[a];
        const nb = orbitNodes[b];
        const prog = ((t * 0.012 + i * 0.38) % 1);
        const alpha = Math.sin(prog * Math.PI) * 0.2;
        const mx = (na._x + nb._x) / 2;
        const my = ((na._y + nb._y) / 2) - 25;
        ctx.beginPath();
        ctx.moveTo(na._x, na._y);
        ctx.quadraticCurveTo(mx, my, nb._x, nb._y);
        ctx.strokeStyle = `rgba(93,173,226,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        const bx = ((1 - prog) ** 2 * na._x) + (2 * (1 - prog) * prog * mx) + (prog ** 2 * nb._x);
        const by = ((1 - prog) ** 2 * na._y) + (2 * (1 - prog) * prog * my) + (prog ** 2 * nb._y);
        ctx.beginPath();
        ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(93,173,226,0.75)';
        ctx.fill();
      });

      orbitNodes.forEach((node) => {
        const alpha = 0.1 + Math.sin(node.pulse) * 0.05;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(node._x, node._y);
        ctx.strokeStyle = `rgba(41,128,185,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      packets.forEach((pk) => {
        pk.progress += pk.speed;
        if (pk.progress > 1) pk.progress = 0;
        const node = orbitNodes[pk.edge % orbitNodes.length];
        const p = pk.progress;
        const px = pk.toCenter ? node._x + ((cx - node._x) * p) : cx + ((node._x - cx) * p);
        const py = pk.toCenter ? node._y + ((cy - node._y) * p) : cy + ((node._y - cy) * p);
        ctx.beginPath();
        ctx.arc(px, py, pk.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52,152,219,${0.55 + Math.sin(t * 0.08) * 0.2})`;
        ctx.shadowColor = '#3498db';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      orbitNodes.forEach((node) => {
        const gr2 = ctx.createRadialGradient(node._x, node._y, 0, node._x, node._y, 26 + (Math.sin(node.pulse) * 4));
        gr2.addColorStop(0, 'rgba(41,128,185,0.22)');
        gr2.addColorStop(1, 'rgba(41,128,185,0)');
        ctx.beginPath();
        ctx.arc(node._x, node._y, 26 + (Math.sin(node.pulse) * 4), 0, Math.PI * 2);
        ctx.fillStyle = gr2;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node._x, node._y, 18, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = 'rgba(41,128,185,0.38)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(41,128,185,0.15)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.icon, node._x, node._y);

        ctx.font = 'bold 8px sans-serif';
        ctx.fillStyle = '#1a5276';
        ctx.fillText(node.label, node._x, node._y + 28);
      });

      [90, 70, 52].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r + (Math.sin(t * 0.03 + i) * 2), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(41,128,185,${0.06 - i * 0.015})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      const cg = ctx.createRadialGradient(cx, cy - 6, 2, cx, cy, 30);
      cg.addColorStop(0, '#3498db');
      cg.addColorStop(1, '#1a5276');
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.fillStyle = cg;
      ctx.shadowColor = 'rgba(41,128,185,0.55)';
      ctx.shadowBlur = 22;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.font = '17px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚡', cx, cy);
      ctx.font = 'bold 8.5px sans-serif';
      ctx.fillStyle = 'rgba(26,82,118,0.65)';
      ctx.fillText('MVT CORE', cx, cy + 46);

      ctx.save();
      ctx.strokeStyle = 'rgba(41,128,185,0.1)';
      ctx.lineWidth = 1;
      [[18, H() - 18], [32, H() - 38], [52, H() - 26]].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 28, y);
        ctx.lineTo(x + 28, y - 18);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x + 28, y - 18, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(41,128,185,0.2)';
        ctx.fill();
      });
      ctx.restore();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <div className="dt-canvas-wrap">
      <div className="dt-live-badge">
        <span className="dt-live-dot" />
        Live System
      </div>
      <div className="dt-bottom-pills">
        {['Cloud', 'Data Insights', 'Automation', 'CX'].map((label, i) => (
          <span key={i} className="dt-pill">{label}</span>
        ))}
      </div>
      <canvas ref={canvasRef} style={{ width: '100%', height: 440, display: 'block' }} />
    </div>
  );
}

function LiveSystemSection() {
  return (
    <div className="dt-live-section-shell">
      <div className="cs-section-label">
        <span /><p>Live System</p><span />
      </div>
      <div className="dt-live-section">
        <div className="dt-live-text">
          <span className="cs-eyebrow">Live System Architecture</span>
          <h2>A Living, Breathing Digital Ecosystem</h2>
          <p>
            We connect cloud, AI, analytics, security, and automation into a unified digital system
            that adapts continuously to business and customer needs.
          </p>
          <ul>
            <li>Unified data and intelligence layer across teams</li>
            <li>Real-time observability with faster issue response</li>
            <li>Continuous delivery with predictable release quality</li>
            <li>Security built into every transformation layer</li>
          </ul>
        </div>
        <div className="dt-live-canvas-wrap">
          <DTIllustration />
        </div>
      </div>
    </div>
  );
}

export default function DigitalTransformation() {
  return <ServicePage config={config} midSection={<LiveSystemSection />} />;
}
