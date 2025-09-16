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
        {/* Light Tab Navigation */}
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-white border border-gray-200 shadow-sm rounded-xs h-12">
          <TabsTrigger
            value="residential"
            className="data-[state=active]:bg-navy-600 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-semibold text-gray-700 font-medium transition-all duration-300 hover:text-navy-600 hover:bg-gray-50 rounded-xs"
          >
            <span className="text-sm sm:text-base">Residential</span>
          </TabsTrigger>
          <TabsTrigger
            value="commercial"
            className="data-[state=active]:bg-navy-600 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-semibold text-gray-700 font-medium transition-all duration-300 hover:text-navy-600 hover:bg-gray-50 rounded-xs"
          >
            <span className="text-sm sm:text-base">Commercial</span>
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
