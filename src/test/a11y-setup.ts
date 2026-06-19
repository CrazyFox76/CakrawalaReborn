import { type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

type Violation = {
  id: string;
  impact: string;
  description: string;
  help: string;
  helpUrl: string;
  nodes: Array<Record<string, unknown>>;
};

export async function runAxeAudit(page: Page, tags?: string[]) {
  const builder = new AxeBuilder({ page });
  if (tags) {
    builder.withTags(tags);
  }
  return builder.analyze();
}

export function getViolationsSummary(violations: Violation[]): string {
  if (violations.length === 0) {
    return "No accessibility violations found.";
  }

  const lines = violations.map((v) => {
    const nodesInfo = v.nodes
      .map((n) => `    - ${n.failureSummary || n.html || "(no details)"}`)
      .join("\n");
    return `  [${v.impact}] ${v.id}: ${v.description}\n${nodesInfo}`;
  });

  return `Found ${violations.length} accessibility violation(s):\n${lines.join("\n")}`;
}

export function hasViolationsOfImpact(
  violations: Violation[],
  minImpact: "minor" | "moderate" | "serious" | "critical"
): boolean {
  const levels: Record<string, number> = {
    minor: 0,
    moderate: 1,
    serious: 2,
    critical: 3,
  };
  const threshold = levels[minImpact];
  return violations.some((v) => levels[v.impact] >= threshold);
}
