"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { StrategyMobileCard } from "./StrategyMobileCard";

interface Strategy {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  metrics: {
    averageReturn?: string;
    holdPeriod?: string;
    minInvestment?: string;
  };
  category: string;
  isSelectable: boolean;
}

interface InvestmentStrategiesMobileTabsProps {
  strategies: Strategy[];
  className?: string;
}

export function InvestmentStrategiesMobileTabs({
  strategies,
  className,
}: InvestmentStrategiesMobileTabsProps) {
  // Filter selectable strategies and group by category
  const selectableStrategies = strategies.filter(
    (strategy) => strategy.isSelectable
  );

  const residentialStrategies = selectableStrategies.filter(
    (strategy) => strategy.category === "residential"
  );

  const commercialStrategies = selectableStrategies.filter(
    (strategy) => strategy.category === "commercial"
  );

  return (
    <div className={cn("w-full", className)}>
      <Tabs defaultValue="residential" className="w-full">
        {/* Premium Tab Navigation - Dark Theme */}
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-xs h-10">
          <TabsTrigger
            value="residential"
            className="data-[state=active]:bg-slate-800/90 data-[state=active]:text-white data-[state=active]:shadow-sm text-slate-300 font-medium transition-all duration-300 hover:text-white"
          >
            <span className="text-sm sm:text-base">Residential</span>
            <span className="ml-2 text-xs bg-slate-700/50 text-slate-200 px-2 py-0.5 rounded-full border border-slate-600/50">
              {residentialStrategies.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="commercial"
            className="data-[state=active]:bg-slate-800/90 data-[state=active]:text-white data-[state=active]:shadow-sm text-slate-300 font-medium transition-all duration-300 hover:text-white"
          >
            <span className="text-sm sm:text-base">Commercial</span>
            <span className="ml-2 text-xs bg-slate-700/50 text-slate-200 px-2 py-0.5 rounded-full border border-slate-600/50">
              {commercialStrategies.length}
            </span>
          </TabsTrigger>
        </TabsList>

        {/* Residential Tab Content */}
        <TabsContent value="residential" className="mt-0">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {residentialStrategies.length > 0 ? (
              residentialStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <StrategyMobileCard strategy={strategy} />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-slate-500 text-sm font-light">
                  No residential strategies available
                </div>
              </div>
            )}
          </motion.div>
        </TabsContent>

        {/* Commercial Tab Content */}
        <TabsContent value="commercial" className="mt-0">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {commercialStrategies.length > 0 ? (
              commercialStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <StrategyMobileCard strategy={strategy} />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-slate-500 text-sm font-light">
                  No commercial strategies available
                </div>
              </div>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
