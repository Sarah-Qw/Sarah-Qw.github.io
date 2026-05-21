export type ProjectDetail = {
  slug: string;
  domain: string;
  title: string;
  tools: string[];
  overview: string;
  problem: string;
  workflow: string[];
  kpis: { value: string; label: string }[];
  insights: string[];
  recommendations: string[];
  github: string;
  accent: string;
};

export const PROJECTS: Record<string, ProjectDetail> = {
  pizza: {
    slug: "pizza",
    domain: "Food & Beverage · Restaurant Operations",
    title: "Pizza Sales Analysis",
    tools: ["SQL", "Power BI", "DAX", "SQL Server", "Excel Power Query"],
    overview:
      "A full analysis of a pizza restaurant's sales data from raw table to actionable insights. Used SQL to answer 20 business questions, then brought the key results into Power BI for a clean visual summary.",
    problem:
      "The restaurant collected sales data daily but had no structured way to understand what drives revenue. Which pizzas should stay on the menu? When should more staff be scheduled? What sizes are customers actually buying? The answers were buried in the data.",
    workflow: [
      "Imported and explored a real-world pizza sales dataset containing over 48K transactional records using SQL Server.",
      "Cleaned and standardized the dataset using Excel Power Query after resolving date formatting issues during SQL ingestion.",
      "Built optimized SQL views and analytical queries to answer 20 business-focused questions related to revenue, sales trends, peak hours, and product performance.",
      "Connected SQL Server to Power BI and developed interactive dashboards with KPI tracking for Total Revenue, Total Orders, and Total Pizzas Sold.",
      "Used DAX calculations to implement Month-over-Month (MoM) analysis for monitoring KPI growth and performance changes over time.",
    ],
    kpis: [
      { value: "$817.9K", label: "Total Revenue" },
      { value: "21,350", label: "Total Orders" },
      { value: "$38.31", label: "Avg Order Value" },
      { value: "49,574", label: "Pizzas Sold" },
      { value: "2.32", label: "Avg Pizzas / Order" },
    ],
    insights: [
      "Most orders happen around lunch (12-1 PM) and dinner (5-7 PM), which helps with staffing planning.",
      "Large-size pizzas generate the highest revenue even though medium is the most ordered size.",
      "A small number of pizza types make up most of the total revenue, the menu could be simplified.",
      "Weekend order volume consistently beats weekdays by a noticeable margin.",
      "The Classic category leads in both total orders and revenue.",
      "The Veggie category generated the lowest revenue contribution despite moderate order volume.",
    ],
    recommendations: [
      "Optimize staffing schedules during peak ordering hours (12-1 PM, 5-7 PM) to maintain service efficiency and reduce delays.",
      "Increase marketing focus on high-performing categories, especially Chicken pizzas and Large-size orders.",
      "Consider removing underperforming menu sizes to reduce operational complexity and inventory waste.",
      "Launch targeted promotions during low-sales periods such as Sundays and off-peak hours.",
      "Improve the profitability of the Veggie category through pricing adjustments or promotional bundles.",
    ],
    github: "https://github.com/Sarah-Qw/pizza-sales-sql-analysis",
    accent: "from-cherry via-cherry/80 to-gold/60",
  },
  jumia: {
    slug: "jumia",
    domain: "Retail · E-Commerce",
    title: "(Jumia) Retail Sales Analysis",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    overview:
      "A multi-page Power BI dashboard analyzing $2.3M in retail sales across 4 years, 4 customer segments, and 3 product categories. The real story of this project was not the charts, it was fixing the data model underneath them.",
    problem:
      "The business needed a centralized and reliable dashboard to monitor sales and profit performance, identify high and low-performing product categories, track regional sales trends, and analyze customer purchasing behavior. However, the raw data arrived in four separate yearly files with major structural issues, Product IDs were duplicated across categories, and postal codes overlapped between the Customers and Locations tables, creating problematic Many-to-Many relationships.",
    workflow: [
      "Merged 4 yearly Excel files using Power Query's folder-based import.",
      "Applied 12 transformation steps: removed duplicates, fixed data types, removed outliers, and cleaned text columns.",
      "Caught a shipping record showing -358 days, traced it to a year entry error and corrected it.",
      "Created a composite key (Category + Sub-Category + ID) to solve duplicate Product IDs across categories.",
      "Built a Zip Code Bridge Table to resolve the postal code overlap between Customers and Locations tables.",
      "Designed a Star Schema with a custom Calendar table for time intelligence calculations.",
      "Built DAX measures: Total Sales, Profit Margin, Total Orders, plus interactive UX toggle measures.",
      "Designed 4 dashboard pages with toggle buttons, custom tooltips, drill-down navigation, and reset filters.",
    ],
    kpis: [
      { value: "$2.30M", label: "Total Revenue" },
      { value: "$286.4K", label: "Total Profit" },
      { value: "12.47%", label: "Profit Margin" },
      { value: "5,496", label: "Total Orders" },
      { value: "793", label: "Total Customers" },
    ],
    insights: [
      "Discounts above 30% consistently destroy profitability at 80% discount, the margin collapses to -200%.",
      "Consumer segment is the profit engine, generating 46.8% of total profits.",
      "West region leads in sales ($764K) but Ontario converts sales to profit more efficiently ($321K).",
      "Furniture is a silent problem: $5.2M in sales but only $117K in profit.",
      "Profit declined from $434K (2009) to $342K (2012), a four-year downward trend despite steady sales.",
    ],
    recommendations: [
      "Set a hard discount cap at 30%, any discount above this generates losses, not growth.",
      "Investigate Furniture's cost structure urgently, $5.2M in sales should not produce only $117K in profit. Renegotiate supplier pricing or discontinue low-margin items.",
      "Study Ontario's profit efficiency model and replicate it in other regions.",
      "Launch loyalty programs targeting the Consumer segment since they drive nearly half of all profits.",
      "Conduct a cost audit to understand the four-year profit decline despite steady sales figures.",
    ],
    github: "https://github.com/Sarah-Qw/-retail-sales-powerbi-dashboard",
    accent: "from-gold via-gold/70 to-cherry/60",
  },
  bosta: {
    slug: "bosta",
    domain: "Logistics · Supply Chain",
    title: "(Bosta) Logistics & Shipping Data Analysis",
    tools: ["Excel", "Power Query", "Power Pivot", "DAX"],
    overview:
      "An operational deep-dive into a logistics company's shipment data, nearly 1 million records across 12 months. Built entirely in Excel using Power Query for merging and cleaning, Power Pivot for modeling, and DAX for performance metrics.",
    problem:
      "The data was scattered across 12 monthly CSV files and 3 dimension tables, all with serious quality issues. City names had dozens of spelling variations. Number columns had text stuck inside them preventing calculations. Some costs were recorded as negative. Thousands of cells were empty across critical columns. There was no unified view of operations, no way to see which routes cost the most, which carriers perform best, or where the seasonal surges hit hardest.",
    workflow: [
      "Merged 12 monthly CSV files into one dataset using Power Query's folder import functionality.",
      "Imported 3 dimension tables: Customers, Products, and Carriers.",
      "Standardized city names using Trim, Clean, Capitalize, and custom M Code rules to eliminate dozens of spelling variations.",
      "Stripped 'kg' and 'EGP' text from number columns for proper type conversion and calculations.",
      "Converted negative cost values to positive using absolute value transformation.",
      "Filled missing values with calculated averages across distance, quantity, weight, fees, and costs columns.",
      "Fixed invisible spaces creating phantom duplicates in the Status column using trim and clean operations.",
      "Built a Star Schema: Orders connected to Customers, Products, Carriers, and Calendar dimension tables.",
      "Created DAX measures: Total Orders, Net Profit, Total Cost, Average Shipping Cost.",
      "Applied dual filters per pivot field to extract the Top 10 carriers from 180+ total carriers.",
    ],
    kpis: [
      { value: "981K", label: "Total Shipments" },
      { value: "558.4M EGP", label: "Shipping Fees" },
      { value: "368.5M EGP", label: "Operational Cost" },
      { value: "189.9M EGP", label: "Net Profit" },
      { value: "376 EGP", label: "Avg Shipping Cost" },
    ],
    insights: [
      "Shipment volume climbs steadily from November onward, signaling seasonal demand growth.",
      "Geographic distribution is remarkably even, with Tanta leading as both top sender and receiver city.",
      "Aswan has the highest shipping cost (434 EGP), 15% above the company average (376 EGP), followed by Luxor (403 EGP).",
      "Tie Delivery leads profitability (1,048,240 EGP) but the top 10 carriers are separated by less than 1%.",
      "FMCG dominates both volume (30% of orders) and profit (56.5M EGP), making it the most valuable category.",
    ],
    recommendations: [
      "Negotiate dedicated shipping contracts for Aswan and Luxor routes to close the 15% cost gap above company average.",
      "Consolidate operations around the top 10 carriers instead of 180+ to reduce admin overhead and improve negotiation leverage on rates.",
      "Prepare inventory and logistics capacity before November each year for the predictable seasonal volume surge.",
      "Prioritize FMCG fulfillment speed since this single category generates 30% of volume and the highest profit contribution.",
      "Investigate whether the even city distribution reflects real demand, if not, reallocate resources to where demand actually concentrates.",
    ],
    github: "https://github.com/Sarah-Qw/logistics-operational-analysis",
    accent: "from-cherry/70 via-gold/40 to-gold",
  },
};
