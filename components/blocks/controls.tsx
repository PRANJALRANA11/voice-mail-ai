"use client";

import { useState } from "react";
import { Mic, MicOff, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import { AnimatePresence, motion } from "framer-motion";
import MicFFT from "./MicFFT";
import { cn } from "@/lib/utils";

export default function Controls() {
  const [connected, setConnected] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [micFft, setMicFft] = useState<number[]>([]); // Mocked FFT values

  // You can hook up real audio processing logic later.

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const endCall = () => {
    setConnected(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full p-4 flex items-center justify-center",
        "bg-gradient-to-t from-card via-card/90 to-card/0"
      )}
    >
      <AnimatePresence>
        {connected && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            className="p-4 bg-card border border-border rounded-lg shadow-sm flex items-center gap-4"
          >
            {/* Mic Toggle */}
            <Toggle pressed={!isMuted} onPressedChange={toggleMute}>
              {isMuted ? (
                <MicOff className="size-4" />
              ) : (
                <Mic className="size-4" />
              )}
            </Toggle>

            {/* Mic FFT Visualization */}
            <div className="relative grid h-8 w-48 shrink grow-0">
              <MicFFT fft={micFft} className="fill-current" />
            </div>

            {/* End Call Button */}
            <Button
              className="flex items-center gap-1"
              variant="destructive"
              onClick={endCall}
            >
              <Phone className="size-4 opacity-50" strokeWidth={2} />
              <span>End Call</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
