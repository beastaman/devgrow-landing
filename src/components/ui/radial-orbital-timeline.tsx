"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  accentColor?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className = "",
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 180;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "text-black bg-[#A78BFA] border-[#A78BFA]";
      case "in-progress": return "text-white bg-white/20 border-white/50";
      case "pending": return "text-white/60 bg-white/5 border-white/20";
    }
  };

  const getStatusLabel = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed": return "DONE";
      case "in-progress": return "IN PROGRESS";
      case "pending": return "UPCOMING";
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center overflow-hidden ${className}`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center orb */}
          <div className="absolute w-16 h-16 rounded-full flex items-center justify-center z-10"
            style={{
              background: "radial-gradient(circle at 30% 30%, #A78BFA, #8B5CF6)",
              boxShadow: "0 0 40px rgba(167,139,250,0.4), 0 0 80px rgba(167,139,250,0.15)",
            }}
          >
            <div className="absolute w-20 h-20 rounded-full border border-[#A78BFA]/30 animate-ping opacity-60" />
            <div
              className="absolute w-28 h-28 rounded-full border border-[#A78BFA]/15 animate-ping opacity-40"
              style={{ animationDelay: "0.6s" }}
            />
            <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-[360px] h-[360px] rounded-full"
            style={{ border: "1px solid rgba(167,139,250,0.12)" }}
          />

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const accent = item.accentColor || "#A78BFA";

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Pulse glow */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)`,
                    width: `${item.energy * 0.4 + 50}px`,
                    height: `${item.energy * 0.4 + 50}px`,
                    left: `-${(item.energy * 0.4 + 50 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 50 - 40) / 2}px`,
                  }}
                />

                {/* Node circle */}
                <div
                  className={`
                    w-11 h-11 rounded-full flex items-center justify-center
                    border-2 transition-all duration-300
                    ${isExpanded ? "scale-150" : ""}
                  `}
                  style={{
                    background: isExpanded ? accent : isRelated ? `${accent}55` : "rgba(3,3,8,0.9)",
                    borderColor: isExpanded ? accent : isRelated ? accent : `${accent}55`,
                    color: isExpanded ? "#000" : "#fff",
                    boxShadow: isExpanded ? `0 0 20px ${accent}66` : "none",
                  }}
                >
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div
                  className={`
                    absolute top-14 whitespace-nowrap text-xs font-bold tracking-wider
                    transition-all duration-300 -translate-x-1/2 left-1/2 text-center
                    ${isExpanded ? "scale-110" : ""}
                  `}
                  style={{ color: isExpanded ? accent : "rgba(255,255,255,0.65)" }}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 border-white/20 shadow-2xl overflow-visible"
                    style={{ background: "rgba(6,6,15,0.95)", backdropFilter: "blur(20px)" }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/30" />
                    <CardHeader className="pb-2 p-4">
                      <div className="flex justify-between items-center gap-2">
                        <Badge className={`px-2 text-[10px] ${getStatusStyles(item.status)}`}>
                          {getStatusLabel(item.status)}
                        </Badge>
                        <span className="text-[10px] font-mono text-white/40">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/70 p-4 pt-0">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-[10px] mb-1.5">
                          <span className="flex items-center gap-1 text-white/50">
                            <Zap size={9} /> Progress
                          </span>
                          <span className="font-mono text-white/50">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${item.energy}%`,
                              background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
                            }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2 gap-1">
                            <Link size={9} className="text-white/40" />
                            <h4 className="text-[10px] uppercase tracking-wider font-medium text-white/40">
                              Connected
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-6 px-2 py-0 text-[10px] rounded-md border-white/15 bg-transparent hover:bg-white/10 text-white/60 hover:text-white transition-all"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-white/40" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
