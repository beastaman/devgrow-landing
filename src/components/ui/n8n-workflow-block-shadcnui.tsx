"use client";

import { motion, type PanInfo } from "framer-motion";
import type React from "react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, Map, Code2, Rocket } from "lucide-react";

interface WorkflowNode {
  id: string;
  type: "trigger" | "action";
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position: { x: number; y: number };
}

interface WorkflowConnection {
  from: string;
  to: string;
}

const NODE_WIDTH = 210;
const NODE_HEIGHT = 115;

const colorClasses: Record<string, string> = {
  indigo: "border-indigo-400/40 bg-indigo-400/10 text-indigo-400",
  purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
  violet: "border-violet-400/40 bg-violet-400/10 text-violet-400",
  amber: "border-amber-400/40 bg-amber-400/10 text-amber-400",
};

const initialNodes: WorkflowNode[] = [
  {
    id: "node-1",
    type: "trigger",
    step: "01",
    title: "Discovery & Research",
    description: "Goals, target audience & competitive landscape mapped out in detail.",
    icon: Search,
    color: "indigo",
    position: { x: 20, y: 60 },
  },
  {
    id: "node-2",
    type: "action",
    step: "02",
    title: "Strategy & Planning",
    description: "Architecture, design system & milestones — a clear path to production.",
    icon: Map,
    color: "purple",
    position: { x: 270, y: 60 },
  },
  {
    id: "node-3",
    type: "action",
    step: "03",
    title: "Build & Test",
    description: "Agile sprints with live demos and weekly progress check-ins.",
    icon: Code2,
    color: "violet",
    position: { x: 520, y: 60 },
  },
  {
    id: "node-4",
    type: "action",
    step: "04",
    title: "Launch & Grow",
    description: "Deploy, monitor, tune. Ongoing support well beyond launch day.",
    icon: Rocket,
    color: "amber",
    position: { x: 770, y: 60 },
  },
];

const initialConnections: WorkflowConnection[] = [
  { from: "node-1", to: "node-2" },
  { from: "node-2", to: "node-3" },
  { from: "node-3", to: "node-4" },
];

function WorkflowConnectionLine({
  from,
  to,
  nodes,
}: {
  from: string;
  to: string;
  nodes: WorkflowNode[];
}) {
  const fromNode = nodes.find((n) => n.id === from);
  const toNode = nodes.find((n) => n.id === to);
  if (!fromNode || !toNode) return null;

  const startX = fromNode.position.x + NODE_WIDTH;
  const startY = fromNode.position.y + NODE_HEIGHT / 2;
  const endX = toNode.position.x;
  const endY = toNode.position.y + NODE_HEIGHT / 2;
  const cp1X = startX + (endX - startX) * 0.5;
  const cp2X = endX - (endX - startX) * 0.5;
  const path = `M${startX},${startY} C${cp1X},${startY} ${cp2X},${endY} ${endX},${endY}`;

  return (
    <path
      d={path}
      fill="none"
      stroke="#A78BFA"
      strokeWidth={1.5}
      strokeDasharray="8,6"
      strokeLinecap="round"
      opacity={0.35}
    />
  );
}

export function ProcessWorkflow() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [connections] = useState<WorkflowConnection[]>(initialConnections);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [contentSize, setContentSize] = useState(() => ({
    width: Math.max(...initialNodes.map((n) => n.position.x + NODE_WIDTH)) + 60,
    height: Math.max(...initialNodes.map((n) => n.position.y + NODE_HEIGHT)) + 60,
  }));

  const handleDragStart = (nodeId: string) => {
    setDraggingNodeId(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    if (node) dragStartPosition.current = { x: node.position.x, y: node.position.y };
  };

  const handleDrag = (nodeId: string, { offset }: PanInfo) => {
    if (draggingNodeId !== nodeId || !dragStartPosition.current) return;
    const newX = Math.max(0, dragStartPosition.current.x + offset.x);
    const newY = Math.max(0, dragStartPosition.current.y + offset.y);
    flushSync(() => {
      setNodes((prev) =>
        prev.map((node) =>
          node.id === nodeId ? { ...node, position: { x: newX, y: newY } } : node
        )
      );
    });
    setContentSize((prev) => ({
      width: Math.max(prev.width, newX + NODE_WIDTH + 60),
      height: Math.max(prev.height, newY + NODE_HEIGHT + 60),
    }));
  };

  const handleDragEnd = () => {
    setDraggingNodeId(null);
    dragStartPosition.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl p-4 sm:p-6"
      style={{
        background: "rgba(8,6,20,0.7)",
        border: "1px solid rgba(167,139,250,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-purple-400/40 bg-purple-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400"
        >
          Active
        </Badge>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="no-scrollbar relative w-full overflow-x-auto overflow-y-hidden rounded-xl"
        style={{
          height: "clamp(260px, 40vw, 380px)",
          background: "rgba(4,3,12,0.6)",
          border: "1px solid rgba(255,255,255,0.06)",
          /* subtle dot grid */
          backgroundImage:
            "radial-gradient(circle, rgba(167,139,250,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        role="region"
        aria-label="Process workflow canvas"
        tabIndex={0}
      >
        <div
          className="relative"
          style={{ minWidth: contentSize.width, minHeight: contentSize.height }}
        >
          {/* SVG connections */}
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            width={contentSize.width}
            height={contentSize.height}
            style={{ overflow: "visible" }}
            aria-hidden="true"
          >
            {connections.map((c) => (
              <WorkflowConnectionLine
                key={`${c.from}-${c.to}`}
                from={c.from}
                to={c.to}
                nodes={nodes}
              />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isDragging = draggingNodeId === node.id;
            return (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                dragConstraints={{ left: 0, top: 0, right: 100000, bottom: 100000 }}
                onDragStart={() => handleDragStart(node.id)}
                onDrag={(_, info) => handleDrag(node.id, info)}
                onDragEnd={handleDragEnd}
                style={{
                  x: node.position.x,
                  y: node.position.y,
                  width: NODE_WIDTH,
                  transformOrigin: "0 0",
                }}
                className="absolute cursor-grab"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: parseInt(node.step) * 0.07 }}
                whileHover={{ scale: 1.03 }}
                whileDrag={{ scale: 1.06, zIndex: 50, cursor: "grabbing" }}
                aria-grabbed={isDragging}
              >
                <Card
                  className={`group/node relative w-full overflow-hidden rounded-xl border ${colorClasses[node.color]} p-3 transition-all hover:shadow-xl ${isDragging ? "shadow-2xl ring-2 ring-purple-400/40" : ""}`}
                  style={{
                    background: "rgba(10,7,25,0.92)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/node:opacity-100" />
                  <div className="relative space-y-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${colorClasses[node.color]}`}
                        style={{ background: "rgba(0,0,0,0.4)" }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                          Step {node.step}
                        </div>
                        <h3 className="truncate text-xs font-semibold tracking-tight text-white">
                          {node.title}
                        </h3>
                      </div>
                    </div>
                    <p className="line-clamp-2 text-[10px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {node.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px]" style={{ color: "rgba(255,255,255,0.28)" }}>
                      <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
                      <span className="uppercase tracking-[0.1em]">Connected</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg px-4 py-2.5"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          {[
            { dot: "#818CF8", label: "4 Steps" },
            { dot: "#A78BFA", label: "3 Connections" },
            { dot: "#F59E0B", label: "3–4 Weeks" },
          ].map(({ dot, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
              <span className="uppercase tracking-[0.15em]">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.22)" }}>
          Drag to reposition
        </p>
      </div>
    </div>
  );
}
